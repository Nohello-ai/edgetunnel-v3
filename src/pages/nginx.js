/**
 * 默认伪装页面（动态小猫 + 今日点击）
 * 兼容旧调用名 nginx()
 */
export async function nginx() {
	return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="robots" content="noindex, nofollow">
	<title>喵呜小站 · 今日也要元气满满</title>
	<style>
		:root {
			--pink: #ff8fab;
			--pink-deep: #ff5d8f;
			--cream: #fff7f3;
			--ink: #3d2c2e;
			--muted: #8a6f73;
			--card: rgba(255, 255, 255, 0.78);
			--shadow: 0 20px 50px -20px rgba(255, 93, 143, 0.35);
		}

		* { margin: 0; padding: 0; box-sizing: border-box; }

		body {
			min-height: 100vh;
			font-family: "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
			color: var(--ink);
			background:
				radial-gradient(900px 500px at 10% 0%, rgba(255, 182, 193, 0.45), transparent 55%),
				radial-gradient(800px 480px at 95% 15%, rgba(186, 230, 253, 0.4), transparent 50%),
				radial-gradient(700px 420px at 50% 100%, rgba(254, 240, 138, 0.35), transparent 55%),
				linear-gradient(165deg, #fff5f8, #f0f7ff 50%, #fff9f0);
			overflow-x: hidden;
			position: relative;
		}

		/* floating paw prints */
		.paws {
			position: fixed;
			inset: 0;
			pointer-events: none;
			z-index: 0;
			overflow: hidden;
		}
		.paw {
			position: absolute;
			font-size: 22px;
			opacity: 0.12;
			animation: floatPaw 12s linear infinite;
		}
		.paw:nth-child(1) { left: 8%; animation-delay: 0s; }
		.paw:nth-child(2) { left: 22%; animation-delay: 2s; font-size: 16px; }
		.paw:nth-child(3) { left: 48%; animation-delay: 4s; }
		.paw:nth-child(4) { left: 68%; animation-delay: 1s; font-size: 18px; }
		.paw:nth-child(5) { left: 85%; animation-delay: 3s; font-size: 14px; }

		@keyframes floatPaw {
			0% { transform: translateY(110vh) rotate(0deg); opacity: 0; }
			10% { opacity: 0.15; }
			90% { opacity: 0.12; }
			100% { transform: translateY(-10vh) rotate(30deg); opacity: 0; }
		}

		.wrap {
			position: relative;
			z-index: 1;
			min-height: 100vh;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 28px 16px 40px;
		}

		.card {
			width: min(460px, 100%);
			background: var(--card);
			backdrop-filter: blur(18px) saturate(1.2);
			-webkit-backdrop-filter: blur(18px) saturate(1.2);
			border: 1px solid rgba(255, 255, 255, 0.75);
			border-radius: 28px;
			box-shadow: var(--shadow), inset 0 1px 0 rgba(255,255,255,0.85);
			padding: 28px 26px 24px;
			text-align: center;
			animation: cardIn 0.7s cubic-bezier(.2,.8,.2,1) both;
		}

		@keyframes cardIn {
			from { opacity: 0; transform: translateY(24px) scale(0.96); }
			to { opacity: 1; transform: translateY(0) scale(1); }
		}

		/* ===== CSS Cat ===== */
		.cat-stage {
			height: 150px;
			display: flex;
			align-items: flex-end;
			justify-content: center;
			margin-bottom: 8px;
			position: relative;
		}

		.cat {
			position: relative;
			width: 120px;
			height: 110px;
			animation: bounce 2.4s ease-in-out infinite;
			cursor: pointer;
			user-select: none;
		}

		@keyframes bounce {
			0%, 100% { transform: translateY(0); }
			50% { transform: translateY(-8px); }
		}

		.cat.pet {
			animation: pet 0.45s ease;
		}
		@keyframes pet {
			0% { transform: scale(1) rotate(0); }
			30% { transform: scale(1.08) rotate(-6deg); }
			60% { transform: scale(1.05) rotate(6deg); }
			100% { transform: scale(1) rotate(0); }
		}

		/* body */
		.cat-body {
			position: absolute;
			left: 18px;
			bottom: 8px;
			width: 84px;
			height: 58px;
			background: linear-gradient(160deg, #ffd6e0, #ffb3c6);
			border-radius: 42px 42px 28px 28px;
			box-shadow: inset 0 -8px 0 rgba(255, 93, 143, 0.12);
		}
		.cat-body::after {
			content: '';
			position: absolute;
			left: 50%;
			bottom: 10px;
			width: 28px;
			height: 18px;
			transform: translateX(-50%);
			background: #fff6f8;
			border-radius: 50%;
			opacity: 0.9;
		}

		/* head */
		.cat-head {
			position: absolute;
			left: 24px;
			bottom: 48px;
			width: 72px;
			height: 60px;
			background: linear-gradient(160deg, #ffe0e9, #ffc2d1);
			border-radius: 50% 50% 46% 46%;
			z-index: 2;
		}

		/* ears */
		.ear {
			position: absolute;
			top: -10px;
			width: 0;
			height: 0;
			border-left: 12px solid transparent;
			border-right: 12px solid transparent;
			border-bottom: 22px solid #ffb3c6;
			z-index: 1;
		}
		.ear.left { left: 6px; transform: rotate(-18deg); }
		.ear.right { right: 6px; transform: rotate(18deg); }
		.ear::after {
			content: '';
			position: absolute;
			left: -6px;
			top: 8px;
			border-left: 6px solid transparent;
			border-right: 6px solid transparent;
			border-bottom: 12px solid #ff8fab;
		}

		/* face */
		.eye {
			position: absolute;
			top: 24px;
			width: 10px;
			height: 12px;
			background: #3d2c2e;
			border-radius: 50%;
			animation: blink 4.5s infinite;
		}
		.eye.left { left: 18px; }
		.eye.right { right: 18px; }
		.eye::after {
			content: '';
			position: absolute;
			top: 2px;
			left: 2px;
			width: 3px;
			height: 3px;
			background: #fff;
			border-radius: 50%;
		}
		@keyframes blink {
			0%, 92%, 100% { transform: scaleY(1); }
			95% { transform: scaleY(0.1); }
		}

		.nose {
			position: absolute;
			left: 50%;
			top: 34px;
			width: 8px;
			height: 6px;
			background: #ff5d8f;
			border-radius: 50%;
			transform: translateX(-50%);
		}
		.mouth {
			position: absolute;
			left: 50%;
			top: 40px;
			width: 16px;
			height: 8px;
			border: 2px solid #d45d7a;
			border-top: 0;
			border-radius: 0 0 12px 12px;
			transform: translateX(-50%);
			background: transparent;
		}

		.whisker {
			position: absolute;
			top: 36px;
			width: 18px;
			height: 1.5px;
			background: #d45d7a;
			opacity: 0.55;
			border-radius: 2px;
		}
		.whisker.l1 { left: 2px; transform: rotate(12deg); }
		.whisker.l2 { left: 2px; top: 40px; transform: rotate(-8deg); }
		.whisker.r1 { right: 2px; transform: rotate(-12deg); }
		.whisker.r2 { right: 2px; top: 40px; transform: rotate(8deg); }

		/* tail */
		.tail {
			position: absolute;
			right: 2px;
			bottom: 28px;
			width: 36px;
			height: 12px;
			background: linear-gradient(90deg, #ffb3c6, #ff8fab);
			border-radius: 12px;
			transform-origin: left center;
			animation: wag 1.6s ease-in-out infinite;
			z-index: 0;
		}
		@keyframes wag {
			0%, 100% { transform: rotate(15deg); }
			50% { transform: rotate(48deg); }
		}

		/* paws */
		.paw-front {
			position: absolute;
			bottom: 2px;
			width: 16px;
			height: 14px;
			background: #ffc2d1;
			border-radius: 50% 50% 40% 40%;
			z-index: 3;
		}
		.paw-front.left { left: 34px; }
		.paw-front.right { right: 34px; }

		/* speech bubble */
		.meow {
			position: absolute;
			top: 6px;
			right: 18%;
			background: #fff;
			color: var(--pink-deep);
			font-size: 13px;
			font-weight: 700;
			padding: 6px 10px;
			border-radius: 14px 14px 14px 4px;
			box-shadow: 0 6px 16px -8px rgba(255, 93, 143, 0.5);
			opacity: 0;
			transform: translateY(6px) scale(0.9);
			transition: opacity .25s, transform .25s;
			pointer-events: none;
			white-space: nowrap;
		}
		.meow.show {
			opacity: 1;
			transform: translateY(0) scale(1);
		}

		/* hearts when pet */
		.hearts {
			position: absolute;
			inset: 0;
			pointer-events: none;
			overflow: visible;
		}
		.heart {
			position: absolute;
			left: 50%;
			bottom: 70%;
			font-size: 14px;
			animation: heartUp 0.9s ease-out forwards;
		}
		@keyframes heartUp {
			0% { opacity: 1; transform: translate(-50%, 0) scale(0.6); }
			100% { opacity: 0; transform: translate(calc(-50% + var(--dx)), -50px) scale(1.2); }
		}

		h1 {
			font-size: 1.55rem;
			letter-spacing: -0.02em;
			margin: 6px 0 6px;
			background: linear-gradient(120deg, #ff5d8f, #fb923c 55%, #f472b6);
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
		}

		.subtitle {
			color: var(--muted);
			font-size: 0.92rem;
			line-height: 1.55;
			margin-bottom: 18px;
		}

		/* counter */
		.stats {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 10px;
			margin-bottom: 16px;
		}
		.stat {
			background: linear-gradient(160deg, #fff, #fff5f8);
			border: 1px solid rgba(255, 143, 171, 0.25);
			border-radius: 16px;
			padding: 12px 10px;
			box-shadow: 0 6px 16px -12px rgba(255, 93, 143, 0.4);
		}
		.stat-label {
			font-size: 12px;
			color: var(--muted);
			margin-bottom: 4px;
		}
		.stat-value {
			font-size: 1.55rem;
			font-weight: 800;
			font-variant-numeric: tabular-nums;
			letter-spacing: -0.03em;
			background: linear-gradient(135deg, #ff5d8f, #fb7185);
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
			line-height: 1.1;
		}
		.stat-value.pet-count {
			background: linear-gradient(135deg, #38bdf8, #818cf8);
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
		}
		.stat-hint {
			font-size: 11px;
			color: #b08a90;
			margin-top: 2px;
		}

		.tip {
			font-size: 12.5px;
			color: var(--muted);
			line-height: 1.5;
			padding: 10px 12px;
			background: rgba(255, 255, 255, 0.55);
			border-radius: 12px;
			border: 1px dashed rgba(255, 143, 171, 0.35);
		}
		.tip strong { color: var(--pink-deep); }

		.footer {
			margin-top: 14px;
			font-size: 11px;
			color: #b8a0a4;
		}
		.footer a {
			color: #ff7a9e;
			text-decoration: none;
		}
		.footer a:hover { text-decoration: underline; }

		/* second little cat peeking */
		.mini-cat {
			position: absolute;
			left: 12px;
			bottom: 10px;
			width: 42px;
			height: 36px;
			opacity: 0.95;
			animation: peek 3.2s ease-in-out infinite;
		}
		@keyframes peek {
			0%, 100% { transform: translateY(8px) rotate(-4deg); }
			50% { transform: translateY(0) rotate(2deg); }
		}
		.mini-cat .m-body {
			position: absolute;
			bottom: 0;
			left: 6px;
			width: 30px;
			height: 20px;
			background: #c4b5fd;
			border-radius: 16px 16px 10px 10px;
		}
		.mini-cat .m-head {
			position: absolute;
			bottom: 12px;
			left: 8px;
			width: 26px;
			height: 22px;
			background: #ddd6fe;
			border-radius: 50%;
		}
		.mini-cat .m-ear {
			position: absolute;
			top: -5px;
			width: 0; height: 0;
			border-left: 5px solid transparent;
			border-right: 5px solid transparent;
			border-bottom: 9px solid #c4b5fd;
		}
		.mini-cat .m-ear.l { left: 2px; transform: rotate(-15deg); }
		.mini-cat .m-ear.r { right: 2px; transform: rotate(15deg); }
		.mini-cat .m-eye {
			position: absolute;
			top: 9px;
			width: 3px; height: 4px;
			background: #4c1d95;
			border-radius: 50%;
		}
		.mini-cat .m-eye.l { left: 7px; }
		.mini-cat .m-eye.r { right: 7px; }

		@media (max-width: 420px) {
			.card { padding: 22px 16px 18px; border-radius: 22px; }
			h1 { font-size: 1.35rem; }
			.stat-value { font-size: 1.35rem; }
		}

		@media (prefers-reduced-motion: reduce) {
			.cat, .tail, .eye, .paw, .mini-cat { animation: none !important; }
		}
	</style>
</head>
<body>
	<div class="paws" aria-hidden="true">
		<span class="paw">🐾</span>
		<span class="paw">🐾</span>
		<span class="paw">🐾</span>
		<span class="paw">🐾</span>
		<span class="paw">🐾</span>
	</div>

	<div class="wrap">
		<div class="card">
			<div class="cat-stage">
				<div class="meow" id="meowBubble">喵~</div>
				<div class="hearts" id="hearts"></div>
				<div class="cat" id="cat" title="戳戳小猫" role="button" tabindex="0" aria-label="摸摸小猫">
					<div class="tail"></div>
					<div class="cat-body"></div>
					<div class="paw-front left"></div>
					<div class="paw-front right"></div>
					<div class="cat-head">
						<div class="ear left"></div>
						<div class="ear right"></div>
						<div class="eye left"></div>
						<div class="eye right"></div>
						<div class="nose"></div>
						<div class="mouth"></div>
						<div class="whisker l1"></div>
						<div class="whisker l2"></div>
						<div class="whisker r1"></div>
						<div class="whisker r2"></div>
					</div>
				</div>
				<div class="mini-cat" aria-hidden="true">
					<div class="m-body"></div>
					<div class="m-head">
						<div class="m-ear l"></div>
						<div class="m-ear r"></div>
						<div class="m-eye l"></div>
						<div class="m-eye r"></div>
					</div>
				</div>
			</div>

			<h1>喵呜小站上线啦</h1>
			<p class="subtitle">今天也是元气满满的一天～<br>点一点小猫，给你加好运 ✨</p>

			<div class="stats">
				<div class="stat">
					<div class="stat-label">今日点击</div>
					<div class="stat-value" id="todayClicks">0</div>
					<div class="stat-hint" id="dateLabel">—</div>
				</div>
				<div class="stat">
					<div class="stat-label">摸摸次数</div>
					<div class="stat-value pet-count" id="petCount">0</div>
					<div class="stat-hint">累计撸猫</div>
				</div>
			</div>

			<p class="tip">戳一戳粉红小猫会 <strong>喵</strong> 哦～ 今日点击会按天自动重置。</p>
			<p class="footer">Thank you for visiting · powered by curiosity</p>
		</div>
	</div>

	<script>
	(function () {
		var STORAGE_CLICKS = 'meow_today_clicks_v1';
		var STORAGE_PETS = 'meow_pet_total_v1';
		var STORAGE_DATE = 'meow_today_date_v1';

		var meows = ['喵~', '喵呜！', '摸摸头~', '咕噜咕噜', '爪巴！', '今天也要开心', '想吃小鱼干', '蹭蹭～', '好舒服…', '再点一下！'];

		function todayKey() {
			var d = new Date();
			var m = String(d.getMonth() + 1).padStart(2, '0');
			var day = String(d.getDate()).padStart(2, '0');
			return d.getFullYear() + '-' + m + '-' + day;
		}

		function loadClicks() {
			var today = todayKey();
			var savedDate = localStorage.getItem(STORAGE_DATE);
			var clicks = parseInt(localStorage.getItem(STORAGE_CLICKS) || '0', 10) || 0;
			if (savedDate !== today) {
				clicks = 0;
				localStorage.setItem(STORAGE_DATE, today);
				localStorage.setItem(STORAGE_CLICKS, '0');
			}
			return clicks;
		}

		function saveClicks(n) {
			localStorage.setItem(STORAGE_DATE, todayKey());
			localStorage.setItem(STORAGE_CLICKS, String(n));
		}

		function loadPets() {
			return parseInt(localStorage.getItem(STORAGE_PETS) || '0', 10) || 0;
		}

		function savePets(n) {
			localStorage.setItem(STORAGE_PETS, String(n));
		}

		var clicks = loadClicks();
		var pets = loadPets();

		// first visit of the day / page open counts as a click
		clicks += 1;
		saveClicks(clicks);

		var elClicks = document.getElementById('todayClicks');
		var elPets = document.getElementById('petCount');
		var elDate = document.getElementById('dateLabel');
		var cat = document.getElementById('cat');
		var bubble = document.getElementById('meowBubble');
		var hearts = document.getElementById('hearts');

		elClicks.textContent = clicks;
		elPets.textContent = pets;
		elDate.textContent = todayKey().replace(/-/g, '/');

		var bubbleTimer = null;
		function showMeow(text) {
			bubble.textContent = text || meows[Math.floor(Math.random() * meows.length)];
			bubble.classList.add('show');
			clearTimeout(bubbleTimer);
			bubbleTimer = setTimeout(function () {
				bubble.classList.remove('show');
			}, 1200);
		}

		function spawnHeart() {
			var h = document.createElement('span');
			h.className = 'heart';
			h.textContent = Math.random() > 0.5 ? '💕' : '✨';
			h.style.setProperty('--dx', (Math.random() * 40 - 20) + 'px');
			hearts.appendChild(h);
			setTimeout(function () { h.remove(); }, 900);
		}

		function petCat() {
			clicks += 1;
			pets += 1;
			saveClicks(clicks);
			savePets(pets);
			elClicks.textContent = clicks;
			elPets.textContent = pets;

			cat.classList.remove('pet');
			void cat.offsetWidth;
			cat.classList.add('pet');

			showMeow();
			spawnHeart();
			if (Math.random() > 0.4) setTimeout(spawnHeart, 80);
		}

		cat.addEventListener('click', petCat);
		cat.addEventListener('keydown', function (e) {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				petCat();
			}
		});

		// idle meow occasionally
		setInterval(function () {
			if (Math.random() > 0.65) showMeow();
		}, 8000);

		// greet
		setTimeout(function () { showMeow('欢迎回来～'); }, 600);
	})();
	</script>
</body>
</html>
`;
}

/** 别名：伪装页 */
export const camouflagePage = nginx;
