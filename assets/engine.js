// Shared engine for the four cinematic themes.
// Each theme page defines window.VARIANT before loading this file.
(() => {
const S = window.SITE, U = window.SITE_UTIL, V = window.VARIANT, e = U.esc, RM = U.reducedMotion;
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const mail = `mailto:${S.email}?subject=${encodeURIComponent("Hello from your website")}`;
const fn = (n) => `<sup class="fn"><a href="#fn-${n}" aria-label="Footnote ${n}">${n}</a></sup>`;

const THEMES = [
  { id: "ember", label: "Ember", sw: "#FF5B1F" },
  { id: "arizona", label: "Arizona", sw: "linear-gradient(135deg,#8C1D40 50%,#FFC627 50%)" },
  { id: "liquid", label: "Liquid", sw: "#298DFF" },
  { id: "neon", label: "Neon", sw: "#CCFF00" },
];
// Arizona is the homepage at the site root; the other themes live in sibling folders.
const HOME = "arizona";
const themeHref = (id) => id === HOME ? (V.homeHref || "../") : (V.themeBase || "../") + id + "/";

const ic = {
  check: '<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.2 4L19 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  pause: '<svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h4v16H7zM13 4h4v16h-4z" fill="currentColor"/></svg>',
  play: '<svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4l13 8-13 8z" fill="currentColor"/></svg>',
  up: '<svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5l8 12H4z" fill="currentColor"/></svg>',
  down: '<svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19L4 7h16z" fill="currentColor"/></svg>',
  tiles: [
    '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/>',
    '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    '<path d="M9 4h6v3H9z"/><path d="M7 5H5v16h14V5h-2"/><path d="M9 14l2 2 4-4"/>',
    '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.6 2.5L16 9.5"/>',
    '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/>',
    '<path d="M3 12h4l3-8 4 16 3-8h4"/>',
  ],
};
const tileIcon = (i) => `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ic.tiles[i % ic.tiles.length]}</svg>`;

// ---------- markup ----------
const fnFor = { 433: 2, 40: 1 };
const app = $("#app");
app.innerHTML = `
<a class="skip" href="#main">Skip to content</a>
<header class="site">
  <div class="wrap">
    <a class="logo" href="#main">${e(V.logo || "MOH")}<span>.</span></a>
    <nav class="navpill" aria-label="Primary">
      <div class="links"><a href="#impact">Impact</a><a href="#experience">Experience</a><a href="#secure">Security</a><a href="#ventures">Ventures</a></div>
      <div class="themes" role="group" aria-label="Choose a theme">
        ${THEMES.map(t => `<a href="${themeHref(t.id)}" style="--sw:${t.sw}" aria-label="${t.label} theme"${t.id === V.id ? ' aria-current="page"' : ""} title="${t.label}"></a>`).join("")}
      </div>
      <a class="cta" href="#contact">Contact</a>
    </nav>
  </div>
</header>

<main id="main">
  <section class="hero" id="hero" aria-label="Introduction">
    <div class="glow" aria-hidden="true"></div>
    <canvas id="scene" role="img" aria-label="${e(V.sceneLabel)}"></canvas>
    <div class="hero-top"><div class="wrap"><p class="mono"><b>●</b> ${e(S.name)} · ${e(S.location)}</p><p class="mono">${e(S.role)} · ${e(S.company)}</p></div></div>
    <div class="toasts" id="toasts" aria-label="Recent achievements">
      <button class="toast-ctl" id="toast-ctl" type="button" aria-pressed="false">${ic.pause}<span>Pause</span></button>
    </div>
    <div class="hero-copy">
      <div class="wrap">
        <h1 class="display">${V.claim}</h1>
        <div class="panel">
          <p class="lede">${e(S.summary)}</p>
          <div class="chips">${(V.chips || ["Since 2019", "70+ integrations", "4× Workday certified"]).map(c => `<span class="chip">${e(c)}</span>`).join("")}</div>
          <div class="hero-cta"><a class="btn solid" href="${mail}">Email me</a></div>
        </div>
      </div>
    </div>
  </section>

  <section class="block" id="impact" aria-labelledby="impact-h">
    <div class="wrap">
      <div class="kicker"><span class="mono"><b>01</b> Impact</span></div>
      <h2 class="display" id="impact-h">${V.headings.impact}</h2>
      <div class="nums">${S.stats.map(s => `<div class="num"><b><span data-count="${s.value}">${s.value}</span><small>${e(s.suffix)}</small></b><span>${e(s.label)}${fnFor[s.value] ? fn(fnFor[s.value]) : ""}</span></div>`).join("")}</div>
    </div>
  </section>

  <section class="block" id="experience" aria-labelledby="xp-h" style="padding-top:0">
    <div class="wrap">
      <div class="kicker"><span class="mono"><b>02</b> Experience</span></div>
      <h2 class="display" id="xp-h">${V.headings.experience}</h2>
      <div class="xp">${S.experience.map((j, i) => `
        <article class="xcard">
          <span class="bgnum" aria-hidden="true">0${i + 1}</span>
          <div><h3>${e(j.company)}</h3><p class="role">${e(j.title)}</p><p class="mono when">${e(j.dates)}</p><p class="hl">${e(j.headline)}</p></div>
          <div>
            <ul id="pts-${i}">${j.points.map((p, k) => `<li${k > 3 ? ' class="more"' : ""}>${e(p)}</li>`).join("")}</ul>
            ${j.points.length > 4 ? `<button class="btn toggle" type="button" aria-expanded="false" aria-controls="pts-${i}">Show all ${j.points.length} highlights</button>` : ""}
          </div>
        </article>`).join("")}</div>
    </div>
  </section>

  <section class="block" id="secure" aria-labelledby="sec-h" style="padding-top:0">
    <div class="wrap">
      <div class="kicker"><span class="mono"><b>03</b> Secure by design</span></div>
      <h2 class="display" id="sec-h">${V.headings.secure}</h2>
      <p class="sub">Payroll, benefits and finance data deserve controls you can name. This is how every integration I ship is protected.</p>
      <div class="secure">${S.security.map((t, i) => `<article class="tile"><span class="ic">${tileIcon(i)}</span><h3>${e(t.title)}</h3><p>${e(t.text)}</p></article>`).join("")}</div>
    </div>
  </section>

  <section class="block" id="stack" aria-labelledby="stack-h" style="padding-top:0">
    <div class="wrap">
      <div class="kicker"><span class="mono"><b>04</b> Stack</span></div>
      <h2 class="display" id="stack-h">${V.headings.stack}</h2>
      <div class="bento">
        ${S.skills.map((g, i) => `<div class="bx ${i < 2 ? "s3" : i === 2 ? "s2" : "s4 wide-m"}"><span class="mono"><b>L${i + 1}</b></span><h3>${e(g.group)}</h3><ul>${g.items.map(x => `<li>${e(x)}</li>`).join("")}</ul></div>`).join("")}
        <div class="bx accent s3"><span class="mono">Certified</span><h3>Workday certifications</h3><div class="certs">${S.certifications.map(c => `<div>${ic.check}${e(c)}</div>`).join("")}</div></div>
        <div class="bx s3">${S.education.map(d => `<div class="edu"><span class="mono">${e(d.dates)} · ${e(d.place)}</span><b>${e(d.school)}</b><span>${e(d.degree)} · ${e(d.detail)}</span></div>`).join("")}</div>
      </div>
    </div>
  </section>

  <section class="block" id="ventures" aria-labelledby="ven-h" style="padding-top:0">
    <div class="wrap">
      <div class="kicker"><span class="mono"><b>05</b> Ventures</span></div>
      <h2 class="display" id="ven-h">${V.headings.ventures}</h2>
      <p class="sub">${e(S.venture.name)} is my crypto &amp; stock prediction venture. It's being designed around one idea from my research: in 2026, <strong>visible honesty</strong> is the advantage, not more spectacle.${fn(3)}</p>
      <div class="venture">
        <div class="app" aria-label="${e(S.venture.name)} product preview">
          <div class="app-bar">
            <span class="brand">${e(S.venture.name)}</span>
            <div class="app-tools">
              <label class="sr" for="updown">Gain and loss colours</label>
              <select id="updown">
                <option value="green">Green up · red down</option>
                <option value="red">Red up · green down</option>
                <option value="blue">Blue up · orange down</option>
                <option value="mono">Monochrome</option>
              </select>
              <button class="mini" id="mkt-ctl" type="button" aria-pressed="false">Pause</button>
            </div>
          </div>
          <p class="illus">Illustrative data · not live prices · for demonstration only${fn(3)}</p>
          <table class="mkt"><caption class="sr">Illustrative market table</caption>
            <thead><tr><th scope="col">Asset</th><th scope="col">Price</th><th scope="col">24h</th><th scope="col" class="spark-col"><span class="sr">Trend</span></th></tr></thead>
            <tbody id="mkt"></tbody>
          </table>
          <div class="agent" aria-live="polite">
            <div class="head"><span class="dot" aria-hidden="true">AI</span><b>Suggestion from your agent</b></div>
            <p>Turn on a <strong>24-hour delay</strong> for withdrawals over <strong>$1,000</strong>.</p>
            <details><summary>Why am I seeing this?</summary><p>You added a new withdrawal address today. A delay gives you time to cancel if the change wasn't you. You can turn it off at any time.</p></details>
            <div class="acts"><button class="btn solid" type="button" data-act="approve">Review &amp; turn on</button><button class="btn" type="button" data-act="dismiss">Not now</button></div>
            <p class="status" id="agent-status">Nothing changes until you choose.</p>
          </div>
        </div>
        <div>
          <div class="principles">${S.venture.principles.map(p => `<div class="pr"><b>${e(p.title)}</b><p>${e(p.text)}</p></div>`).join("")}</div>
          <p class="risk"><strong>Capital at risk.</strong> Investing and crypto can lose all the money you put in. ${e(S.venture.name)} offers no services yet.${fn(4)}</p>
        </div>
      </div>
      <div class="ventures-list">${S.ventures.filter(v => v.name !== S.venture.name).map(v => `<article class="vcard"><span class="mono"><b>●</b> ${e(v.status)}</span><h3>${e(v.name)}</h3><p>${e(v.text)}</p></article>`).join("")}
        <article class="vcard"><span class="mono"><b>●</b> Principle</span><h3>Celebrate safety, not trades</h3><p>The only celebrations in my products mark protective steps, like turning on 2FA or a recurring deposit.</p></article>
      </div>
    </div>
  </section>

  <section class="finale" id="contact" aria-labelledby="contact-h">
    <div class="wrap">
      <div class="kicker"><span class="mono"><b>06</b> Contact</span></div>
      <canvas id="particles" aria-hidden="true"></canvas>
      <div class="row">
        <h2 class="display" id="contact-h">${V.headings.contact}</h2>
        <div class="links"><a class="btn solid" href="${mail}">${e(S.email)}</a><a class="btn" href="${S.linkedin}" target="_blank" rel="noopener">LinkedIn</a><a class="btn" href="${S.github}" target="_blank" rel="noopener">GitHub</a></div>
      </div>
      <div class="legal">
        <div class="meta mono"><span>© ${new Date().getFullYear()} ${e(S.name)}</span><span>${e(S.location)}</span><span>Theme: ${e(V.name)}</span></div>
        <ol>${S.footnotes.map((f, i) => `<li id="fn-${i + 1}">${e(f)}</li>`).join("")}</ol>
      </div>
    </div>
  </section>
</main>`;

// ---------- experience toggles ----------
$$(".xcard .toggle").forEach(b => b.addEventListener("click", () => {
  const card = b.closest(".xcard"), open = card.classList.toggle("expanded");
  b.setAttribute("aria-expanded", open);
  b.textContent = open ? "Show fewer" : `Show all ${$$("li", card).length} highlights`;
  window.ScrollTrigger && ScrollTrigger.refresh();
}));

// ---------- floating notifications (pausable) ----------
(() => {
  const box = $("#toasts"), ctl = $("#toast-ctl");
  const make = (t) => { const d = document.createElement("div"); d.className = "toast"; d.innerHTML = `<span class="ic">${ic.check}</span><div><b>${e(t.title)}</b><span>${e(t.text).replace("¹", "<sup>1</sup>")}</span></div>`; return d; };
  let i = 0, paused = RM, timer = 0;
  for (; i < 2; i++) box.insertBefore(make(S.toasts[i]), ctl);
  const step = () => {
    const first = $(".toast", box), next = make(S.toasts[i++ % S.toasts.length]);
    if (window.gsap) {
      gsap.to(first, { opacity: 0, y: -12, duration: .4, ease: "power2.in", onComplete: () => first.remove() });
      box.insertBefore(next, ctl);
      gsap.from(next, { opacity: 0, y: 16, duration: .6, ease: "expo.out", delay: .2 });
    } else { first.remove(); box.insertBefore(next, ctl); }
  };
  const run = () => { clearInterval(timer); if (!paused) timer = setInterval(step, 3200); };
  const setPaused = (p) => { paused = p; ctl.setAttribute("aria-pressed", p); ctl.innerHTML = `${p ? ic.play : ic.pause}<span>${p ? "Play" : "Pause"}</span>`; run(); };
  ctl.addEventListener("click", () => setPaused(!paused));
  box.addEventListener("mouseenter", () => clearInterval(timer));
  box.addEventListener("mouseleave", run);
  box.addEventListener("focusin", () => clearInterval(timer));
  setPaused(paused);
})();

// ---------- illustrative market table ----------
(() => {
  const assets = [
    { sym: "BTC", name: "Bitcoin", p: 64250, vol: .004 },
    { sym: "ETH", name: "Ether", p: 3120, vol: .005 },
    { sym: "SOL", name: "Solana", p: 148.2, vol: .007 },
    { sym: "SPY", name: "S&P 500 ETF", p: 571.4, vol: .0015 },
    { sym: "NVDA", name: "NVIDIA", p: 132.6, vol: .004 },
  ].map(a => ({ ...a, open: a.p * (1 + (Math.random() - .5) * .04), hist: Array.from({ length: 24 }, () => a.p) }));
  assets.forEach(a => { let v = a.open; a.hist = a.hist.map(() => (v *= 1 + (Math.random() - .5) * a.vol * 2)); a.p = v; });
  const usd = (n) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);
  const pct = new Intl.NumberFormat("en-US", { style: "percent", minimumFractionDigits: 2, maximumFractionDigits: 2, signDisplay: "exceptZero" });
  const body = $("#mkt"), ctl = $("#mkt-ctl");
  const render = () => {
    body.innerHTML = assets.map(a => {
      const c = a.p / a.open - 1, dir = c > 0.00005 ? "up" : c < -0.00005 ? "down" : "flat";
      const min = Math.min(...a.hist), max = Math.max(...a.hist), pts = a.hist.map((v, i) => `${(i / (a.hist.length - 1)) * 84},${26 - ((v - min) / (max - min || 1)) * 24}`).join(" ");
      return `<tr><td class="sym"><b>${a.sym}</b><span>${a.name}</span></td><td>${usd(a.p)}</td>
        <td><span class="chg ${dir}">${dir === "up" ? ic.up : dir === "down" ? ic.down : ""}${pct.format(c)}<span class="sr">${dir === "up" ? " gain" : dir === "down" ? " loss" : " unchanged"}</span></span></td>
        <td class="spark-col"><svg class="spark" viewBox="0 0 84 28" aria-hidden="true"><polyline points="${pts}" fill="none" stroke="currentColor" stroke-width="1.6" class="chg ${dir}" style="color:var(--${dir === "flat" ? "fg-2" : dir})"/></svg></td></tr>`;
    }).join("");
  };
  const tick = () => { assets.forEach(a => { a.p *= 1 + (Math.random() - .5) * a.vol; a.hist.push(a.p); a.hist.shift(); }); render(); };
  let paused = RM, timer = 0;
  const run = () => { clearInterval(timer); if (!paused) timer = setInterval(tick, 2500); };
  const setPaused = (p) => { paused = p; ctl.setAttribute("aria-pressed", p); ctl.textContent = p ? "Resume" : "Pause"; run(); };
  ctl.addEventListener("click", () => setPaused(!paused));
  render(); setPaused(paused);

  // colour adjust (FxPro-style): pairs come from the theme so contrast holds
  const sel = $("#updown"), root = document.documentElement;
  const apply = (k) => { const [u, d] = V.updown[k]; root.style.setProperty("--up", u); root.style.setProperty("--down", d); };
  try { const saved = localStorage.getItem("moh-updown"); if (saved && V.updown[saved]) sel.value = saved; } catch (_) {}
  apply(sel.value);
  sel.addEventListener("change", () => { apply(sel.value); try { localStorage.setItem("moh-updown", sel.value); } catch (_) {} });
})();

// ---------- AI approval card ----------
(() => {
  const st = $("#agent-status");
  $$(".agent [data-act]").forEach(b => b.addEventListener("click", () => {
    st.textContent = b.dataset.act === "approve"
      ? "Draft ready. In the real app you'd confirm with your passkey. Nothing was changed, since this is a demo."
      : "Dismissed. The agent won't suggest this again for 30 days.";
  }));
})();

// ---------- hero scene ----------
const scene = (window.THREE && V.scene) ? V.scene($("#scene"), { RM }) : null;

// ---------- motion ----------
if (window.gsap && !RM) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".hero h1, .hero-copy .lede, .chips, .hero-cta, .hero-top", { opacity: 0, y: 30, duration: 1.2, ease: "expo.out", stagger: .08, delay: .15 });
  gsap.from(".toast, .toast-ctl", { opacity: 0, x: 30, duration: .9, ease: "expo.out", stagger: .12, delay: .6 });
  const pin = { p: 0 };
  gsap.timeline({ scrollTrigger: { trigger: "#hero", start: "top top", end: "+=100%", scrub: 1, pin: true,
      onUpdate: (s) => scene && scene.setProgress && scene.setProgress(s.progress) } })
    .to(".hero-copy, .toasts", { opacity: 0, y: -40, ease: "none" }, 0)
    .to(pin, { p: 1, ease: "none" }, 0);
  $$("[data-count]").forEach(el => {
    const end = +el.dataset.count, o = { v: 0 };
    gsap.to(o, { v: end, duration: 1.6, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%", once: true }, onUpdate: () => el.textContent = Math.round(o.v) });
  });
  $$("h2.display, .sub, .num, .tile, .bx, .pr, .vcard, .app").forEach(el =>
    gsap.from(el, { opacity: 0, y: 28, duration: .8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none reverse" } }));
  $$(".xcard").forEach(el => {
    gsap.from(el, { opacity: 0, y: 60, duration: 1, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 85%" } });
    gsap.to($(".bgnum", el), { yPercent: 40, ease: "none", scrollTrigger: { trigger: el, scrub: true } });
  });
  if (V.extraMotion) V.extraMotion({ gsap, ScrollTrigger });
  document.fonts && document.fonts.ready.then(() => ScrollTrigger.refresh());
}

// ---------- interactive particle footer ----------
(() => {
  const cv = $("#particles"), g = cv.getContext("2d"), word = (V.logo || "MOH") + ".";
  let P = [], W = 0, H = 0, mouse = { x: -9999, y: -9999 }, visible = false, running = false, colors = {};
  const build = () => {
    const cs = getComputedStyle(document.documentElement);
    colors = { fg: cs.getPropertyValue("--fg").trim(), ac: cs.getPropertyValue("--accent").trim() };
    W = cv.clientWidth; H = cv.clientHeight; if (!W || !H) return; // hidden or not laid out yet; resize will rebuild
    const dpr = Math.min(devicePixelRatio, 2);
    cv.width = W * dpr; cv.height = H * dpr; g.setTransform(dpr, 0, 0, dpr, 0, 0);
    const off = document.createElement("canvas"); off.width = W; off.height = H; const o = off.getContext("2d");
    const fam = getComputedStyle($(".logo")).fontFamily;
    let fs = H * .9; o.font = `900 ${fs}px ${fam}`;
    const tw = o.measureText(word).width; if (tw > W * .95) { fs *= (W * .95) / tw; o.font = `900 ${fs}px ${fam}`; }
    o.textAlign = "center"; o.textBaseline = "middle"; o.fillStyle = "#fff"; o.fillText(word, W / 2, H / 2);
    const dotX = W / 2 - o.measureText(word).width / 2 + o.measureText(word.slice(0, -1)).width;
    const data = o.getImageData(0, 0, W, H).data, step = W < 700 ? 5 : 6;
    P = [];
    for (let y = 0; y < H; y += step) for (let x = 0; x < W; x += step)
      if (data[(y * W + x) * 4 + 3] > 128) P.push({ x: RM ? x : Math.random() * W, y: RM ? y : Math.random() * H, tx: x, ty: y, vx: 0, vy: 0, a: x >= dotX });
    if (RM) draw();
  };
  const draw = () => {
    g.clearRect(0, 0, W, H);
    for (const p of P) { g.fillStyle = p.a ? colors.ac : colors.fg; g.fillRect(p.x, p.y, 2.2, 2.2); }
  };
  const frame = () => {
    if (!visible || RM) { running = false; return; }
    for (const p of P) {
      const dx = p.x - mouse.x, dy = p.y - mouse.y, d2 = dx * dx + dy * dy;
      if (d2 < 6400) { const f = (6400 - d2) / 6400 * 6, d = Math.sqrt(d2) || 1; p.vx += dx / d * f; p.vy += dy / d * f; }
      p.vx += (p.tx - p.x) * .06; p.vy += (p.ty - p.y) * .06; p.vx *= .82; p.vy *= .82; p.x += p.vx; p.y += p.vy;
    }
    draw(); requestAnimationFrame(frame);
  };
  cv.addEventListener("pointermove", (ev) => { const r = cv.getBoundingClientRect(); mouse.x = ev.clientX - r.left; mouse.y = ev.clientY - r.top; });
  cv.addEventListener("pointerleave", () => { mouse.x = mouse.y = -9999; });
  new IntersectionObserver(([en]) => { visible = en.isIntersecting; if (visible && !running && !RM) { running = true; requestAnimationFrame(frame); } }).observe(cv);
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(build);
  addEventListener("resize", build);
})();
})();
