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

// Minified single-file output: no comments, no banner (meta goes to build-meta.json).
await esbuild.build({
  entryPoints: [join(root, "src/index.js")],
  bundle: true,
  outfile: outFile,
  format: "esm",
  platform: "neutral",
  target: ["es2022"],
  minify: true,
  legalComments: "none",
  charset: "utf8",
  logLevel: "info",
});

const code = readFileSync(outFile, "utf8");
const bytes = Buffer.byteLength(code, "utf8");
const lines = code.split("\n").length;

const meta = {
  name: pkg.name,
  version,
  built: buildTime,
  bytes,
  lines,
  file: "dist/worker.js",
  minify: true,
  comments: "stripped",
};
writeFileSync(join(outDir, "build-meta.json"), JSON.stringify(meta, null, 2) + "\n");

console.log(`\nBundle ready: dist/worker.js`);
console.log(`   version: ${version}`);
console.log(`   size:    ${(bytes / 1024).toFixed(1)} KB (${lines} lines)`);
console.log(`   minify:  on (comments stripped)`);
console.log(`   paste into Cloudflare Workers dashboard to deploy.\n`);
