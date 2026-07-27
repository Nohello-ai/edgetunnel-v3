#!/usr/bin/env node
/**
 * Bundle modular src/ into a single worker.js for Cloudflare Dashboard paste.
 */
import * as esbuild from "esbuild";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outDir = join(root, "dist");
const outFile = join(outDir, "worker.js");
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));

const version = process.env.RELEASE_VERSION || pkg.version;
const buildTime = new Date().toISOString();

mkdirSync(outDir, { recursive: true });

const banner = `/**
 * edgetunnel-v3 — single-file Worker bundle
 * version: ${version}
 * built:   ${buildTime}
 * source:  https://github.com/Nohello-ai/edgetunnel-v3
 *
 * Built from modular src/ via: npm run build
 * Deploy: paste this entire file into Cloudflare Workers → Edit code → Deploy.
 * Required runtime vars: ADMIN (+ password aliases), KEY (length >= 16).
 * Required binding: KV.
 */
`;

await esbuild.build({
  entryPoints: [join(root, "src/index.js")],
  bundle: true,
  outfile: outFile,
  format: "esm",
  platform: "neutral",
  target: ["es2022"],
  legalComments: "none",
  charset: "utf8",
  banner: { js: banner },
  logLevel: "info",
});

const code = readFileSync(outFile, "utf8");
const bytes = Buffer.byteLength(code, "utf8");
const lines = code.split("\n").length;

// also write a small meta file for the release notes
const meta = {
  name: pkg.name,
  version,
  built: buildTime,
  bytes,
  lines,
  file: "dist/worker.js",
};
writeFileSync(join(outDir, "build-meta.json"), JSON.stringify(meta, null, 2) + "\n");

console.log(`\n✅ Bundle ready: dist/worker.js`);
console.log(`   version: ${version}`);
console.log(`   size:    ${(bytes / 1024).toFixed(1)} KB (${lines} lines)`);
console.log(`   paste into Cloudflare Workers dashboard to deploy.\n`);
