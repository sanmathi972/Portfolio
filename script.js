
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const ss = t => t * t * (3 - 2 * t);
  const range = (v, a, b) => clamp((v - a) / (b - a));
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hoverable = matchMedia('(hover: hover)').matches;
  const CS = '';

  /* ---------- Personal portfolio content ---------- */
  const PLACES = {"nsut": {"c": "#2F7FD8", "side": "right", "tag": "2023", "t": "B.E. CSE", "r": "Computer Science Graduate", "h": "Completed B.E. in Computer Science and Engineering.", "st": ["Completed B.E. in Computer Science and Engineering."], "n": [], "j": 0}, "eazydiner": {"c": "#2F7FD8", "side": "left", "tag": "2024", "t": "Ishop Software Solutions", "r": "Junior UX/UI Designer", "h": "Wireframes, prototypes, high-fidelity UI design and documentation.", "st": ["Wireframes, prototypes, high-fidelity UI design and documentation."], "n": [], "j": 1}, "mmt": {"c": "#2F7FD8", "side": "left", "tag": "2025 \u2014 Now", "t": "Revolite Infotech", "r": "UX/UI Designer", "h": "User flows, product experiences and collaboration across teams.", "st": ["User flows, product experiences and collaboration across teams."], "n": [], "j": 2}, "oyo": {"c": "#2F7FD8", "side": "left", "tag": "What's next?", "t": "Product design", "r": "Growing into product design", "h": "Going deeper into product thinking, design systems and solving meaningful user problems.", "st": ["Going deeper into product thinking, design systems and solving meaningful user problems."], "n": [], "j": 3}, "me": {"c": "#2F7FD8", "side": "right", "tag": "About me", "t": "Hey, I\u2019m Sanmathi", "r": "UX/UI Designer \u00b7 Chennai, India", "h": "I design thoughtful digital products and simpler enterprise workflows.", "st": ["I design thoughtful digital products and simpler enterprise workflows."], "n": [], "j": 2}};

  const ICONS = {
    cap: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/><path d="M22 9v6"/>',
    fork: '<path d="M7 3v8"/><path d="M5 3v5a2 2 0 0 0 4 0V3"/><path d="M7 11v10"/><path d="M17 21V3c-2 1-3 4-3 7h3"/>',
    plane: '<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/>',
    bed: '<path d="M3 18V6"/><path d="M3 14h18v4"/><path d="M21 14v-3a3 3 0 0 0-3-3h-7v6"/><circle cx="7" cy="11" r="1.6"/>',
    pin: '<path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
    ticket: '<path d="M3 7a2 2 0 0 0 2-2h14a2 2 0 0 0 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 0-2 2H5a2 2 0 0 0-2-2v-3a2 2 0 0 0 0-4z"/><path d="M14 5v14" stroke-dasharray="2 2"/>',
    bell: '<path d="M6 16v-5a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 21a2 2 0 0 0 4 0"/>',
    heart: '<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
    card: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3"/>',
    head: '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/>',
    check: '<path d="M5 12.5l4 4L19 7"/>',
    phone: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
    bulb: '<path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/>',
    news: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/>',
    moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
    rocket: '<path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2"/><path d="M9 15l-3-3c1-4 5-9 12-9 0 7-5 11-9 12z"/><circle cx="15" cy="9" r="1.5"/>',
    pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    in: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>',
    ig: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8"/>',
    bench: '<path d="M4 10h16M5 14h14M7 14v5M17 14v5M6 10V6h12v4"/>',
    camera: '<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
    arrowR: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    arrowL: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    map: '<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14"/><path d="M15 6v14"/>'
  };
  const LI='mailto:sanmathi972@gmail.com', IG=LI, APP='#work';
  const STOPS = [{"id": "jee", "when": "2023", "place": "Chennai, India", "icon": "cap", "c": "#D2553A", "at": [400, 1420], "lift": 175, "name": "B.E. CSE", "title": "Computer Science Graduate", "txt": "Completed B.E. in Computer Science and Engineering.", "photos": [], "pois": []}, {"id": "app", "when": "2024", "place": "Chennai, India", "icon": "pen", "c": "#2F7FD8", "at": [400, 1420], "lift": 175, "name": "Ishop Software Solutions", "title": "Junior UX/UI Designer", "txt": "Wireframes, prototypes, high-fidelity UI design and documentation.", "photos": [], "pois": []}, {"id": "iitd", "when": "2025 \u2014 Now", "place": "Chennai, India", "icon": "gear", "c": "#2E9E6B", "at": [400, 1420], "lift": 175, "name": "Revolite Infotech", "title": "UX/UI Designer", "txt": "User flows, product experiences and collaboration across teams.", "photos": [], "pois": []}, {"id": "ht", "when": "What's next?", "place": "Chennai, India", "icon": "rocket", "c": "#7B5CD6", "at": [400, 1420], "lift": 175, "name": "Product design", "title": "Growing into product design", "txt": "Going deeper into product thinking, design systems and solving meaningful user problems.", "photos": [], "pois": []}];
  const CS_SOON=[];
  const WORK = [
  {
    "id": "project-0",
    "bg": "radial-gradient(120% 80% at 15% 0%, #FFC9A8 0%, transparent 55%), radial-gradient(90% 70% at 100% 100%, #E8402A 0%, transparent 60%), linear-gradient(165deg, #FF9A6B, #F25A38)",
    "glow": "#FF7A4F",
    "t": "#FFE3D6",
    "c": "#EE5A2B",
    "icon": "gear",
    "face": [
      "mid",
      "Complexity → clarity",
      "Connected warehouse operations"
    ],
    "name": "Enterprise Warehouse Management System",
    "co": "Enterprise SaaS · Logistics",
    "pitch": "Simplifying the operational complexity of inbound, inventory, outbound and warehouse workflows.",
    "focus": "Clearer role-based workflows, fewer unnecessary steps and a more consistent experience across interconnected modules.",
    "res": [],
    "shots": []
  },
  {
    "id": "project-1",
    "bg": "radial-gradient(90% 60% at 0% 0%, #FFD24D 0%, transparent 55%), radial-gradient(90% 70% at 100% 100%, #EE4B73 0%, transparent 60%), linear-gradient(165deg, #3AA6E0, #1667A8)",
    "glow": "#3AA6E0",
    "t": "#F4F4F2",
    "c": "#1667A8",
    "icon": "card",
    "face": [
      "mid",
      "Budget health, at a glance.",
      "AI-powered financial operations"
    ],
    "name": "Real-Time Budget Burn Cockpit",
    "co": "FinTech · Enterprise SaaS · AI",
    "pitch": "Making budget health, spend trends and financial risk easier to understand at a glance.",
    "focus": "Visual hierarchy, actionable insights and decision-focused dashboards.",
    "res": [],
    "shots": []
  },
  {
    "id": "project-2",
    "bg": "radial-gradient(110% 70% at 10% 0%, #FF9A8C 0%, transparent 55%), radial-gradient(90% 80% at 100% 100%, #8E0D14 0%, transparent 60%), linear-gradient(165deg, #F2453D, #C8161E)",
    "glow": "#EF3B35",
    "t": "#FFE2DE",
    "c": "#D7262B",
    "icon": "heart",
    "face": [
      "mid",
      "Your health, connected.",
      "Personal health information"
    ],
    "name": "HealthPassport AI",
    "co": "Healthcare · AI",
    "pitch": "Exploring a more connected and accessible experience for personal health information.",
    "focus": "Trust, clear information architecture and useful AI-assisted interactions.",
    "res": [],
    "shots": []
  },
  {
    "id": "project-3",
    "bg": "radial-gradient(110% 80% at 0% 0%, #FFA6D2 0%, transparent 55%), radial-gradient(100% 80% at 100% 100%, #1F4FE0 0%, transparent 60%), linear-gradient(150deg, #FF5FA8, #7B6BFF 55%, #3868FF)",
    "glow": "#9A6BFF",
    "t": "#F1E6FF",
    "c": "#5B5CF0",
    "icon": "phone",
    "face": [
      "mid",
      "More service. Fewer visits.",
      "Housing finance · Android"
    ],
    "name": "Housing Finance Mobile App",
    "co": "FinTech · Mobile",
    "pitch": "A self-service mobile experience designed around common housing-finance needs.",
    "focus": "Straightforward navigation, simpler tasks and mobile usability.",
    "res": [],
    "shots": []
  },
  {
    "id": "project-4",
    "bg": "radial-gradient(110% 70% at 15% 0%, #E2B98A 0%, transparent 55%), radial-gradient(90% 70% at 100% 100%, #3E2614 0%, transparent 60%), linear-gradient(165deg, #A8774B, #5E3B22)",
    "glow": "#B8834F",
    "t": "#F6E7D4",
    "c": "#9A6A3E",
    "icon": "book",
    "face": [
      "mid",
      "A score you can understand.",
      "AI-assisted journal evaluation"
    ],
    "name": "AI Journal Evaluation & Ranking",
    "co": "Publishing · AI",
    "pitch": "An AI-assisted experience for journal evaluation and ranking workflows.",
    "focus": "Helping users understand complex results and move through structured decisions.",
    "res": [],
    "shots": []
  },
  {
    "id": "project-5",
    "bg": "radial-gradient(120% 80% at 15% 0%, #FFC9A8 0%, transparent 55%), radial-gradient(90% 70% at 100% 100%, #E8402A 0%, transparent 60%), linear-gradient(165deg, #FF9A6B, #F25A38)",
    "glow": "#FF7A4F",
    "t": "#FFE3D6",
    "c": "#EE5A2B",
    "icon": "heart",
    "face": [
      "mid",
      "Fresh finds. Simple shopping.",
      "D2C · Farm-fresh products"
    ],
    "name": "D2C Farm Fresh",
    "co": "E-commerce · Mobile",
    "pitch": "A direct-to-consumer shopping experience for farm-fresh products.",
    "focus": "Product discovery, purchase flow clarity and approachable visual design.",
    "res": [],
    "shots": []
  }
];
  const PROC = [["Understand","Talk to users and stakeholders. Clarify the real problem and the business goal.","#FFD23F"],["Map","Break down journeys, flows, dependencies, and places where people get stuck.","#9FD3FF"],["Explore","Sketch, wireframe, prototype and compare options before committing.","#FFB4A0"],["Refine","Validate the design, work with developers, and improve what doesn't feel right.","#D9CCFF"]];
  const img = k => `v2/s/${k}.webp`;

  /* ---------- smooth scroll ---------- */
  const lenis = (!reduce && window.Lenis && innerWidth >= 860 && !matchMedia('(pointer: coarse)').matches) ? new Lenis({ lerp: .09, smoothWheel: true, wheelMultiplier: .9 }) : null;
  const Y = () => (lenis ? lenis.scroll : window.scrollY);
  const HW = {};
  const goTo = (y, dur = 0) => { for (const k in HW) delete HW[k]; return lenis ? lenis.scrollTo(y, dur ? { duration: dur, easing: t => 1 - Math.pow(1 - t, 4) } : { immediate: true, force: true }) : scrollTo({ top: y, behavior: dur && !reduce ? 'smooth' : 'auto' }); };
  // once a scroll scene has played, its long scroll track folds away: it never replays, and scrolling back is quick
  const DONE = {};
  // scroll-linked scenes only move forward: scrolling up leaves them as they are,
  // and once you scroll back above a scene it resets and plays again on the way down
  const held = (k, y, resetAt) => { if (y <= resetAt || HW[k] === undefined) HW[k] = y; else HW[k] = Math.max(HW[k], y); return HW[k]; };
  const top = el => el.getBoundingClientRect().top + window.scrollY;

  let vw = innerWidth, vh = innerHeight, mobile = vw < 860;
  // unlit words read a little brighter at night
  const DIMW = () => document.documentElement.dataset.theme === 'dark' ? .34 : .13;
  addEventListener('themechange', () => { lastQ = -1; llLit = -1; });

  /* =========================================================
     1 · THE VALLEY
     ========================================================= */
  const heroScrim = $('#heroScrim'), stage = $('#stage'), cam = $('#cam'), scene = $('#scene'), valley = $('#top');
  const layers = $$('.ly', scene).map(el => ({ el, d: +el.dataset.d || 0 }));
  const chips = document.createElement('div'), heroCopy = $('#heroCopy'), places = document.createElement('div'), cue = $('#cue'), hint = $('#hint'), sheet = $('#sheet');
  const shade = $('#shade'); const t0 = performance.now();
  let SW = 0, SH = 0, baseX = 0, baseY = 0, ax = .5, vTop = 0, vRange = 1, pV = 0;
  const cur = { x: 0, y: 0, s: 1.18 }, ptr = { x: 0, y: 0, sx: 0, sy: 0 };
  let focusId = null, rate = 2;
  // "scroll to fly in" appears 4s after the page opens (or at once, if loading took longer); it hides once you scroll and returns if you settle back at the top
  let cueT = 0;
  const cueArm = (wait = 1500) => { clearTimeout(cueT);
    cueT = setTimeout(() => { if (pV < .002 && !focusId && !document.hidden) cue.classList.add('idle'); }, wait); };
  ['scroll', 'wheel', 'keydown', 'touchstart'].forEach(ev => addEventListener(ev, () => cueArm(), { passive: true }));
  document.addEventListener('visibilitychange', () => { if (!document.hidden) cueArm(); });
  cueArm(Math.max(0, 4000 - performance.now()));

  /* the painting is a WebGL plate: a 4000px texture with mipmaps (a zoom stays sharp) and a hand-built depth map, so the pointer and the scroll move near things more than far ones */
  const AR = 2000 / 1126, PAR = [.005, .0025], FOC = [.52, .58];
  const SPOT = { nsut: [.115, .41, .10, .13], oyo: [.92, .31, .10, .12], mmt: [.72, .45, .10, .085], eazydiner: [.81, .67, .10, .09], me: [.19, .76, .17, .17] };
  const glc = $('#glPlate'); let lastDraw = [0, 0, 0], glKey = '', nightLoad = null, nightReady = false, nf = 0, gl = null, glU = null, glReady = false, fa = 0, hspot = SPOT.eazydiner;
  const gain = (e, d) => 1 + e * (.02 + d * .12);
  // the painting's texture upload is heavy, so it starts once the headline has finished arriving (the plain image shows until then)
  setTimeout(function initGL() {
    if (matchMedia('(max-width: 859px)').matches) { addEventListener('resize', () => { if (!gl && innerWidth >= 860) initGL(); }); }
    let g; try { g = glc.getContext('webgl2', { antialias: false, alpha: false, powerPreference: 'high-performance' }); } catch (_) {}
    if (!g) return;
    const sh = (t, src) => { const o = g.createShader(t); g.shaderSource(o, src); g.compileShader(o); if (!g.getShaderParameter(o, g.COMPILE_STATUS)) throw new Error(g.getShaderInfoLog(o)); return o; };
    try {
      const pr = g.createProgram();
      g.attachShader(pr, sh(g.VERTEX_SHADER, `#version 300 es
in vec2 p; void main() { gl_Position = vec4(p, 0., 1.); }`));
      g.attachShader(pr, sh(g.FRAGMENT_SHADER, `#version 300 es
precision highp float;
uniform sampler2D uTex, uTexN, uDep; uniform vec2 uRes, uSize, uOff; uniform vec3 uCam; uniform float uE, uDpr, uFocus, uNight; uniform vec4 uSpot;
out vec4 o;
const vec2 F = vec2(.52, .58);
float gn(float d) { return 1. + uE * (.02 + d * .12); }
void main() {
  vec2 css = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y) / uDpr;
  vec2 uv = ((css - uCam.xy) / uCam.z) / uSize;
  float edge = min(min(uv.x, 1. - uv.x), min(uv.y, 1. - uv.y));
  vec2 off = uOff * smoothstep(0., .05, edge);
  vec2 c = uv;
  for (int i = 0; i < 3; i++) { float d = texture(uDep, clamp(c, 0., 1.)).r; c = F + (uv - off * (d - .45) - F) / gn(d); }
  // past the painting's edge the picture simply continues, mirrored, so there is no blurred band
  vec2 oo = max(max(-c, c - 1.), 0.);
  vec2 mc = 1. - abs(1. - mod(c, 2.));
  float bias = clamp(max(oo.x, oo.y) * 110., 0., 4.);
  vec3 col = texture(uTex, mc, bias).rgb;
  if (uNight > .001) col = mix(col, texture(uTexN, mc, bias).rgb, uNight);
  float m = 1. - smoothstep(.58, 1., length((c - uSpot.xy) / uSpot.zw));
  float l = dot(col, vec3(.299, .587, .114));
  vec3 dim = mix(vec3(l), col, .55) * .86, lit = mix(vec3(l), col, 1.12) * 1.06;
  col = mix(col, mix(dim, lit, m), uFocus);
  o = vec4(col, 1.);
}`));
      g.linkProgram(pr); if (!g.getProgramParameter(pr, g.LINK_STATUS)) throw new Error(g.getProgramInfoLog(pr));
      g.useProgram(pr);
      g.bindBuffer(g.ARRAY_BUFFER, g.createBuffer()); g.bufferData(g.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), g.STATIC_DRAW);
      const a = g.getAttribLocation(pr, 'p'); g.enableVertexAttribArray(a); g.vertexAttribPointer(a, 2, g.FLOAT, false, 0, 0);
      glU = {}; ['uTex', 'uTexN', 'uDep', 'uRes', 'uSize', 'uOff', 'uCam', 'uE', 'uDpr', 'uFocus', 'uNight', 'uSpot'].forEach(n => glU[n] = g.getUniformLocation(pr, n));
      const load = (src, unit, mips) => fetch(src).then(r => r.blob()).then(b => createImageBitmap(b, { imageOrientation: 'none', premultiplyAlpha: 'none' })).then(bm => {
        const t = g.createTexture(); g.activeTexture(g.TEXTURE0 + unit); g.bindTexture(g.TEXTURE_2D, t);
        g.texImage2D(g.TEXTURE_2D, 0, g.RGBA, g.RGBA, g.UNSIGNED_BYTE, bm);
        g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE); g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE);
        g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, g.LINEAR);
        if (mips) { g.generateMipmap(g.TEXTURE_2D); g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.LINEAR_MIPMAP_LINEAR);
          const an = g.getExtension('EXT_texture_filter_anisotropic'); if (an) g.texParameterf(g.TEXTURE_2D, an.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(8, g.getParameter(an.MAX_TEXTURE_MAX_ANISOTROPY_EXT))); }
        else g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.LINEAR);
        bm.close && bm.close();
      });
      g.uniform1i(glU.uTex, 0); g.uniform1i(glU.uDep, 1); g.uniform1i(glU.uTexN, 2);
      gl = g;
      Promise.all([load('assets/atelier-hero.webp', 0, true), load('v2/h/depth2.png', 1, false)]).then(() => { glReady = true; scene.classList.add('gl'); sizeGL(); glc.classList.add('on');
        // the night painting loads once it is wanted (or a few seconds after the day one)
        const wantN = () => { if (nightLoad) return; nightLoad = load('assets/atelier-hero.webp', 2, true).then(() => { nightReady = true; glc.classList.add('nt'); }).catch(() => {}); };
        if (document.documentElement.dataset.theme === 'dark') wantN(); else setTimeout(() => (window.requestIdleCallback || (f => f()))(wantN, { timeout: 4000 }), 8000); addEventListener('themechange', () => { wantN(); if (glReady && !mobile) { glKey = ''; drawGL(lastDraw[0], lastDraw[1], lastDraw[2], .016); } }); })
        .catch(() => { gl = null; });
    } catch (err) { console.warn('plate shader', err); gl = null; }
  }, 3300);
  function sizeGL() {
    const dpr = Math.max(1, Math.min(devicePixelRatio || 1, 1.5, Math.sqrt(2.2e6 / (vw * vh)))), w = Math.round(vw * dpr), h = Math.round(vh * dpr);
    if (glc.width !== w || glc.height !== h) { glc.width = w; glc.height = h; gl.viewport(0, 0, w, h); glKey = ''; }
  }
  function drawGL(e, px, py, dt) {
    if (!gl || !glReady || mobile) return;
    const dpr = glc.width / vw;
    fa += ((focusId ? 1 : 0) - fa) * (reduce ? 1 : clamp(dt * 3.2));
    const nt = nightReady && document.documentElement.dataset.theme === 'dark' ? 1 : 0;
    nf = reduce || document.startViewTransition ? nt : nf + (nt - nf) * clamp(dt * 3);
    lastDraw = [e, px, py];
    if (focusId && SPOT[focusId]) hspot = SPOT[focusId];
    const key = [cur.x, cur.y, cur.s, SW, px, py, e, fa, nf, glc.width, glc.height, hspot[0]].map(v => v.toFixed(3)).join();
    if (key === glKey) return; glKey = key;   // nothing moved: leave the last picture on screen
    gl.uniform2f(glU.uRes, glc.width, glc.height); gl.uniform1f(glU.uDpr, dpr);
    gl.uniform3f(glU.uCam, cur.x, cur.y, cur.s); gl.uniform2f(glU.uSize, SW, SH);
    gl.uniform2f(glU.uOff, -px * PAR[0] * (1 - fa), -py * PAR[1] * (1 - fa) * (SW / SH)); gl.uniform1f(glU.uE, e);
    gl.uniform1f(glU.uFocus, fa); gl.uniform1f(glU.uNight, nf); gl.uniform4f(glU.uSpot, hspot[0], hspot[1], hspot[2], hspot[3]);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }

  // short or narrow laptop windows: the headline block shrinks until it clears every place tag, so nothing ever sits on top of the words
  function fitCopy() {
    if (mobile || !heroCopy) { if (heroCopy) heroCopy.style.removeProperty('--hs'); return; }
    const tags = $$('.pin[data-id]', scene).filter(p => !p.classList.contains('rpin')).map(p => { const b = $('b', p), x = baseX + parseFloat(p.style.left) / 100 * SW, y = baseY + parseFloat(p.style.top) / 100 * SH; return { l: x - b.offsetWidth / 2 - 8, r: x + b.offsetWidth / 2 + 8, t: y - b.offsetHeight - 30, b: y }; });
    let hs = 1; heroCopy.style.setProperty('--hs', 1);
    for (let i = 0; i < 8 && hs > .55; i++) {
      const o = e => ({ l: heroCopy.offsetLeft + e.offsetLeft, t: heroCopy.offsetTop + e.offsetTop, r: heroCopy.offsetLeft + e.offsetLeft + e.offsetWidth, b: heroCopy.offsetTop + e.offsetTop + e.offsetHeight });
      const boxes = [$('.hey', heroCopy), ...$$('h1 .ln > span', heroCopy), $('.sub', heroCopy)].filter(e => e && e.offsetWidth).map(o);
      if (!tags.some(t => boxes.some(r => r.l < t.r && r.r > t.l && r.t < t.b && r.b > t.t))) break;
      hs = Math.max(.55, hs * .94); heroCopy.style.setProperty('--hs', hs.toFixed(3));
    }
  }
  function layoutValley() {
    // phones: the whole valley fits the width and sits above the places bar, so every place is in view
    // desktop shows the whole painting (nothing cropped); phones keep their own hero
    SW = mobile ? vw * 1.14 : Math.min(vw, vh * AR); SH = mobile ? SW * 944 / 1680 : SW / AR;
    cam.style.width = SW + 'px'; cam.style.height = SH + 'px';
    if (mobile) ax = clamp(ax, 0, 1);
    baseX = (vw - SW) * (mobile ? ax : .5); baseY = mobile ? vh - SH - (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--navh')) || 92) * .55 : (vh - SH) * .5;
    if (gl) sizeGL();
    fitCopy();
    if (mobile && !cur.ok) cur.s = 1;
    vTop = top(valley); vRange = Math.max(1, valley.offsetHeight - vh);
    if (!cur.ok) { cur.x = baseX - (cur.s - 1) * SW * .5; cur.y = baseY - (cur.s - 1) * SH * .55; cur.ok = true; }
  }
  // a zoomed camera never shows past the painting; while the painting is smaller than the window it stays centred
  const fit = (v, size, lo) => size >= lo ? Math.min(0, Math.max(lo - size, v)) : (lo - size) / 2;
  const clampCam = o => { o.x = fit(o.x, o.s * SW, vw); o.y = fit(o.y, o.s * SH, vh); return o; };
  function focusCam(id) {
    const r = $(`.hot[data-id="${id}"]`, scene); const fx = (parseFloat(r.style.left) + parseFloat(r.style.width) / 2) / 100, fy = (parseFloat(r.style.top) + parseFloat(r.style.height) / 2) / 100;
    const s = mobile ? 1.9 : 1.32, P = PLACES[id];
    const sx = mobile ? vw * .5 : (P.side === 'left' ? vw * .68 : vw * .32), sy = mobile ? vh * .2 : vh * .52;
    if (mobile) return { x: clamp(sx - s * fx * SW, vw - s * SW, 0), y: sy - s * fy * SH, s };
    return clampCam({ x: sx - s * fx * SW, y: sy - s * fy * SH, s });
  }

  function fillSheet(id) {
    const P = PLACES[id], S = STOPS[P.j];
    sheet.style.setProperty('--c', P.c);
    $('#s-tag').textContent = P.tag; $('#s-t').textContent = P.t; $('#s-r').textContent = P.r; $('#s-l').textContent = P.h;
    $('#s-d').innerHTML = P.st.map(t => `<p>${t}</p>`).join(''); $('#s-d').hidden = !P.st.length;
    const fun = P.fun || [];
    $('#s-f').innerHTML = fun.length ? `<div class="sf-tabs" role="tablist">${fun.map(([t, c], k) => `<button type="button" role="tab" data-ft="${k}" style="--fc:${c}" aria-selected="${!k}">${t}</button>`).join('')}</div>`
      + fun.map(([, c, items], k) => `<ul class="sf-pane" data-fp="${k}" style="--fc:${c}"${k ? ' hidden' : ''}>${items.map(([b, t]) => `<li><b>${b}</b><span>${t}</span></li>`).join('')}</ul>`).join('') : '';
    $('#s-f').hidden = !fun.length;
    $('#s-n').innerHTML = P.n.map(([b, s]) => `<li><b>${b}</b><span>${s}</span></li>`).join('');
    const ph = P.photos || (S && S.photos) || [];
    $('#s-p').innerHTML = ph.length ? `<p>Gallery</p><div style="--n:${ph.length}">${ph.map(([src, cap], k) => `<button type="button" class="jc-ph" data-sg="${k}" aria-label="Open photo: ${cap}" style="--r:${[-3, 2, -1.5][k % 3]}deg"><span class="ph${src ? '' : ' empty'}">${src ? `<img src="${img(src)}" alt="" loading="lazy">` : `<svg viewBox="0 0 24 24">${ICONS.camera}</svg>`}</span><small>${cap}</small></button>`).join('')}</div>` : '';
    $('#s-p').hidden = !ph.length;
    $('#s-n').hidden = !P.n.length;
    const cta = P.links ? `<a class="s-link" href="${LI}" target="_blank" rel="noopener"><i style="background:#0A66C2"><svg viewBox="0 0 24 24">${ICONS.in}</svg></i>LinkedIn</a><a class="s-link" href="${IG}" target="_blank" rel="noopener"><i style="background:linear-gradient(45deg,#F58529,#DD2A7B,#8134AF)"><svg viewBox="0 0 24 24">${ICONS.ig}</svg></i>Instagram</a><a class="s-link" href="mailto:sanmathi972@gmail.com"><i style="background:#EA4335"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="#fff" stroke-width="2"/><path d="M3.5 6.5L12 13l8.5-6.5" fill="none" stroke="#fff" stroke-width="2"/></svg></i>Gmail</a>` : P.cs ? `<button type="button" class="btn btn-ink s-cta" data-case="${P.cs}">${P.csL} <span aria-hidden="true">→</span></button>` : P.mail ? `<a class="btn btn-ink s-cta" href="${P.mail}">${P.csL} <span aria-hidden="true">↗</span></a>` : '';
    $('#s-row').innerHTML = cta; $('#s-row').hidden = !cta;
  }

  function focus(id) {
    if (!PLACES[id] || pV > .04) { if (PLACES[id]) { goTo(vTop); setTimeout(() => focus(id), 900); } return; }
    if (focusId === id) return;
    stage.classList.add('still');
    focusId = id; rate = 3; moved = 0; focusAt = performance.now(); clearTimeout(leaveT); leaveT = 0; fillSheet(id);
    sheet.classList.toggle('left', PLACES[id].side === 'left'); sheet.classList.add('on');
    scene.classList.add('focusing');
    layers.forEach(L => { const on = L.el.dataset.id === id; L.el.classList.toggle('on', on); L.el.classList.toggle('lift', on); });
    $$('.pin, #places button').forEach(b => b.classList.toggle('on', b.dataset.id === id));
    heroCopy.style.opacity = 0; hint.style.opacity = 0; chips.style.opacity = 0;
  }
  function unfocus() {
    if (!focusId) return;
    stage.classList.remove('still');
    focusId = null; rate = 2.6; sheet.classList.remove('on'); scene.classList.remove('focusing');
    layers.forEach(L => L.el.classList.remove('on', 'lift'));
    $$('.pin, #places button').forEach(b => b.classList.remove('on'));
    heroCopy.style.opacity = ''; hint.style.opacity = ''; chips.style.opacity = '';
  }
  let hoverT = 0, leaveT = 0;
  $$('.hot, .pin:not(.rpin)', scene).forEach(el => {
    const pinFor = $(`.pin[data-id="${el.dataset.id}"]`, scene);
    el.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') pinFor.classList.add('hov'); });
    el.addEventListener('pointerleave', () => pinFor.classList.remove('hov'));
    el.addEventListener('click', () => focus(el.dataset.id));
  });
  let moved = 0, lmx = null, lmy = null, focusAt = 0;
  stage.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse') return;
    lmx = e.clientX; lmy = e.clientY;
  });
  places.id = 'places'; places.className = 'places'; places.setAttribute('aria-label', 'Places in the valley');
  places.innerHTML = Object.entries(PLACES).map(([id, P]) => `<button type="button" data-id="${id}" style="--c:${P.c}">${id === 'me' ? 'Me' : P.t.replace(/,.*/, '')}</button>`).join('');
  stage.appendChild(places);
  $$('#places button').forEach(b => b.addEventListener('click', () => focusId === b.dataset.id ? unfocus() : focus(b.dataset.id)));
  $('#s-x').addEventListener('click', unfocus);
  // the mouse wheel over an open card scrolls the card, and never the page behind it
  sheet.addEventListener('wheel', e => { const up = e.deltaY < 0, top = sheet.scrollTop <= 0, end = sheet.scrollTop + sheet.clientHeight >= sheet.scrollHeight - 1;
    if ((up && top) || (!up && end)) e.preventDefault(); }, { passive: false });
  sheet.addEventListener('click', e => { const ft = e.target.closest('[data-ft]'); if (ft) { const k = ft.dataset.ft; $$('[data-ft]', sheet).forEach(b => b.setAttribute('aria-selected', b === ft)); $$('[data-fp]', sheet).forEach(u => u.hidden = u.dataset.fp !== k); return; } const w = e.target.closest('[data-walk]'); if (w) { unfocus(); walkTo(+w.dataset.walk); return; } const g = e.target.closest('[data-sg]'); if (g && focusId) { const P = PLACES[focusId]; openLB(P.j, +g.dataset.sg, P.photos && { c: P.c, when: P.tag, place: 'off the clock', title: 'That’s me', photos: P.photos }); return; } const c = e.target.closest('[data-case]'); if (c) openCaseAt(c.dataset.case, c); });
  addEventListener('keydown', e => { if (e.key === 'Escape') unfocus(); });
  stage.addEventListener('pointermove', e => { if (e.pointerType === 'mouse') { ptr.x = e.clientX / vw * 2 - 1; ptr.y = e.clientY / vh * 2 - 1; } });
  stage.addEventListener('click', e => { if (focusId && !e.target.closest('.hot, .pin, .sheet, .places')) unfocus(); });
  // phones: the portrait painting gets its own place pins, pinned to the buildings in it
  (() => {
    const ov = document.createElement('div'); ov.className = 'ph-pins';
    const SPOTS = [['nsut', 15, 51, 'l'], ['mmt', 89, 52, 'r'], ['oyo', 92, 35, 'r'], ['eazydiner', 84, 64, 'r'], ['me', 21, 66.5, 'l']];
    ov.innerHTML = SPOTS.map(([id, x, y, a]) => { const p = $(`.pin[data-id="${id}"]`, scene); if (!p) return ''; const c = p.cloneNode(true); $$('.hint', c).forEach(h => h.remove()); c.classList.add('ph-pin');  if (a) c.classList.add(a); c.style.left = x + '%'; c.style.top = y + '%'; return c.outerHTML; }).join('')
    ;
    $('.ph-hero', stage).after(ov);
    $$('.ph-pin[data-id]', ov).forEach(b => b.addEventListener('click', e => { e.stopPropagation(); focusId === b.dataset.id ? unfocus() : focus(b.dataset.id); }));
    // a pin never sits on the headline or its subtitle: if it would, it hangs below its spot instead
    const clear = () => { const t = $('.hero-copy', stage); if (!t || innerWidth >= 860) return; const lim = t.getBoundingClientRect().bottom + 6;
      $$('.ph-pin', ov).forEach(p => { p.classList.remove('down'); if (p.dataset.id === 'oyo' || p.getBoundingClientRect().top < lim) p.classList.add('down'); });
      // and never under the bottom nav: on real phones the browser bars and home bar push the nav up over the lowest pins
      const nav = [...document.querySelectorAll('nav')].find(n => { const r = n.getBoundingClientRect(); return r.height && r.top > innerHeight * .6; });
      const floor = (nav ? nav.getBoundingClientRect().top : innerHeight - 92) - 12;
      $$('.ph-pin', ov).forEach(p => { p.style.translate = ''; const r = p.getBoundingClientRect(), over = r.bottom - floor, dx = Math.round(Math.min(0, innerWidth - 10 - r.right) + Math.max(0, 10 - r.left)); if (over > 0 || dx) p.style.translate = `${dx}px ${over > 0 ? -Math.ceil(over) : 0}px`; }); };
    addEventListener('resize', clear); addEventListener('load', clear); setTimeout(clear, 900); setTimeout(clear, 2000);
    if (window.visualViewport) visualViewport.addEventListener('resize', clear);
  })();

  // mobile: drag to look around
  let drag0 = null;
  stage.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse' && mobile && !focusId) drag0 = { x: e.clientX, ax }; });
  stage.addEventListener('pointermove', e => { if (drag0) { ax = clamp(drag0.ax - (e.clientX - drag0.x) / Math.max(1, SW - vw)); baseX = (vw - SW) * ax; } });
  addEventListener('pointerup', () => drag0 = null);
  setTimeout(() => stage.classList.add('ready'), 4700);
  if (!hoverable) hint.innerHTML = hint.innerHTML.replace('click a place', 'tap a place');

  function frameValley(dt, y) {
    pV = mobile ? 0 : clamp((y - vTop) / vRange);
    if (focusId && pV > .04) unfocus();
    const e = ss(pV);
    rate += ((focusId ? 3 : 2.2) - rate) * clamp(dt);
    const T = focusId ? focusCam(focusId) : { x: baseX, y: baseY, s: 1 };
    const k = reduce ? 1 : 1 - Math.exp(-dt * rate);
    cur.x += (T.x - cur.x) * k; cur.y += (T.y - cur.y) * k; cur.s += (T.s - cur.s) * k;
    ptr.sx += (ptr.x - ptr.sx) * clamp(dt * 1.6); ptr.sy += (ptr.y - ptr.sy) * clamp(dt * 1.6);
    const intro = reduce ? 0 : 1 - ss(clamp((performance.now() - t0 - 200) / 2000));

    // only touch the DOM when something actually moved, so an idle hero costs nothing
    const ct = `translate3d(${cur.x.toFixed(2)}px, ${cur.y.toFixed(2)}px, 0) scale(${cur.s.toFixed(4)})`;
    if (ct !== frameValley.ct) { frameValley.ct = ct; cam.style.transform = ct; cam.style.setProperty('--ps', Math.pow(cur.s, -.75).toFixed(3)); }
    const fl = pV > .03; if (fl !== frameValley.fl) { frameValley.fl = fl; cam.classList.toggle('flying', fl); }
    // fly-through: each layer grows around the valley's focal point by depth; foreground flies out
    const px = reduce ? 0 : ptr.sx, py = reduce ? 0 : ptr.sy;
    // the DOM layers (pins, hot areas, the gramophone) ride the same depth maths as the shader, so they stay glued to their buildings
    for (const L of layers) {
      const d = L.d, sc = gain(e, d), k = (d - .45) * (1 - fa);
      const lt = `translate3d(${(-px * PAR[0] * k * SW).toFixed(1)}px, ${(-py * PAR[1] * k * SW).toFixed(1)}px, 0) scale(${sc.toFixed(4)})`;
      if (lt !== L.t) { L.t = lt; L.el.style.transform = lt; }
    }
    drawGL(e, px, py, dt);
    const t = range(pV, .02, .3);
    heroCopy.style.transform = `translate3d(0, ${(-t * vh * .35).toFixed(1)}px, 0)`;
    if (!focusId) heroCopy.style.opacity = (1 - t * 1.2).toFixed(3);
    heroScrim.style.opacity = focusId ? 0 : Math.max(0, 1 - t * 1.2).toFixed(3);
    places.style.opacity = pV > .002 ? (1 - range(pV, .0, .08)).toFixed(3) : '';
    places.style.pointerEvents = pV > .06 ? 'none' : '';
    if ((pV > .002 || focusId) && cue.classList.contains('idle')) cue.classList.remove('idle');
    shade.style.opacity = range(pV, .25, .65).toFixed(3);
    if (!focusId) { const fo = (1 - range(pV, .0, .12)); chips.style.opacity = pV > .002 ? fo.toFixed(3) : ''; hint.style.opacity = pV > .002 ? fo.toFixed(3) : ''; }
  }

  /* =========================================================
     2 · HOW I GOT HERE
     ========================================================= */
  const tell = $('#tell'), tellBox = $('#tellBox'), story = $('#story'), svgD = $('#doodles');
  const words = [], marks = [];
  (function split(node, mark) {
    [...node.childNodes].forEach(n => {
      if (n.nodeType === 3) {
        const f = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(tok => {
          if (!tok) return;
          if (/^\s+$/.test(tok)) { f.appendChild(document.createTextNode(tok)); return; }
          const s = document.createElement('span'); s.className = 'w'; s.textContent = tok; f.appendChild(s); words.push({ el: s, mark });
        });
        n.replaceWith(f);
      } else if (n.classList && n.classList.contains('hl')) { const m = { el: n, last: 0, dd: n.dataset.dd, paths: [] }; marks.push(m); split(n, m); }
    });
  })(tell, null);
  words.forEach((w, i) => { if (w.mark) w.mark.last = i; });
  const stickies = $$('.sticky', tellBox);
  let sTop = 0, sRange = 1;

  const rnd = (a => () => (a = (a * 16807) % 2147483647) / 2147483647)(7);
  function roughEllipse(cx, cy, rx, ry) {
    let d = ''; const n = 36, turns = 1.12, st = -.4;
    for (let i = 0; i <= n; i++) {
      const t = st + (i / n) * Math.PI * 2 * turns, j = 1 + (rnd() - .5) * .06 + (i / n) * .05;
      const x = cx + Math.cos(t) * rx * j, y = cy + Math.sin(t) * ry * j;
      d += (i ? ' L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1);
    }
    return d;
  }
  function buildDoodles() {
    const B = tellBox.getBoundingClientRect(); svgD.innerHTML = '';
    svgD.setAttribute('viewBox', `0 0 ${B.width} ${B.height}`);
    const add = (d, color, w, m) => { const p = document.createElementNS('http://www.w3.org/2000/svg', 'path'); p.setAttribute('d', d); p.setAttribute('stroke', color); p.setAttribute('stroke-width', w); svgD.appendChild(p); const L = p.getTotalLength(); p.style.strokeDasharray = L; p.style.strokeDashoffset = L; m.paths.push({ p, L }); };
    const rectOf = m => { const rs = [...m.el.getClientRects()]; const r = rs[rs.length - 1]; return { x: r.left - B.left, y: r.top - B.top, w: r.width, h: r.height, first: rs[0] }; };
    marks.forEach(m => {
      m.paths = []; const r = rectOf(m);
      if (m.dd === 'circle') {
        const rs = [...m.el.getClientRects()]; const x0 = Math.min(...rs.map(q => q.left)) - B.left, x1 = Math.max(...rs.map(q => q.right)) - B.left, y0 = Math.min(...rs.map(q => q.top)) - B.top, y1 = Math.max(...rs.map(q => q.bottom)) - B.top;
        add(roughEllipse((x0 + x1) / 2, (y0 + y1) / 2, (x1 - x0) / 2 + 18, (y1 - y0) / 2 + 12), '#FF6B4A', 4, m);
      } else if (m.dd === 'gear') {
        const cx = r.x + r.w + 8, cy = r.y - 6, R = Math.max(14, r.h * .28); let d = '';
        for (let i = 0; i <= 48; i++) { const t = i / 48 * Math.PI * 2, rr = R * (i % 6 < 3 ? 1 : .78); d += (i ? ' L' : 'M') + (cx + Math.cos(t) * rr).toFixed(1) + ' ' + (cy + Math.sin(t) * rr).toFixed(1); }
        add(d, '#13233A', 3, m); add(roughEllipse(cx, cy, R * .35, R * .35), '#13233A', 3, m);
      } else if (m.dd === 'under') {
        const y = r.y + r.h - 2; let d = `M${r.x} ${y}`; const seg = 26;
        for (let x = r.x; x < r.x + r.w; x += seg) d += ` q ${seg / 2} ${(x / seg) % 2 ? 9 : -9} ${seg} 0`;
        add(d, '#13233A', 3.5, m);
      } else if (m.dd === 'stars' && !mobile) {
        const sx = r.x + r.w + 14, sy = r.y + 4, star = (x, y, s) => `M${x} ${y - s}L${x} ${y + s}M${x - s} ${y}L${x + s} ${y}M${x - s * .6} ${y - s * .6}L${x + s * .6} ${y + s * .6}M${x + s * .6} ${y - s * .6}L${x - s * .6} ${y + s * .6}`;
        add(star(sx + 10, sy + 6, 13), '#FF6B4A', 3.5, m); add(star(sx + 36, sy - 16, 8), '#2F7FD8', 3, m); add(star(sx + 4, sy - 24, 6), '#13233A', 2.5, m);
      } else if (m.dd === 'scribble' && !mobile) {
        const y = r.y + r.h * .98; add(`M${r.x - 6} ${y} C ${r.x + r.w * .3} ${y + 10}, ${r.x + r.w * .6} ${y - 6}, ${r.x + r.w + 8} ${y + 4} M${r.x + 4} ${y + 12} C ${r.x + r.w * .4} ${y + 18}, ${r.x + r.w * .7} ${y + 6}, ${r.x + r.w} ${y + 14}`, '#FF6B4A', 3.5, m);
      }
    });
  }
  // phones: a reveal starts when its block comes into view and plays on its own, the scroll never holds it
  const PLAY = {};
  function playIn(el, k, ms) { if (!PLAY[k]) { const r = el.getBoundingClientRect(); if (r.top < vh * .8 && r.bottom > 0) PLAY[k] = performance.now(); else return 0; } return clamp((performance.now() - PLAY[k]) / ms); }
  function layoutStory() { sTop = top(story); sRange = Math.max(1, story.offsetHeight - vh); const dk = Math.round(tellBox.offsetWidth) + 'x' + Math.round(tellBox.offsetHeight) + ':' + words.length;
    if (dk !== layoutStory.dk) { layoutStory.dk = dk; buildDoodles(); lastQ = -1; } }
  let lastQ = -1;
  function frameStory(y) {
    const q = playIn(tell, 'st', 2800);
    if (Math.abs(q - lastQ) < .001) return; lastQ = q;
    const lit = q * words.length * 1.05;
    const b0 = DIMW(); words.forEach((w, i) => { w.el.style.opacity = (b0 + (1 - b0) * clamp(lit - i)).toFixed(3); });
    marks.forEach(m => {
      const on = lit >= m.last + 1; m.el.classList.toggle('on', on);
      const t = clamp((lit - m.last - 1) / 3);
      m.paths.forEach((P, k) => { const tt = clamp(t * m.paths.length - k); P.p.style.strokeDashoffset = (P.L * (1 - ss(tt))).toFixed(1); });
    });
    stickies.forEach(s => { if (q >= +s.dataset.at) s.classList.add('in'); });
    const mh = $('#moveHint'); if (q > .8 && !mh.classList.contains('in')) placeHint(); mh.classList.toggle('in', q > .8);
  }
  // "these notes move" sits on the left edge of the yellow note, pointing into it
  function placeHint() {
    const mh = $('#moveHint'), note = stickies[0]; if (!mh || !note) return;
    mh.style.left = (note.offsetLeft - mh.offsetWidth + 16) + 'px';
    mh.style.top = (note.offsetTop + note.offsetHeight * .72 - mh.offsetHeight / 2) + 'px';
  }
  addEventListener('resize', () => { if ($('#moveHint').classList.contains('in')) placeHint(); });
  function draggable(el, onMove) {
    let s = null;
    el.tabIndex=0;el.setAttribute('aria-label',el.textContent.trim()+'. Drag or use arrow keys to move.');
    el.addEventListener('keydown',e=>{const delta={ArrowLeft:[-10,0],ArrowRight:[10,0],ArrowUp:[0,-10],ArrowDown:[0,10]}[e.key];if(!delta)return;e.preventDefault();const cs=getComputedStyle(el);el.style.setProperty('--tx',((parseFloat(cs.getPropertyValue('--tx'))||0)+delta[0])+'px');el.style.setProperty('--ty',((parseFloat(cs.getPropertyValue('--ty'))||0)+delta[1])+'px');el.dataset.moved=1;});
    el.addEventListener('pointerdown', e => {
      if (e.target.closest('a, button')) return;
      e.preventDefault(); el.setPointerCapture(e.pointerId); el.classList.add('drag');
      const cs = getComputedStyle(el); s = { x: e.clientX, y: e.clientY, tx: parseFloat(cs.getPropertyValue('--tx')) || 0, ty: parseFloat(cs.getPropertyValue('--ty')) || 0 };
      el.style.zIndex = ++draggable.z;
    });
    el.addEventListener('pointermove', e => { if (!s) return; el.style.setProperty('--tx', (s.tx + e.clientX - s.x) + 'px'); el.style.setProperty('--ty', (s.ty + e.clientY - s.y) + 'px'); el.dataset.moved = 1; onMove && onMove(); });
    const end = () => { s = null; el.classList.remove('drag'); };
    el.addEventListener('pointerup', end); el.addEventListener('pointercancel', end);
  }
  draggable.z = 10;
  stickies.forEach(s => { draggable(s); s.addEventListener('pointerdown', () => $('#moveHint').classList.add('done'), { once: true }); });
  /* =========================================================
     3 · THE JOURNEY (a map you discover)
     ========================================================= */
  const journey = $('#journey'), jTrack = $('#jTrack'), mapview = $('#mapview'), world3 = $('#world3'), mapArt = $('#mapArt'), jcard = $('#jcard'), jcIn = $('#jcIn'), compass = $('#compass'), needle = $('#needle'), meTip = $('#meTip'), polsEl = $('#pols');
  const N = STOPS.length, MW = 4720, MH = 3900;
  // the route is a heart: it starts at the tip, climbs the Delhi lobe, crosses the river, and comes home down the Gurgaon side
  const HX = MW / 2, HY = 1780, HKX = 110, HKY = 100;
  const heartAt = t => [HX + 16 * Math.sin(t) ** 3 * HKX, HY - (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * HKY];
  const heartPts = Array.from({ length: 721 }, (_, k) => heartAt(Math.PI + 2 * Math.PI * k / 720));
  const heartLen = [0]; for (let k = 1; k < heartPts.length; k++) heartLen.push(heartLen[k - 1] + Math.hypot(heartPts[k][0] - heartPts[k - 1][0], heartPts[k][1] - heartPts[k - 1][1]));
  const heartPoint = f => { const L = f * heartLen[heartLen.length - 1]; let k = 1; while (k < heartLen.length - 1 && heartLen[k] < L) k++; const a = heartPts[k - 1], b = heartPts[k], u = (L - heartLen[k - 1]) / Math.max(1e-6, heartLen[k] - heartLen[k - 1]); return [Math.round(a[0] + (b[0] - a[0]) * u), Math.round(a[1] + (b[1] - a[1]) * u)]; };
  const HEART_F = [.12, .36, .65, .86];
  STOPS.forEach((st, i) => { st.at = heartPoint(HEART_F[i]); });
  const heartD = 'M' + heartPts.map(p => p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join('L');
  const jHead = $('#jHead'), jFade = $('#jFade');
  let spot, spotG; const spotC = { x: STOPS[0].at[0], y: STOPS[0].at[1] };
  let jCar = false, jpos = -1, jposT = -1, jdrag = false, jIdx = -1;
  const holeR = STOPS.map(() => 0);
  let jTop = 0, jRange = 1, carve, casing, ghost, fogPath, holes = [], pathLen = 0, stopL = [], jmarks = [], pois = [], lastCard = -2, heading = 0, polFor = -2;
  const mrand = (a => () => (a = (a * 16807) % 2147483647) / 2147483647)(42);
  const blob = (cx, cy, rx, ry, amp, seed) => { let d = ''; for (let a = 0; a <= 64; a++) { const t = a / 64 * Math.PI * 2, w = 1 + amp * (Math.sin(3 * t + seed) * .6 + Math.sin(5 * t + seed * 2) * .3 + Math.sin(8 * t + seed) * .1); d += (a ? 'L' : 'M') + (cx + Math.cos(t) * rx * w).toFixed(1) + ' ' + (cy + Math.sin(t) * ry * w).toFixed(1); } return d + 'Z'; };
  const grad = c => `linear-gradient(145deg, color-mix(in srgb, ${c} 55%, #fff), ${c})`;
  (function drawMap() {
    const FONT = 'Bricolage Grotesque, sans-serif', LAND = '#FDFCF9', PARK = '#CDE8C4', PARK2 = '#BEDCA0', WATER = '#AAD3F2', WATER_E = '#86C1EA';
    let h = `<defs><radialGradient id="hole"><stop offset="0" stop-color="#000"/><stop offset=".35" stop-color="#000"/><stop offset=".7" stop-color="#777"/><stop offset="1" stop-color="#fff"/></radialGradient>
      <mask id="fogMask" maskUnits="userSpaceOnUse" x="-900" y="-900" width="${MW + 1800}" height="${MH + 1800}"><rect x="-900" y="-900" width="${MW + 1800}" height="${MH + 1800}" fill="#fff"/>
      <path id="fogPath" fill="none" stroke="#000" stroke-opacity=".5" stroke-width="260" stroke-linecap="round" stroke-linejoin="round"/>${STOPS.map((_, i) => `<circle id="hole${i}" r="0" fill="url(#hole)"/>`).join('')}</mask>
      <radialGradient id="spotG" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="820"><stop offset="0" stop-color="${LAND}" stop-opacity="0"/><stop offset=".4" stop-color="${LAND}" stop-opacity="0"/><stop offset="1" stop-color="${LAND}" stop-opacity=".86"/></radialGradient>
      <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#EAF3FD"/><stop offset="1" stop-color="#C9DDF2"/></linearGradient></defs>`;
    h += `<rect x="-3000" y="-3000" width="${MW + 6000}" height="${MH + 6000}" fill="${LAND}"/>`;
    // two cities: a tight street grid with building footprints between the streets
    const CITIES = [[HX - 1050, HY + 150, 1380], [HX + 1050, HY + 150, 1380]];
    h += `<defs><radialGradient id="cityG"><stop offset="0" stop-color="#ECE8E1"/><stop offset=".8" stop-color="#EEEAE3"/><stop offset="1" stop-color="${LAND}" stop-opacity="0"/></radialGradient>${CITIES.map(([cx, cy, R], k) => `<clipPath id="cityC${k}"><circle cx="${cx}" cy="${cy}" r="${R}"/></clipPath>`).join('')}</defs>`;
    const ST = 150, AR = 600, dens = (x, y) => Math.max(...CITIES.map(([cx, cy, R]) => 1 - Math.hypot(x - cx, y - cy) / (R * 1.25)));
    let bld = '', minor = '', major = '';
    for (let x0 = -ST * 2; x0 < MW + ST * 2; x0 += ST) for (let y0 = -ST * 2; y0 < MH + ST * 2; y0 += ST) {
      const dn = dens(x0 + ST / 2, y0 + ST / 2); if (mrand() > .12 + dn * .95) continue;
      const n = dn < .2 ? 1 : mrand() < .35 ? 1 : 2 + Math.floor(mrand() * 2), m = 18;
      for (let q = 0; q < n; q++) { const w = (ST - m * 2) / (n > 2 ? 2 : n) - 6, hh = n > 2 ? (ST - m * 2) / 2 - 6 : ST - m * 2 - mrand() * 40;
        const bx = x0 + m + (n > 2 ? (q % 2) * (w + 12) : q * (w + 12)), by = y0 + m + (n > 2 ? Math.floor(q / 2) * (hh + 12) : 0);
        if (mrand() < .9) bld += `<rect x="${bx.toFixed(0)}" y="${by.toFixed(0)}" width="${Math.max(10, w).toFixed(0)}" height="${Math.max(10, hh).toFixed(0)}" rx="4"/>`; }
    }
    for (let g = -ST * 2; g <= Math.max(MW, MH) + ST * 2; g += ST) { const isA = g % AR === 0; const seg = (g <= MW + ST * 2 ? `M${g} -400V${MH + 400}` : '') + (g <= MH + ST * 2 ? `M-400 ${g}H${MW + 400}` : ''); if (isA) major += seg; else minor += seg; }
    CITIES.forEach(([cx, cy, R]) => { major += `M${cx - R} ${cy - R * .7}L${cx + R} ${cy + R * .8}`; });
    // the grid fades out softly at the edges of the map, so it never ends in a hard line
    h += `<defs><radialGradient id="edgeG" cx=".5" cy=".5" r=".62"><stop offset=".72" stop-color="#fff"/><stop offset="1" stop-color="#000"/></radialGradient><mask id="edgeM" maskUnits="userSpaceOnUse" x="-400" y="-400" width="${MW + 800}" height="${MH + 800}"><rect x="-400" y="-400" width="${MW + 800}" height="${MH + 800}" fill="url(#edgeG)"/></mask></defs>
      <g mask="url(#edgeM)"><g fill="#E3DED5">${bld}</g>
      <path d="${minor}" fill="none" stroke="#E2DDD3" stroke-width="12"/><path d="${minor}" fill="none" stroke="#FFFFFF" stroke-width="8"/>
      <path d="${major}" fill="none" stroke="#DCD5C9" stroke-width="22"/><path d="${major}" fill="none" stroke="#FFFFFF" stroke-width="16"/></g>`;
    // parks and water, flat like a real map
    [[HX - 1020, HY + 820, 300, 140], [HX + 1000, HY - 60, 280, 160], [520, 520, 360, 190], [MW - 520, 560, 340, 180], [560, MH - 420, 380, 160], [MW - 560, MH - 380, 360, 150], [HX - 1500, HY + 380, 170, 110], [HX + 1420, HY + 700, 190, 110]].forEach(([cx, cy, rx, ry], k) => {
      h += `<path d="${blob(cx, cy, rx, ry, .1, k * 1.7)}" fill="${PARK}"/>`; });
    h += `<path d="${blob(HX - 1000, HY - 80, 230, 120, .1, 3)}" fill="${WATER}"/>`;
    // the river splits Delhi from Gurgaon, right down the middle
    const river = `M${HX - 40} -300 C ${HX + 70} 500, ${HX - 70} 1300, ${HX} 2100 S ${HX + 60} 3200, ${HX - 20} ${MH + 400}`;
    h += `<path d="${river}" fill="none" stroke="${WATER}" stroke-width="80" stroke-linecap="round"/>`;
    // the expressway between the two cities
    const main = `M-300 ${HY + 420} C ${MW * .25} ${HY + 360}, ${MW * .5} ${HY + 480}, ${MW * .75} ${HY + 400} S ${MW + 200} ${HY + 380}, ${MW + 400} ${HY + 420}`;
    h += `<path d="${main}" fill="none" stroke="#EDC458" stroke-width="30" stroke-linecap="round"/><path d="${main}" fill="none" stroke="#FCDE86" stroke-width="24" stroke-linecap="round"/>`;
    h += `<g transform="translate(${HX - 260} ${HY + 420})"><rect x="-30" y="-14" width="60" height="28" rx="6" fill="#fff" stroke="#E4B847" stroke-width="2.5"/><text y="7" text-anchor="middle" font-family="${FONT}" font-weight="800" font-size="17" fill="#8A6A1E">NH48</text></g>`;
    // the route runs on a road of its own
    h += `<path d="${heartD}" fill="none" stroke="#DCD5C9" stroke-width="34" stroke-linejoin="round"/><path d="${heartD}" fill="none" stroke="#FFFFFF" stroke-width="27" stroke-linejoin="round"/>`;
    // labels: quiet grey with a paper halo, like a real map
    h += `<g font-family="${FONT}" font-weight="700" fill="#8C9096" stroke="${LAND}" stroke-width="10" paint-order="stroke" stroke-linejoin="round" letter-spacing="14" text-anchor="middle" font-size="46"><text x="${HX - 1000}" y="${HY + 250}">CHENNAI</text><text x="${HX + 1000}" y="${HY + 250}">DESIGN</text></g>`;
    h += `<g font-family="${FONT}" font-weight="600" font-size="22" fill="#6E9FCB" text-anchor="middle"><text x="${HX - 1000}" y="${HY - 72}">Blue Lake</text></g>`;
    window.__mapRoads = { main, river };
    // ---- the trail
    const d = heartD;
    // ---- landmarks, drawn flat in the map's own style
    const box = (x, y, w, hh, dd, f, sd, rf) => { const dx = dd * .55, dy = -dd * .4; return `<path d="M${x} ${y - hh}h${w}v${hh}h${-w}z" fill="${f}"/><path d="M${x + w} ${y - hh}l${dx} ${dy}v${hh}l${-dx} ${-dy}z" fill="${sd}"/><path d="M${x} ${y - hh}l${dx} ${dy}h${w}l${-dx} ${-dy}z" fill="${rf}"/>`; };
    const wins = (x, y, cols, rows, cw, ch, gx, gy, c) => { let o = ''; for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) o += `<rect x="${x + i * (cw + gx)}" y="${y + j * (ch + gy)}" width="${cw}" height="${ch}" rx="2" fill="${c}"/>`; return o; };
    const tree = (x, y, r = 16, c = '#8CC26C') => `<rect x="${x - 2}" y="${y - 6}" width="4" height="12" fill="#8B6B45"/><circle cx="${x}" cy="${y - r}" r="${r}" fill="${c}"/><circle cx="${x - r * .35}" cy="${y - r * 1.2}" r="${r * .5}" fill="#A9D48A"/>`;
    const pad = (x, y, rx = 170, ry = 58, c = '#EADFC8') => `<rect x="${x - rx}" y="${y - ry * .9}" width="${rx * 2 + 30}" height="${ry * 1.5}" rx="22" fill="${c}" stroke="#DDCFB3" stroke-width="3"/><rect x="${x - 18}" y="${y + ry * .6}" width="36" height="34" fill="#F4EEE2"/>`;
    const logoSign = (src, cx, cy, sz, post) => `${post ? `<rect x="${cx - 2.5}" y="${cy + sz / 2}" width="5" height="${post}" fill="#6B7280"/>` : ''}<clipPath id="lc-${src}"><rect x="${cx - sz / 2}" y="${cy - sz / 2}" width="${sz}" height="${sz}" rx="${sz * .24}"/></clipPath><rect x="${cx - sz / 2 - 5}" y="${cy - sz / 2 - 5}" width="${sz + 10}" height="${sz + 10}" rx="${sz * .3}" fill="#fff" stroke="#E6DCC8" stroke-width="2"/><image href="${img(src)}" x="${cx - sz / 2}" y="${cy - sz / 2}" width="${sz}" height="${sz}" clip-path="url(#lc-${src})" preserveAspectRatio="xMidYMid slice"/>`;
    const house = (x, y, w, hh, wall, roof, win) => `<rect x="${x}" y="${y - hh}" width="${w}" height="${hh}" fill="${wall}"/><path d="M${x - 10} ${y - hh + 2}L${x + w / 2} ${y - hh - w * .42}L${x + w + 10} ${y - hh + 2}z" fill="${roof}"/>` + wins(x + 12, y - hh + 14, 2, 1, 22, 20, w - 70, 0, win) + `<rect x="${x + w / 2 - 12}" y="${y - 32}" width="24" height="32" rx="3" fill="${roof}"/>`;
    // ---- places: clean front-view illustrations, one soft palette, no blocky extrusions
    const gnd = (x, y, w) => `<ellipse cx="${x}" cy="${y + 3}" rx="${w / 2}" ry="${Math.max(10, w * .075)}" fill="#3A2A12" opacity=".09"/>`;
    const tr = (x, y, s = 1, c = '#7DB968') => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-3" y="-24" width="6" height="24" rx="3" fill="#8A6A48"/><circle cy="-42" r="21" fill="${c}"/><circle cx="-8" cy="-49" r="8" fill="#fff" opacity=".2"/></g>`;
    const bush = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cy="-8" rx="17" ry="10" fill="#8AC474"/><ellipse cx="-5" cy="-12" rx="6" ry="3.5" fill="#fff" opacity=".22"/></g>`;
    const grid = (x, y, cols, rows, w, h, gx, gy, c, r = 2.5, hi = false) => { let o = ''; for (let a = 0; a < cols; a++) for (let b = 0; b < rows; b++) { const X = x + a * (w + gx), Y = y + b * (h + gy); o += `<rect x="${X}" y="${Y}" width="${w}" height="${h}" rx="${r}" fill="${c}"/>`; if (hi) o += `<path d="M${X + 3} ${Y + h - 3}L${X + w - 3} ${Y + 3}" stroke="#fff" stroke-width="1.6" opacity=".45"/>`; } return o; };
    const arches = (x, y, n, w, h, gap, c) => { let o = ''; for (let a = 0; a < n; a++) { const X = x + a * (w + gap); o += `<path d="M${X} ${y + h}V${y + w / 2}a${w / 2} ${w / 2} 0 0 1 ${w} 0V${y + h}z" fill="${c}"/>`; } return o; };
    const LM = {
      jee: (x, y) => gnd(x, y, 330) + tr(x - 170, y, 1.05) + tr(x + 175, y, .9, '#8CC66F') + bush(x - 118, y) + bush(x + 125, y, .9) +
        `<rect x="${x - 135}" y="${y - 82}" width="270" height="82" rx="4" fill="#D66C4E"/><rect x="${x - 141}" y="${y - 90}" width="282" height="11" rx="3" fill="#B4513A"/>` +
        arches(x - 120, y - 70, 4, 18, 28, 12, '#FCEBD6') + arches(x + 29, y - 70, 4, 18, 28, 12, '#FCEBD6') + grid(x - 120, y - 30, 4, 1, 18, 18, 12, 0, '#FCEBD6') + grid(x + 29, y - 30, 4, 1, 18, 18, 12, 0, '#FCEBD6') +
        `<rect x="${x - 30}" y="${y - 178}" width="60" height="178" rx="3" fill="#E3805F"/><rect x="${x + 16}" y="${y - 178}" width="14" height="178" fill="#C8654A"/>` +
        `<path d="M${x - 38} ${y - 178}L${x} ${y - 226}L${x + 38} ${y - 178}z" fill="#9C4430"/><rect x="${x - 38}" y="${y - 182}" width="76" height="8" rx="2" fill="#B4513A"/>` +
        `<circle cx="${x}" cy="${y - 146}" r="16" fill="#FFF8EC" stroke="#9C4430" stroke-width="3"/><path d="M${x} ${y - 155}v9h7" stroke="#13233A" stroke-width="2.6" fill="none" stroke-linecap="round"/>` +
        arches(x - 11, y - 118, 1, 22, 34, 0, '#FCEBD6') + `<path d="M${x - 16} ${y}V${y - 26}a16 16 0 0 1 32 0V${y}z" fill="#6E2C1F"/><rect x="${x - 50}" y="${y - 4}" width="100" height="6" rx="2" fill="#EADCC6"/>` +
        `<path d="M${x} ${y - 226}v-26" stroke="#6E2C1F" stroke-width="3"/><path d="M${x} ${y - 252}h24l-6 7 6 7h-24z" fill="#FFD23F"/>`,
      app: (x, y) => gnd(x, y, 250) + tr(x - 120, y, .95) + bush(x + 108, y) +
        `<rect x="${x - 82}" y="${y - 104}" width="164" height="104" rx="6" fill="#F1ECFB"/><rect x="${x - 90}" y="${y - 116}" width="180" height="16" rx="6" fill="#7B5CD6"/>` +
        `<rect x="${x - 64}" y="${y - 84}" width="82" height="58" rx="6" fill="#2B2140"/><rect x="${x - 54}" y="${y - 76}" width="62" height="40" rx="3" fill="#B8A8FF"/>` +
        `<circle cx="${x - 38}" cy="${y - 62}" r="5" fill="#F24E1E"/><circle cx="${x - 26}" cy="${y - 62}" r="5" fill="#1ABCFE"/><circle cx="${x - 14}" cy="${y - 62}" r="5" fill="#0ACF83"/><rect x="${x - 44}" y="${y - 50}" width="40" height="5" rx="2.5" fill="#fff" opacity=".7"/>` +
        `<rect x="${x + 30}" y="${y - 66}" width="34" height="66" rx="5" fill="#7B5CD6"/><circle cx="${x + 56}" cy="${y - 34}" r="2.5" fill="#FFD23F"/>` +
        `<g transform="translate(${x} ${y - 150})"><circle r="16" fill="#FFE27A"/><rect x="-7" y="14" width="14" height="10" rx="3" fill="#B8A8FF"/><path d="M-26 -14l-8-6M26 -14l8-6M0 -26v-9M-30 4h-9M30 4h9" stroke="#FFC21A" stroke-width="3.4" stroke-linecap="round"/></g>` +
        `<circle cx="${x + 88}" cy="${y - 7}" r="8" fill="#fff" stroke="#D8D0EC" stroke-width="2"/><path d="M${x + 83} ${y - 9}l6 3M${x + 86} ${y - 3}l5-6" stroke="#C8BFE3" stroke-width="1.6"/>`,
      iitd: (x, y) => gnd(x, y, 360) + tr(x - 190, y, 1.05) + tr(x + 195, y, .95, '#8CC66F') + bush(x - 150, y, .9) + bush(x + 152, y, .9) +
        `<rect x="${x - 160}" y="${y - 66}" width="320" height="66" rx="4" fill="#F1EBDD"/><rect x="${x - 166}" y="${y - 74}" width="332" height="10" rx="3" fill="#CFC4AC"/>` +
        grid(x - 146, y - 56, 10, 1, 12, 34, 16, 0, '#5B7FA8', 2, true) + grid(x + 42, y - 56, 4, 1, 12, 34, 16, 0, '#5B7FA8', 2, true) +
        `<rect x="${x - 44}" y="${y - 160}" width="88" height="160" rx="4" fill="#E7DFCD"/><rect x="${x - 50}" y="${y - 168}" width="100" height="10" rx="3" fill="#CFC4AC"/>` +
        grid(x - 32, y - 146, 4, 4, 12, 18, 8, 10, '#5B7FA8', 2, true) + grid(x - 34, y - 44, 5, 1, 6, 44, 11, 0, '#D9CFB8', 2) +
        `<g transform="translate(${x} ${y - 196})"><circle r="22" fill="#2E9E6B"/><path d="M-7 8h14M-5 14h10M0 -10a10 10 0 0 0-5 18h10a10 10 0 0 0-5-18z" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>` +
        `<ellipse cx="${x}" cy="${y + 26}" rx="120" ry="12" fill="#A6D38C" opacity=".6"/>`,
      ht: (x, y) => gnd(x, y, 260) + tr(x - 125, y, .95) + bush(x + 118, y) +
        `<rect x="${x - 118}" y="${y - 74}" width="74" height="74" rx="4" fill="#F3EEE3"/>` + grid(x - 108, y - 64, 3, 3, 14, 14, 9, 8, '#9CB7D6', 2) +
        `<defs><linearGradient id="htG" x1="0" x2="1"><stop offset="0" stop-color="#3A7BC4"/><stop offset="1" stop-color="#1F4E8A"/></linearGradient></defs>` +
        `<rect x="${x - 46}" y="${y - 236}" width="92" height="236" rx="5" fill="url(#htG)"/>` + grid(x - 34, y - 222, 4, 11, 12, 12, 8, 8, '#BFD9F2', 2) +
        `<rect x="${x - 58}" y="${y - 270}" width="116" height="36" rx="8" fill="#fff"/><text x="${x}" y="${y - 244}" text-anchor="middle" font-family="${FONT}" font-weight="800" font-size="22" fill="#1E4E86" letter-spacing="1">HT</text>` +
        `<rect x="${x - 16}" y="${y - 30}" width="32" height="30" rx="3" fill="#163A66"/>`,
      eazydiner: (x, y) => gnd(x, y, 300) + tr(x - 155, y) + tr(x + 158, y, .9, '#8CC66F') +
        `<rect x="${x - 115}" y="${y - 104}" width="230" height="104" rx="5" fill="#FFF4E6"/><rect x="${x - 121}" y="${y - 112}" width="242" height="13" rx="4" fill="#F4511E"/>` +
        `<rect x="${x - 98}" y="${y - 62}" width="72" height="46" rx="4" fill="#FFD9A8"/><rect x="${x + 26}" y="${y - 62}" width="72" height="46" rx="4" fill="#FFD9A8"/><rect x="${x - 17}" y="${y - 58}" width="34" height="58" rx="4" fill="#7A3A1E"/>` +
        `<g>${Array.from({ length: 11 }, (_, k) => `<rect x="${x - 110 + k * 20}" y="${y - 88}" width="20" height="16" fill="${k % 2 ? '#fff' : '#F4511E'}"/>`).join('')}<path d="M${x - 110} ${y - 72}${'q10 9 20 0'.repeat(11)}" fill="#F4511E"/></g>` +
        [[-70, '#FFB38A'], [70, '#F4511E']].map(([d, c]) => `<g transform="translate(${x + d} ${y + 34})"><rect x="-2" y="-30" width="4" height="30" fill="#6B4A2E"/><path d="M-24 -28q24 -20 48 0z" fill="${c}"/><ellipse rx="15" ry="5" fill="#D8C4A4"/></g>`).join('') +
        logoSign('logo-eazydiner', x, y - 146, 44, 22),
      mmt: (x, y) => gnd(x, y, 290) + tr(x - 140, y) + bush(x + 130, y) +
        `<defs><linearGradient id="mmtG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#D9EAFB"/><stop offset="1" stop-color="#8FB7E3"/></linearGradient></defs>` +
        `<rect x="${x - 110}" y="${y - 42}" width="220" height="42" rx="4" fill="#EEF3F9"/><rect x="${x - 26}" y="${y - 34}" width="52" height="34" rx="3" fill="#6E93BE"/>` +
        `<rect x="${x - 70}" y="${y - 206}" width="140" height="170" rx="6" fill="url(#mmtG)"/><rect x="${x + 44}" y="${y - 206}" width="26" height="170" fill="#7FA6CF" opacity=".55"/>` +
        grid(x - 58, y - 194, 5, 8, 16, 12, 6, 7, '#F4F9FF', 2) +
        logoSign('logo-mmt', x, y - 236, 48, 14),
      oyo: (x, y) => gnd(x, y, 270) + tr(x - 132, y, .95) + tr(x + 135, y, .85, '#8CC66F') +
        `<rect x="${x - 84}" y="${y - 186}" width="168" height="186" rx="6" fill="#FFFFFF"/><rect x="${x + 60}" y="${y - 186}" width="24" height="186" fill="#EFEAE3"/><rect x="${x - 90}" y="${y - 194}" width="180" height="12" rx="4" fill="#E9E2D8"/>` +
        Array.from({ length: 4 }, (_, r) => grid(x - 66, y - 174 + r * 34, 4, 1, 22, 20, 12, 0, '#F4CBC3', 3) + `<path d="M${x - 70} ${y - 150 + r * 34}h140" stroke="#DC402A" stroke-width="3" stroke-linecap="round"/>`).join('') +
        `<rect x="${x - 38}" y="${y - 44}" width="76" height="9" rx="4" fill="#DC402A"/><rect x="${x - 16}" y="${y - 35}" width="32" height="35" rx="3" fill="#8E2A1B"/>` +
        logoSign('logo-oyo', x, y - 224, 46, 14),
      lastlook: (x, y) => gnd(x, y, 230) + tr(x - 118, y, .95) + bush(x + 112, y) +
        `<rect x="${x - 50}" y="${y - 196}" width="100" height="196" rx="22" fill="#2B2118"/><rect x="${x - 42}" y="${y - 184}" width="84" height="172" rx="15" fill="#F6DCB9"/><rect x="${x - 14}" y="${y - 192}" width="28" height="7" rx="3.5" fill="#2B2118"/>` +
        `<rect x="${x - 30}" y="${y - 70}" width="60" height="9" rx="4.5" fill="#D9B98E"/><rect x="${x - 22}" y="${y - 54}" width="44" height="9" rx="4.5" fill="#E6CCA6"/>` +
        logoSign('logo-lastlook', x, y - 124, 50) +
        `<g transform="translate(${x + 78} ${y - 6})"><path d="M0 0C0 0 -24 -32 -24 -52a24 24 0 0 1 48 0c0 20 -24 52 -24 52z" fill="#9A6A3E"/><circle cy="-53" r="9" fill="#fff"/></g>`,
      creator: (x, y) => gnd(x, y, 250) + tr(x + 125, y, .9, '#8CC66F') +
        `<rect x="${x - 78}" y="${y - 98}" width="156" height="98" rx="6" fill="#FFEAF1"/><rect x="${x - 86}" y="${y - 110}" width="172" height="15" rx="6" fill="#E1306C"/>` +
        `<rect x="${x - 60}" y="${y - 80}" width="74" height="50" rx="6" fill="#2B1D26"/><path d="M${x - 29} ${y - 66}v22l18-11z" fill="#fff"/>` +
        `<rect x="${x + 28}" y="${y - 62}" width="32" height="62" rx="5" fill="#E1306C"/>` +
        `<g transform="translate(${x - 118} ${y})"><path d="M0 -58v58M-12 0l12 -16 12 16" stroke="#13233A" stroke-width="3" fill="none"/><circle cy="-80" r="22" fill="none" stroke="#FFE08A" stroke-width="7"/><circle cy="-80" r="22" fill="#FFF6CC" opacity=".35"/></g>`
    };
    let lmH = '', rtH = '';
    STOPS.forEach((st, i) => { rtH += `<circle class="ripple" id="rip${i}" cx="${st.at[0]}" cy="${st.at[1] - 60}" r="90" fill="none" stroke="${st.c}" stroke-width="6"/>`; lmH += `<g class="lm" id="lm${i}">${LM[st.id](st.at[0], st.at[1] - 40)}</g>`; });
    // start and finish flags
    h += `<g font-family="${FONT}" font-weight="800" font-size="22"><g transform="translate(${HX - 70} ${HY + 1720})"><path d="M0 0v-70" stroke="#13233A" stroke-width="4"/><path d="M0 -70h54l-10 14 10 14h-54z" fill="#FF6B4A"/><text x="8" y="-49" fill="#fff" font-size="16">2023</text></g>
      <g transform="translate(${HX + 40} ${HY + 1720})"><path d="M0 0v-70" stroke="#13233A" stroke-width="4"/><path d="M0 -70h70l-10 14 10 14h-70z" fill="#4285F4"/><text x="8" y="-49" fill="#fff" font-size="16">NOW</text></g></g>`;
    rtH += `<path id="ghostPath" d="${d}" fill="none" stroke="#4285F4" stroke-opacity=".8" stroke-width="3.5" stroke-dasharray="1 9" stroke-linecap="round" vector-effect="non-scaling-stroke"/>`;
    rtH += `<path id="casing" d="${d}" fill="none" stroke="#1A5FD0" stroke-width="15" stroke-linecap="round"/><path id="carve" d="${d}" fill="none" stroke="#4285F4" stroke-width="10" stroke-linecap="round"/>`;
    mapArt.setAttribute('viewBox', `0 0 ${MW} ${MH}`); mapArt.innerHTML = h;
    // the base map is drawn once into a bitmap (per theme), so moving the camera only slides an image and never repaints thousands of shapes
    (function bakeMap() {
      const DARK = { fill: { '#FDFCF9': '#1C1C1C', '#E3DED5': '#262626', '#CDE8C4': '#1E2B22', '#AAD3F2': '#1A2733', '#fff': '#2A2D32', '#8C9096': '#8A9099', '#6E9FCB': '#8A9099', '#8A6A1E': '#C9B27A' },
        stroke: { '#E2DDD3': '#17181A', '#DCD5C9': '#17181A', '#FFFFFF': '#333333', '#AAD3F2': '#1A2733', '#EDC458': '#5C4A1F', '#FCDE86': '#7A6328', '#FDFCF9': '#1C1C1C', '#E4B847': '#7A6328' } };
      const svgFor = dark => { let b = h.replace(/<defs><radialGradient id="hole">[\s\S]*?<\/defs>/, '');
        if (dark) { const keep = []; b = b.replace(/<mask[\s\S]*?<\/mask>/g, m => (keep.push(m), `@@M${keep.length - 1}@@`));
          b = b.replace(/(fill|stroke)="(#[0-9A-Fa-f]{3,6})"/g, (m, a, c) => { const t = DARK[a][c] || DARK[a][c.toUpperCase()]; return t ? `${a}="${t}"` : m; });
          b = b.replace(/@@M(\d+)@@/g, (m, i) => keep[+i]); }
        // decode the svg straight at the bitmap size: a full-size decode is ~75MB and can kill a phone's tab
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${MW} ${MH}" width="${Math.round(MW * R)}" height="${Math.round(MH * R)}">${b}</svg>`; };
      const cache = {}; let cv = null;
      const R = Math.min(innerWidth < 860 ? .42 : .75, 4096 / MW);
      const bake = () => { const dark = document.documentElement.dataset.theme === 'dark', key = dark ? 'd' : 'l';
        const show = c => { if (cv && cv !== c) cv.remove(); cv = c; if (!c.isConnected) mapArt.after(c); mapArt.style.visibility = 'hidden'; };
        if (cache[key]) return show(cache[key]);
        const img = new Image(); img.decoding = 'async';
        img.onload = () => { const c = document.createElement('canvas'); c.className = 'mapbake'; c.width = Math.round(MW * R); c.height = Math.round(MH * R);
          const x = c.getContext('2d'); if (!x) { mapArt.style.visibility = ''; return; } x.drawImage(img, 0, 0, c.width, c.height); x.scale(R, R); URL.revokeObjectURL(img.src);
          // the edges dissolve into the page: solid in the middle, fading out towards every side
          x.globalCompositeOperation = 'destination-in'; x.save(); x.translate(MW / 2, MH / 2); x.scale(MW / 2, MH / 2);
          const g = x.createRadialGradient(0, 0, 0, 0, 0, 1); g.addColorStop(0, '#000'); g.addColorStop(.58, '#000'); g.addColorStop(.8, 'rgba(0,0,0,.55)'); g.addColorStop(.97, 'rgba(0,0,0,0)');
          x.fillStyle = g; x.fillRect(-1, -1, 2, 2); x.restore(); x.globalCompositeOperation = 'source-over';
          // hand the pixels to a plain image and free the canvas: the browser can drop and re-decode an image under memory pressure, a canvas it can't
          c.toBlob(b => { const out = new Image(); out.className = 'mapbake'; out.alt = ''; out.decoding = 'async';
            const done = () => { c.width = c.height = 0; if (innerWidth < 860) for (const k in cache) if (k !== key) { URL.revokeObjectURL(cache[k].src); delete cache[k]; }
              cache[key] = out; if ((document.documentElement.dataset.theme === 'dark') === dark) show(out); };
            if (!b) { cache[key] = c; if ((document.documentElement.dataset.theme === 'dark') === dark) show(c); return; }
            out.onload = done; out.onerror = () => { mapArt.style.visibility = ''; }; out.src = URL.createObjectURL(b); }, 'image/webp', .9); };
        img.onerror = () => { mapArt.style.visibility = ''; };
        img.src = URL.createObjectURL(new Blob([svgFor(dark)], { type: 'image/svg+xml' }));
      };
      let baked = false; const bakeLater = () => { baked = true; (window.requestIdleCallback || (f => setTimeout(f, 60)))(bake, { timeout: 1500 }); };
      setTimeout(bakeLater, 4200); addEventListener('themechange', () => { if (baked) bake(); });
    })();
    const layer = (id, html, z) => { const el = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); el.id = id; el.setAttribute('class', 'maplayer'); el.setAttribute('viewBox', `0 0 ${MW} ${MH}`); el.setAttribute('aria-hidden', 'true'); if (z) el.style.zIndex = z; el.innerHTML = html; world3.insertBefore(el, meTip); return el; };
    layer('routeArt', rtH);
    layer('lmArt', lmH);
    const sp = document.createElement('div'); sp.className = 'spot2'; sp.id = 'spot'; $('#jPin').insertBefore(sp, $('#jFade'));
    world3.style.width = MW + 'px'; world3.style.height = MH + 'px';
    spot = $('#spot'); carve = $('#carve'); casing = $('#casing'); ghost = $('#ghostPath');
    pathLen = carve.getTotalLength();
    [carve, casing].forEach(p => { p.style.strokeDasharray = pathLen; p.style.strokeDashoffset = pathLen; });
    { const STEP = 16, pts = []; for (let l = 0; l <= pathLen; l += STEP) pts.push(carve.getPointAtLength(l));   // the route is sampled once and shared by every stop
      stopL = STOPS.map(st => { let bi = 0, bd = 1e12; pts.forEach((q, i) => { const dd = (q.x - st.at[0]) ** 2 + (q.y - st.at[1]) ** 2; if (dd < bd) { bd = dd; bi = i; } });
        let best = bi * STEP; bd = 1e12; for (let l = Math.max(0, best - STEP); l <= Math.min(pathLen, best + STEP); l += 2) { const q = carve.getPointAtLength(l), dd = (q.x - st.at[0]) ** 2 + (q.y - st.at[1]) ** 2; if (dd < bd) { bd = dd; best = l; } } return best; }); }
    const pinShape = c => `<svg viewBox="0 0 54 66"><path d="M27 64C27 64 4 40 4 25a23 23 0 0 1 46 0c0 15-23 39-23 39z" fill="${c}" stroke="#fff" stroke-width="3"/></svg>`;
    STOPS.forEach((st, i) => {
      const m = document.createElement('button'); m.className = 'mk'; m.type = 'button'; m.style.setProperty('--c', st.c); m.style.left = st.at[0] + 'px'; m.style.top = st.at[1] + 'px';
      m.setAttribute('aria-label', `Go to ${st.when}: ${st.name}`);
      m.innerHTML = `<span class="halo"></span><span class="dot"></span><span class="pinhead">${pinShape(st.c)}${st.logo ? `<img class="lg" src="${img(st.logo)}" alt="">` : `<span class="ic"><svg viewBox="0 0 24 24">${ICONS[st.icon]}</svg></span>`}</span><span class="nm">${st.name}</span>`;
      m.addEventListener('click', () => { if (!dragMoved) walkTo(i); }); world3.insertBefore(m, meTip); jmarks.push(m);
      st.pois.forEach(([x, y, ic, tip, url, col]) => {
        const p = document.createElement(url ? 'a' : 'button'); p.className = 'poi' + (url ? ' link' : ''); p.style.setProperty('--c', col || st.c); p.style.left = (st.at[0] + x) + 'px'; p.style.top = (st.at[1] + y) + 'px'; p.dataset.stop = i;
        if (url) { p.href = url; p.target = '_blank'; p.rel = 'noopener'; p.innerHTML = `<svg viewBox="0 0 24 24">${ICONS[ic]}</svg>${tip} ↗`; }
        else { p.type = 'button'; p.setAttribute('aria-label', tip); p.innerHTML = `<svg viewBox="0 0 24 24">${ICONS[ic]}</svg><span class="tip">${tip}</span>`;
          p.addEventListener('click', e => { e.stopPropagation(); if (dragMoved) return; const on = !p.classList.contains('tipon'); pois.forEach(q => q.classList.remove('tipon')); p.classList.toggle('tipon', on); }); }
        world3.insertBefore(p, meTip); pois.push(p); });
    });
  })();
  const lms = STOPS.map((_, i) => $('#lm' + i)), rips = STOPS.map((_, i) => $('#rip' + i)), found = STOPS.map(() => false);
  // timeline
  const jtlDots = $('#jtlDots'), jtlYr = $('#jtlYr');
  const tlBtns = STOPS.map((st, i) => { const li = document.createElement('li'); const b = document.createElement('button'); b.type = 'button'; b.style.setProperty('--c', st.c); b.setAttribute('aria-label', `${st.when}, ${st.name}`); b.title = `${st.when} · ${st.name}`; b.addEventListener('click', () => walkTo(i)); li.appendChild(b); jtlDots.appendChild(li); return b; });
  // polaroids
  const photoHTML = (st, [src, cap]) => src ? `<img src="${img(src)}" alt="${cap}" loading="lazy">` : `<svg viewBox="0 0 24 24">${ICONS.camera}</svg>`;
  function showPols(i) {
    if (polFor === i) return; polFor = i;
    polsEl.classList.remove('in');
    clearTimeout(showPols.t);
    if (i < 0) { showPols.t = setTimeout(() => polsEl.innerHTML = '', 400); return; }
    const st = STOPS[i], left = false;
    showPols.t = setTimeout(() => {
      polsEl.style.left = st.at[0] + 'px'; polsEl.style.top = (st.at[1] - st.lift + 20) + 'px';
      const spots = left ? [[-470, -20, 6], [-330, 30, -8], [-190, -30, 4], [-60, 40, -5]] : mobile ? [[-190, 10, -8], [-150, 50, 4], [-110, 0, 9], [-70, 40, -5]] : [[235, 20, -7], [360, -40, 4], [485, 30, 9], [610, -30, -5]];
      if (left && st.photos.length < 4) spots.shift();
      polsEl.innerHTML = st.photos.map((ph, k) => `<button class="pol" type="button" style="--k:${k};--x:${spots[k][0]}px;--y:${spots[k][1]}px;--r:${spots[k][2]}deg;--g:${grad(st.c)}" data-i="${k}" aria-label="Open photo: ${ph[1]}"><span class="ph${ph[0] ? '' : ' empty'}">${photoHTML(st, ph)}</span><span>${ph[1]}</span></button>`).join('');
      requestAnimationFrame(() => requestAnimationFrame(() => polsEl.classList.add('in')));
    }, 280);
  }
  polsEl.addEventListener('click', e => { const b = e.target.closest('.pol'); if (b && polFor >= 0) openLB(polFor, +b.dataset.i); });
  // photo viewer
  const lb = $('#lb'), lbTrack = $('#lbTrack'), lbCount = $('#lbCount');
  let lbN = 0;
  function openLB(i, start, alt) {
    const st = alt || STOPS[i]; lbN = st.photos.length;
    lb.style.setProperty('--g', grad(st.c));
    $('#lbWhen').textContent = `${st.when} · ${st.place}`; $('#lbTitle').textContent = st.title;
    lbTrack.innerHTML = st.photos.map(([src, cap], n) => `<figure class="lb-slide" style="margin:0"><div class="frame" style="--rot:${[-1.6, 1.2, -.8][n % 3]}deg">${src ? `<img src="${img(src)}" alt="${cap}">` : `<div class="empty"><svg viewBox="0 0 24 24">${ICONS.camera}</svg>Photo coming soon</div>`}<figcaption>${cap}</figcaption></div></figure>`).join('');
    lb.classList.add('open'); lenis && lenis.stop(); document.documentElement.style.overflow = 'hidden';
    requestAnimationFrame(() => { lbTrack.scrollLeft = start * lbTrack.clientWidth; lbCount.textContent = `${start + 1} / ${lbN}`; $('#lbX').focus({ preventScroll: true }); });
  }
  function closeLB() { if (!lb.classList.contains('open')) return; lb.classList.remove('open'); document.documentElement.style.overflow = ''; lenis && lenis.start(); }
  const lbGo = d => lbTrack.scrollBy({ left: d * lbTrack.clientWidth, behavior: reduce ? 'auto' : 'smooth' });
  lbTrack.addEventListener('scroll', () => { lbCount.textContent = `${Math.round(lbTrack.scrollLeft / Math.max(1, lbTrack.clientWidth)) + 1} / ${lbN}`; }, { passive: true });
  $('#lbPrev').addEventListener('click', () => lbGo(-1)); $('#lbNext').addEventListener('click', () => lbGo(1)); $('#lbX').addEventListener('click', closeLB);
  lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lb-slide') || e.target === lbTrack) closeLB(); });
  addEventListener('keydown', e => { if (!lb.classList.contains('open')) return; if (e.key === 'Escape') closeLB(); if (e.key === 'ArrowRight') lbGo(1); if (e.key === 'ArrowLeft') lbGo(-1); });
  // the card
  const CASE_OF = { [CS + 'eazydiner']: 'coupon', [CS + 'requests']: 'requests', traum: 'traum' };
  function cardHTML(i) {
    const st = STOPS[i];
    const tile = st.logo ? `<span class="tile"><img src="${img(st.logo)}" alt="${st.name} logo"></span>` : `<span class="tile"><svg viewBox="0 0 24 24">${ICONS[st.icon]}</svg></span>`;
    return `<div class="jc-top">${tile}<p><b>${st.name}</b>${st.when} · ${st.place}</p></div>
      <div class="jc-bd"><h3>${st.title}</h3><p class="txt">${st.txt}</p><button type="button" class="jc-more" aria-expanded="false">Read more</button>
      ${st.share ? `<div class="jc-share"><a href="${IG}" target="_blank" rel="noopener"><i style="background:linear-gradient(45deg,#F58529,#DD2A7B,#8134AF)"><svg viewBox="0 0 24 24">${ICONS.ig}</svg></i><div>Sanmathi Ramesh<span>Design, building and career on Instagram</span></div><em>↗</em></a><a href="${LI}" target="_blank" rel="noopener"><i style="background:#0A66C2"><svg viewBox="0 0 24 24">${ICONS.in}</svg></i><div>Sanmathi Ramesh<span>Work and lessons on LinkedIn</span></div><em>↗</em></a></div>` : ''}
      ${st.stats ? `<ul class="jc-stats">${st.stats.map(([b, t]) => `<li><b>${b}</b><span>${t}</span></li>`).join('')}</ul>` : ''}
      ${st.photos && st.photos.length ? `<div class="jc-gal"><p>Gallery</p><div style="--n:${st.photos.length}">${st.photos.map(([src, cap], k) => `<button type="button" class="jc-ph" data-lb="${k}" aria-label="Open photo: ${cap}" style="--r:${[-3, 2, -1.5][k % 3]}deg"><span class="ph${src ? '' : ' empty'}">${src ? `<img src="${img(src)}" alt="" loading="lazy">` : `<svg viewBox="0 0 24 24">${ICONS.camera}</svg>`}</span><small>${cap}</small></button>`).join('')}</div></div>` : ''}
      ${st.work ? `<div class="jc-act">${CASE_OF[st.work] ? `<button type="button" class="cbtn" data-case="${CASE_OF[st.work]}">View case study<svg viewBox="0 0 24 24">${ICONS.arrowR}</svg></button>` : `<a class="cbtn" href="${st.work}" target="_blank" rel="noopener">View work<svg viewBox="0 0 24 24">${ICONS.arrowR}</svg></a>`}</div>` : ''}</div>`;
  }
  function showCard(i) {
    if (lastCard === i) return; const first = lastCard < 0; lastCard = i;
    jcard.classList.toggle('in', i >= 0);
    if (i < 0) return;
    jcard.style.setProperty('--c', STOPS[i].c);
    if (jCar) { clearTimeout(showCard.t); jcIn.innerHTML = cardHTML(i); jcard.scrollTop = 0; jcard.classList.remove('open', 'swap'); return; }
    jcard.classList.add('swap'); clearTimeout(showCard.t);
    showCard.t = setTimeout(() => { jcIn.innerHTML = cardHTML(i); jcard.scrollTop = 0; jcard.classList.remove('swap'); }, first ? 0 : 260);
  }
  jcard.addEventListener('click', e => { const oc = e.target.closest('[data-case]'); if (oc) { openCaseAt(oc.dataset.case, oc); return; } const mo = e.target.closest('.jc-more'); if (mo) { const o = jcard.classList.toggle('open'); mo.setAttribute('aria-expanded', o); mo.textContent = o ? 'Show less' : 'Read more'; if (!o) jcard.scrollTop = 0; return; } const s = e.target.closest('[data-step]'); if (s) walkTo(+s.dataset.step); const p = e.target.closest('[data-photos]'); if (p) openLB(+p.dataset.photos, 0); const g = e.target.closest('[data-lb]'); if (g && lastCard >= 0) openLB(lastCard, +g.dataset.lb); });
  // map controls
  let uz = 1, pan = { x: 0, y: 0 }, dragMoved = false, drag = null, lastActive = -2;
  $('#mapIn').addEventListener('click', () => uz = clamp(uz * 1.3, .55, 2.4));
  $('#mapOut').addEventListener('click', () => uz = clamp(uz / 1.3, .55, 2.4));
  $('#mapRe').addEventListener('click', () => { uz = 1; pan.x = 0; pan.y = 0; });
  mapview.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse' || e.target.closest('.poi, .mk, .pol')) return; drag = { x: e.clientX, y: e.clientY, px: pan.x, py: pan.y }; dragMoved = false; mapview.classList.add('drag'); });
  addEventListener('pointermove', e => { if (!drag) return; const dx = e.clientX - drag.x, dy = e.clientY - drag.y; if (Math.abs(dx) + Math.abs(dy) > 4) dragMoved = true; pan.x = drag.px + dx; pan.y = drag.py + dy; });
  addEventListener('pointerup', () => { if (drag) { drag = null; mapview.classList.remove('drag'); setTimeout(() => dragMoved = false, 0); } });
  mapview.addEventListener('click', e => { if (!e.target.closest('.poi')) pois.forEach(q => q.classList.remove('tipon')); });
  function layoutJourney() { jCar = vw <= 1100; journey.classList.toggle('jcm', jCar); $('.j-how').textContent = jCar ? 'Tap through them, or swipe the map.' : 'Scroll to walk the path.'; jTrack.style.height = jCar ? '' : DONE.j ? '100vh' : (N * 84 + 200) + 'vh'; jTop = top(jTrack); jRange = Math.max(1, jTrack.offsetHeight - vh); headB = jHead.offsetTop + jHead.offsetHeight; jFade.style.setProperty('--hb', headB + 'px'); }
  const PH = { hold: .012, zoom: .115, walk: .91 };
  function phase(p) {
    if (p < PH.hold) return { pos: -1, k: 0, out: 0 };
    if (p < PH.zoom) { const k = ss((p - PH.hold) / (PH.zoom - PH.hold)); return { pos: -1 + k, k, out: 0 }; }
    if (p < PH.walk) { const t = (p - PH.zoom) / (PH.walk - PH.zoom) * (N - 1), i = Math.min(N - 2, Math.floor(t)), f = t - i; return { pos: i + f - .55 * Math.sin(2 * Math.PI * f) / (2 * Math.PI), k: 1, out: 0 }; }
    return { pos: N - 1, k: 1, out: ss(clamp((p - PH.walk) / .07)) };
  }
  const lenAt = pos => { if (pos <= 0) return pos < -.999 ? 0 : stopL[0] * (1 + pos); const i = Math.min(N - 2, Math.floor(pos)), f = pos - i; return stopL[i] + (stopL[i + 1] - stopL[i]) * f; };
  const cam3 = { x: 0, y: 0, s: 0, ok: false };
  const cardW = () => mobile ? 0 : Math.min(26 * 16, vw - 32) + 44;
  function viewFor(cx, cy, s) { const L = cardW(), fx = mobile ? vw * .5 : L + (vw - L) * .36, fy = mobile ? vh * .33 : vh * .58; return { x: fx - cx * s, y: fy - cy * s, s }; }
  let headB = 240;
  function overview() { const t = headB + 10, b = mobile ? 70 : 90, s = Math.min((vw - 48) / MW, (vh - t - b) / MH) * (mobile ? 1.12 : 1); return { x: (vw - MW * s) / 2, y: t + (vh - t - b - MH * s) / 2, s }; }
  const tg = (el, c, on) => { on = !!on; if (el.classList.contains(c) !== on) el.classList.toggle(c, on); };   // touch the class list only when something changes
  function frameJourney(dt, y) {
    if (jCar) { const ke = reduce ? 1 : 1 - Math.exp(-dt * (jdrag ? 22 : 4.6)); jpos += (jposT - jpos) * ke; if (Math.abs(jposT - jpos) < .0005) jpos = jposT; }
    const p = jCar ? (jpos <= -.999 ? 0 : .5) : clamp((y - jTop) / jRange), ph = jCar ? (jpos < 0 ? { pos: jpos, k: ss(jpos + 1), out: 0 } : { pos: jpos, k: 1, out: 0 }) : phase(p);
    const L = lenAt(Math.max(ph.pos, 0)), tip = carve.getPointAtLength(Math.max(0.01, L));
    const O = overview(), Z = (mobile ? .5 : jCar ? .52 : clamp(vw / 3000, .44, .6)) * uz;
    const dip = 0;
    const F = viewFor(tip.x, tip.y, Z * (1 - dip));
    const k = ph.out ? 1 - ph.out : ph.k;
    const hk = ss(clamp(k * 1.6));
    jHead.style.opacity = (1 - hk).toFixed(3); jHead.style.transform = `translate3d(0, ${(-hk * 40).toFixed(1)}px, 0)`; jFade.style.opacity = (1 - ss(k)).toFixed(3);
    tg(world3, 'far', k < .5); tg(journey, 'jfar', k < .5); tg(journey, 'jstart', ph.pos <= -.995 && !ph.out);
    const T = { x: O.x + (F.x - O.x) * k + pan.x, y: O.y + (F.y - O.y) * k + pan.y, s: O.s + (F.s - O.s) * k };
    if (!cam3.ok) Object.assign(cam3, T, { ok: true });
    const e = reduce ? 1 : 1 - Math.exp(-dt * 6);
    cam3.x += (T.x - cam3.x) * e; cam3.y += (T.y - cam3.y) * e; cam3.s += (T.s - cam3.s) * e;
    world3.style.transform = `translate3d(${cam3.x.toFixed(1)}px, ${cam3.y.toFixed(1)}px, 0) scale(${cam3.s.toFixed(4)})`;
    const inv = Math.round(clamp(1 / cam3.s, .55, 3) * 20) / 20; if (inv !== frameJourney.inv) { frameJourney.inv = inv; world3.style.setProperty('--inv', inv.toFixed(3)); }
    // phones: the route jumps straight to the next stop instead of repainting on every frame of the glide
    const carved = jCar && mobile ? (jposT < 0 ? 0 : lenAt(jposT)) : ph.pos < 0 ? stopL[0] * clamp(ph.pos + 1) : L;
    const q = mobile ? 14 : 4, off = (Math.round((pathLen - carved) / q) * q).toFixed(0);
    if (off !== frameJourney.off) { frameJourney.off = off; carve.style.strokeDashoffset = off; casing.style.strokeDashoffset = off; }
    const go = (1 - ph.k * .8 + ph.out * .8).toFixed(2); if (go !== frameJourney.go) { frameJourney.go = go; ghost.style.opacity = go; }
    const settled = ph.k > .95 && !ph.out && Math.abs(ph.pos - Math.round(ph.pos)) < .06;
    const active = ph.pos < -.35 || ph.out > .3 ? -1 : Math.round(ph.pos);
    if (active !== lastActive) { lastActive = active; pan.x = 0; pan.y = 0; pois.forEach(q => q.classList.remove('tipon')); }
    lms.forEach((g, i) => { const reached = ph.pos >= i - .08 && ph.k > .5 && ph.out < .3; tg(g, 'seen', reached); tg(g, 'all', ph.k < .5 || ph.out > .3);
      tg(g, 'act', i === Math.round(ph.pos) && ph.k > .9 && ph.out < .3);
      if (reached && !found[i]) { found[i] = true; rips[i].classList.remove('go'); void rips[i].getBBox(); rips[i].classList.add('go'); } if (!reached && ph.pos < i - .5) found[i] = false; });
    jmarks.forEach((m, i) => { const seen = ph.k < .5 || ph.out > .3 || ph.pos >= i - .08; tg(m, 'seen', seen); tg(m, 'on', i === active); tg(m, 'dim', ph.k > .5 && !ph.out && ph.pos < i - .08); });
    pois.forEach(q => { tg(q, 'seen', ph.pos >= +q.dataset.stop - .08 && ph.k > .9 && !ph.out); tg(q, 'here', +q.dataset.stop === active); });
    tg(world3, 'focus', active >= 0);
    if (active >= 0) { const a = STOPS[active].at, e2 = reduce ? 1 : clamp(dt * 3.5); spotC.x += (a[0] + 190 - spotC.x) * e2; spotC.y += (a[1] - 120 - spotC.y) * e2; }
    if (active >= 0) { const sx = (cam3.x + spotC.x * cam3.s).toFixed(0), sy = (cam3.y + spotC.y * cam3.s).toFixed(0), sr = (900 * cam3.s).toFixed(0), key = sx + ',' + sy + ',' + sr; if (key !== frameJourney.sp) { frameJourney.sp = key; spot.style.setProperty('--sx', sx + 'px'); spot.style.setProperty('--sy', sy + 'px'); spot.style.setProperty('--sr', sr + 'px'); } }
    tg(spot, 'on', active >= 0 && ph.k > .9);
    showPols(-1);
    meTip.style.opacity = ph.pos > -.5 && ph.out < .5 ? 1 : 0;
    { const mt = `translate3d(${tip.x.toFixed(1)}px, ${tip.y.toFixed(1)}px, 0) translate(-50%, -50%) scale(var(--inv, 1))`; if (mt !== frameJourney.mt) { frameJourney.mt = mt; meTip.style.transform = mt; } }
    const ahead = carve.getPointAtLength(Math.min(pathLen, L + 40)), want = ph.pos < 0 || ph.out ? 0 : Math.atan2(ahead.x - tip.x, -(ahead.y - tip.y)) * 180 / Math.PI;
    let dh = ((want - heading + 540) % 360) - 180; heading += dh * (reduce ? 1 : clamp(dt * 4));
    needle.style.transform = `rotate(${heading.toFixed(1)}deg)`; meTip.style.setProperty('--hd', heading.toFixed(1) + 'deg');
    tg(compass, 'in', p > .005 && p < .999);
    tlBtns.forEach((b, i) => { tg(b, 'on', i === active); tg(b, 'done', ph.pos >= i - .08 && ph.k > .5); });
    { const yt = active >= 0 ? `${STOPS[active].when} · ${STOPS[active].place}` : '2023 → now'; if (yt !== frameJourney.yt) { frameJourney.yt = yt; jtlYr.textContent = yt; } }   // a text write every frame would re-layout the whole page every frame
    showCard(active);
    if (jCar) { const f = ph.pos < 0 ? 0 : ph.pos - Math.round(ph.pos), dx = (-f * 150).toFixed(1), da = Math.max(0, 1 - Math.abs(f) * 2.1).toFixed(3);
      if (dx !== frameJourney.dx || da !== frameJourney.da) { frameJourney.dx = dx; frameJourney.da = da; jcIn.style.transform = `translate3d(${dx}px, 0, 0)`; jcIn.style.opacity = da; } }
    tg(journey, 'over', !jCar && ph.out > .6);
  }
  const stopP = i => i < 0 ? 0 : PH.zoom + Math.min(N - 1.001, i + .1) / (N - 1) * (PH.walk - PH.zoom);
  function carTo(i) {
    if (jIdx < 0 && i >= 0 && Math.abs(Y() - jTop) > 20) goTo(jTop, 1);
    jIdx = clamp(i, -1, N - 1); jposT = jIdx;
    $('#jcPrev').disabled = jIdx < 0; $('#jcCount').textContent = jIdx < 0 ? '' : `${jIdx + 1} / ${N}`;
    $('#jcNext').innerHTML = jIdx < 0 ? 'Start the journey <span aria-hidden="true">→</span>' : jIdx === N - 1 ? 'See my work <span aria-hidden="true">↓</span>' : 'Next stop <span aria-hidden="true">→</span>';
    journey.classList.toggle('started', jIdx >= 0);
  }
  $('#jtlView').addEventListener('click', () => { if (jCar) { carTo(0); goTo(jTop); } else walkTo(0); });
  $('#jcPrev').addEventListener('click', () => carTo(jIdx - 1));
  $('#jcNext').addEventListener('click', () => { if (jIdx === N - 1) goTo(top($('#work'))); else carTo(jIdx + 1); });
  // swipe between stops: the map and card follow the finger, then glide to the next stop or spring back
  let sw = null, swEat = false;
  const jPinEl = $('#jPin');
  jPinEl.addEventListener('pointerdown', e => { if (!jCar || e.pointerType === 'mouse' || e.target.closest('.jcar, .mapctl, a, .jtl')) return; sw = { x: e.clientX, y: e.clientY, t: performance.now(), ax: null, base: jIdx, vx: 0, lx: e.clientX, lt: performance.now() }; });
  jPinEl.addEventListener('pointermove', e => { if (!sw) return; const dx = e.clientX - sw.x, dy = e.clientY - sw.y;
    if (!sw.ax) { if (Math.hypot(dx, dy) < 8) return; sw.ax = Math.abs(dx) > Math.abs(dy) * 1.15 ? 'x' : 'y'; if (sw.ax === 'x') { jdrag = true; try { jPinEl.setPointerCapture(e.pointerId); } catch (_) {} } }
    if (sw.ax !== 'x') return;
    const now = performance.now(); sw.vx = sw.vx * .6 + ((e.clientX - sw.lx) / Math.max(1, now - sw.lt)) * .4; sw.lx = e.clientX; sw.lt = now;
    let t = sw.base - dx / Math.min(vw * .75, 520); const lo = Math.max(-1, sw.base - 1), hi = Math.min(N - 1, sw.base + 1);
    if (t < lo) t = lo - (lo - t) * .25; if (t > hi) t = hi + (t - hi) * .25; jposT = t; });
  const swEnd = e => { if (!sw) return; const s0 = sw; sw = null; if (s0.ax !== 'x') return; jdrag = false; swEat = true; setTimeout(() => swEat = false, 50);
    const dx = e.clientX - s0.x, far = Math.abs(dx) > Math.min(vw * .16, 90), fast = Math.abs(s0.vx) > .35;
    const go = (far || fast) ? (dx < 0 ? 1 : -1) : 0, to = clamp(s0.base + go, -1, N - 1);
    if (to === -1 && s0.base === 0) carTo(0); else carTo(to); };
  jPinEl.addEventListener('pointerup', swEnd); jPinEl.addEventListener('pointercancel', swEnd);
  jPinEl.addEventListener('click', e => { if (swEat) { e.stopPropagation(); e.preventDefault(); } }, true);
  function reopenJourney() {
    if (!DONE.j) return; DONE.j = 0; delete HW.j;
    const y = Y(); layout(); if (Y() !== y) { lenis ? lenis.scrollTo(y, { immediate: true, force: true }) : scrollTo(0, y); }
  }
  function walkTo(i) {
    reopenJourney();
    if (jCar) { carTo(i); if (Math.abs(Y() - jTop) > vh * .5) goTo(jTop); return; }
    i = clamp(i, 0, N - 1);
    const t = Math.min(N - 1.001, i + .1), p = PH.zoom + t / (N - 1) * (PH.walk - PH.zoom);
    goTo(jTop + (i === 0 ? PH.zoom + .01 : p) * jRange, 2.2);
  }

  /* =========================================================
     4 · WORK (the box)
     ========================================================= */
  const box3 = $('#box3'), boxFit = $('#boxFit'), boxStage = $('#boxStage'), boxTrack = $('#boxTrack'), boxCap = $('#boxCap'), csEl = $('#cs');
  const BW = 660, BD = 260, BH = 96, CW = 224, CH = 304, VIEW_Z = 30, VIEW_X = 57;
  const face = (cls, w, h, x, y, z, rot, html = '') => { const el = document.createElement('div'); el.className = 'f ' + cls; el.style.width = w + 'px'; el.style.height = h + 'px';
    el.style.left = (x - w / 2) + 'px'; el.style.top = (y - h) + 'px'; el.style.transform = `translate3d(0,0,${z}px) ${rot}`; el.innerHTML = html; box3.appendChild(el); return el; };
  face('wall-i', BW, BH, BW / 2, 0, 0, 'rotateX(-90deg)');
  face('wall-i', BD, BH, 0, BD / 2, 0, 'rotateZ(90deg) rotateX(-90deg)');
  const lid = face('box-lid', BW, BD, BW / 2, 0, BH, 'rotateX(-180deg)');
  const SUNK = -(CH - BH + 40);
  // the back of a card, shown on hover: the numbers it moved, or for unshipped work what changed and the targets
  const wkBack = w => { const res = (w.res || []).slice(0, 2);
    if (!res.length && !w.wins) return '';
    const body = res.length ? `<ul class="wb-n">${res.map(([b, t]) => `<li><b>${b}</b><span>${t}</span></li>`).join('')}</ul>`
      : `<ul class="wb-l">${w.wins.map(t => `<li><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>${t}</li>`).join('')}</ul><div class="wb-g">${w.goals.map(([b, t]) => `<span><b>${b}</b>${t}</span>`).join('')}</div><small class="wb-t">Targets, launching soon</small>`;
    return `<div class="wk-bk" aria-hidden="true"><p class="wb-k">${res.length ? 'The numbers' : 'What changed'}</p>${body}<span class="wb-go">Open case study →</span></div>`; };
  const wks = WORK.map((w, i) => {
    const x = 108 + i * ((BW - 216) / (WORK.length - 1));
    const el = document.createElement('button'); el.className = 'wk' + (w.cls ? ' ' + w.cls : ''); el.type = 'button';
    el.style.setProperty('--bg', w.bg); el.style.setProperty('--glow', w.glow); el.style.setProperty('--c', w.c);
    el.style.left = (x - CW / 2) + 'px'; el.style.top = (BD / 2 - CH) + 'px';
    el.setAttribute('aria-label', `${w.name}, open case study`);
    const [kind, main, sub] = w.face;
    el.innerHTML = `<div class="wk-top">${w.logo ? `<img class="wk-logo" src="${img(w.logo)}" alt="">` : `<span class="wk-ic"><svg viewBox="0 0 24 24">${ICONS[w.icon]}</svg></span>`}</div>
      <div><p class="wk-hand" style="margin:0 0 8px">${w.name}</p><div class="wk-${kind}">${main}</div><p class="wk-sub" style="margin-bottom:0">${sub}</p></div>${wkBack(w)}`;
    box3.appendChild(el);
    return { el, w, i, x, z: SUNK };
  });
  face('wall-o', BD, BH, BW, BD / 2, 0, 'rotateZ(-90deg) rotateX(-90deg)');
  face('wall-o', BW, BH, BW / 2, BD, 0, 'rotateX(-90deg)', '<span class="brand">Things I designed</span>');
  const stand = z => `translate3d(0px, 0px, ${z}px) rotateZ(-90deg) rotateX(-90deg) rotateY(0deg)`;
  const faced = k => `translate3d(${(BW / 2 - k.x).toFixed(1)}px, ${BD * .95}px, 210px) rotateZ(${-VIEW_Z}deg) rotateX(${-VIEW_X}deg) rotateY(0deg)`;
  // a card sunk into the box is clipped at the box floor, so nothing ever pokes out underneath
  const rim = (k, z) => { k.el.style.clipPath = z < 0 ? `inset(${z <= SUNK ? 0 : -90}px -90px ${-z}px -90px)` : (k.el.style.clipPath ? 'inset(-90px -90px 0px -90px)' : ''); };
  wks.forEach(k => { k.el.style.transform = stand(k.z); rim(k, k.z); });
  let boxOpen = false, picked = null, hoverK = null, boxS = 1;
  const BOX_TOP=[];
  const boxInfo = document.createElement('div'); boxInfo.className = 'box-info'; boxStage.appendChild(boxInfo);
  boxInfo.innerHTML = `<ol class="bi-list">${WORK.map((w, i) => `<li><button type="button" data-k="${i}" style="--c:${w.c}"><em>${w.name}</em><span>${w.co}</span></button></li>`).join('')}</ol>`;
  { const sh = $('#work .sec-head'); sh.classList.add('bi-head'); boxInfo.prepend(sh); }
  boxInfo.addEventListener('pointerover', e => { const b = e.target.closest('[data-k]'); if (!b || picked || !boxOpen) return; const k = wks[+b.dataset.k]; if (hoverK !== k) { hoverK && hoverK.leave(); k.enter(); } });
  boxInfo.addEventListener('click', e => { const b = e.target.closest('[data-k]'); if (b) pick(wks[+b.dataset.k]); });
  function setCap(k) {
    boxInfo.style.setProperty('--c', k ? k.w.c : 'var(--coral)');
    $$('[data-k]', boxInfo).forEach(b => b.classList.toggle('on', k && +b.dataset.k === k.i));
  }

  function openBox() {
    if (boxOpen) return; boxOpen = true; boxStage.classList.add('opened');
    lid.style.transform = `translate3d(0,0,${BH}px) rotateX(-72deg)`;
    wks.forEach((k, i) => setTimeout(() => { if (picked !== k) { k.z = 0; k.el.style.transition = 'transform 1.2s cubic-bezier(.2, .9, .25, 1), clip-path 1.2s cubic-bezier(.2, .9, .25, 1), box-shadow .5s, filter .5s'; k.el.style.transform = stand(0); rim(k, 0); setTimeout(() => { if (k.z === 0) k.el.style.clipPath = ''; }, 1300); } }, 800 + i * 130));
  }
  wks.forEach(k => {
    const enter = () => { if (picked || !boxOpen) return; hoverK = k; k.el.classList.add('hover'); k.el.style.transform = stand(70); rim(k, 70); setCap(k); };
    const leave = () => { if (picked) return; k.el.classList.remove('hover'); k.el.style.transform = stand(k.z); rim(k, k.z); if (hoverK === k) { hoverK = null; setCap(null); } };
    k.enter = enter; k.leave = leave;
    k.el.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse' && hoverK !== k) { hoverK && hoverK.leave(); enter(); } });
    k.el.addEventListener('focus', enter); k.el.addEventListener('blur', leave);
    k.el.addEventListener('click', () => pick(k));
  });
  // hover stays on a card until the pointer reaches another card or leaves the box, so a lifted card never flickers
  boxStage.addEventListener('pointermove', e => { if (e.pointerType !== 'mouse' || !hoverK || picked) return; if (!e.target.closest('#box3, .box-info')) hoverK.leave(); });
  boxStage.addEventListener('pointerleave', () => { if (hoverK && !picked) hoverK.leave(); });
  // the box is measured once (lid open, cards lifted), then centred and scaled into the gap between the heading and the project list
  let boxExt = null, boxSW = 0, boxCur = 0, boxPos = '';
  function boxMeasure() {
    const parts = [...box3.children].filter(e => !e.classList.contains('box-shadow')), saved = parts.map(e => [e.style.transition, e.style.transform]);
    const fitT = boxFit.style.transform, b3T = box3.style.transform; boxFit.style.transform = 'none'; box3.style.transform = '';
    parts.forEach(e => { e.style.transition = 'none'; if (e === lid) e.style.transform = `translate3d(0,0,${BH}px) rotateX(-72deg)`; else if (e.classList.contains('wk')) e.style.transform = stand(70); });
    const o = boxFit.getBoundingClientRect(); let l = 1e9, t = 1e9, r = -1e9, b = -1e9;
    parts.forEach(e => { const q = e.getBoundingClientRect(); l = Math.min(l, q.left); t = Math.min(t, q.top); r = Math.max(r, q.right); b = Math.max(b, q.bottom); });
    parts.forEach((e, i) => { e.style.transform = saved[i][1]; });
    void box3.offsetWidth; parts.forEach((e, i) => { e.style.transition = saved[i][0]; });
    boxFit.style.transform = fitT; box3.style.transform = b3T;
    boxExt = { l: l - o.left, t: t - o.top, w: r - l, h: b - t };
  }
  function boxZone() {
    const st = boxStage.getBoundingClientRect(), vis = el => el && el.offsetParent !== null && getComputedStyle(el).display !== 'none';
    const hd = $('.bi-head', boxInfo); let top = (hd ? hd.getBoundingClientRect().bottom - st.top : 0) + (mobile ? 18 : 28);
    const list = $('.bi-list', boxInfo), bot = (vis(list) ? list.getBoundingClientRect().top : st.bottom) - st.top - (mobile ? 10 : 18);
    return { x: 16, y: top, w: st.width - 32, h: Math.max(120, bot - top) };
  }
  // the box spins into view with the scroll, then follows the pointer a little; it settles square whenever a card is picked
  const bRot = { x: VIEW_X, z: VIEW_Z, ok: false }, bPtr = { x: 0, y: 0, tx: 0, ty: 0 };
  boxStage.addEventListener('pointermove', e => { if (e.pointerType !== 'mouse') return; bPtr.tx = e.clientX / vw * 2 - 1; bPtr.ty = e.clientY / vh * 2 - 1; }, { passive: true });
  boxStage.addEventListener('pointerleave', () => { bPtr.tx = 0; bPtr.ty = 0; });
  function boxSpin(dt, q) {
    const settle = picked || reduce, e = 1;
    const pe = 1 - Math.exp(-dt * 3); bPtr.x += (bPtr.tx - bPtr.x) * pe; bPtr.y += (bPtr.ty - bPtr.y) * pe;
    const tilt = settle || !boxOpen ? 0 : 1;
    const tx = VIEW_X - bPtr.y * 2.5 * tilt, tz = VIEW_Z + bPtr.x * 4.5 * tilt;
    const k = !bRot.ok || !dt || reduce ? 1 : 1 - Math.exp(-dt * (picked ? 12 : 6)); bRot.ok = true;
    bRot.x += (tx - bRot.x) * k; bRot.z += (tz - bRot.z) * k;
    const t = `rotateX(${bRot.x.toFixed(2)}deg) rotateZ(${bRot.z.toFixed(2)}deg)`; if (t !== boxSpin.t) { boxSpin.t = t; box3.style.transform = t; }
  }
  function boxScale(dt) { { const r0 = boxTrack.getBoundingClientRect(); boxSpin(dt || 0, clamp((vh - r0.top) / r0.height)); } if (picked) return boxS; if (!boxExt) boxMeasure();
    const z = boxZone(), fit = Math.min(z.w / boxExt.w, z.h / boxExt.h, mobile ? 1.1 : 1.15);
    const r = boxTrack.getBoundingClientRect(), q = clamp((vh - r.top) / (r.height)), want = mobile ? fit : fit * (.5 + .5 * ss(clamp(q / .42)));
    boxCur = !boxCur || !dt || reduce ? want : boxCur + (want - boxCur) * (1 - Math.exp(-dt * 7));
    const x = z.x + z.w / 2 - boxCur * (boxExt.l + boxExt.w / 2), y = z.y + z.h / 2 - boxCur * (boxExt.t + boxExt.h / 2), pos = x.toFixed(1) + ',' + y.toFixed(1);
    if (pos !== boxPos) { boxPos = pos; boxFit.style.left = x.toFixed(1) + 'px'; boxFit.style.top = y.toFixed(1) + 'px'; }
    if (Math.abs(boxCur - boxSW) > .0004) { boxSW = boxCur; boxS = boxCur; boxFit.style.transform = `scale(${boxCur.toFixed(4)})`; } return boxS; }
  const pickEase = 'cubic-bezier(.55, 0, .15, 1)';
  function pick(k) {
    if (picked || !boxOpen) return;
    picked = k; k.el.classList.remove('hover');
    const from = k.el.style.transform, to = faced(k);
    k.el.style.transition = 'none';
    const a = k.el.animate([{ transform: from }, { transform: stand(CH + 60), offset: .38 }, { transform: to }], { duration: reduce ? 1 : 1500, easing: pickEase, fill: 'forwards' });
    a.onfinish = () => { k.el.style.transform = to; a.cancel(); setTimeout(() => expand(k), 160); };
  }

  function expand(k) {
    const w=k.w;
    csEl.style.setProperty('--t',w.t); csEl.style.setProperty('--c',w.c);
    csEl.innerHTML=`<div class="sr-case-head"><button id="csClose" class="pill">← Back to work</button><span>${w.co}</span></div><article class="sr-case"><p class="kicker">Selected project</p><h1>${w.name}</h1><p class="sr-case-lead">${w.pitch}</p><hr><h2>The design focus</h2><p>${w.focus}</p><p class="sr-case-note">Selected project overview. Detailed case-study materials can be added when available.</p><a class="pill" href="mailto:sanmathi972@gmail.com?subject=${encodeURIComponent(w.name)}">Let's talk about this project ↗</a><div class="sr-case-more">${WORK.map((p,i)=>`<button class="pill" data-project="${i}">${p.name} ↗</button>`).join('')}</div></article>`;
    csEl.classList.add('open','ready');csEl.style.clipPath='inset(0 round 0px)';csEl.setAttribute('role','dialog');csEl.setAttribute('aria-modal','true');csEl.setAttribute('aria-label',w.name);
    document.documentElement.style.overflow='hidden';lenis&&lenis.stop();
    setTimeout(()=>$('#csClose').focus(),50);
  }
  let csFrom=null;
  function openCaseAt(id,from){const k=wks.find(k=>k.w.id===id);if(!k)return;csFrom=from; picked=k;expand(k)}
  function closeCase(){if(!picked)return;const k=picked;csEl.classList.remove('open','ready');csEl.innerHTML='';document.documentElement.style.overflow='';lenis&&lenis.start();wks.forEach(x=>{x.el.getAnimations().forEach(a=>a.cancel());x.el.style.transform=stand(0);x.el.style.opacity=1;x.el.classList.remove('hover');rim(x,0)});hoverK=null;picked=null;setCap(null);(csFrom||k.el).focus({preventScroll:true});csFrom=null;}
  csEl.addEventListener('click',e=>{if(e.target.closest('#csClose'))closeCase();const b=e.target.closest('[data-project]');if(b){picked=wks[+b.dataset.project];expand(picked)}});
  addEventListener('keydown',e=>{if(e.key==='Escape')closeCase();if(e.key==='Tab'&&picked){const a=$$('a,button',csEl),f=a[0],l=a[a.length-1];if(e.shiftKey&&document.activeElement===f){e.preventDefault();l.focus()}else if(!e.shiftKey&&document.activeElement===l){e.preventDefault();f.focus()}}});
  document.addEventListener('click',e=>{const b=e.target.closest('.sr-project-link');if(b)openCaseAt(WORK[+b.dataset.project].id,b)});
  function frameWork(dt) {
    boxScale(dt); boxInfo.classList.toggle('in', boxStage.getBoundingClientRect().top < vh * .2);
    if (!boxOpen && boxStage.getBoundingClientRect().top < vh * (mobile ? .6 : .3)) openBox();
  }

  /* =========================================================
     4b · BRAND & WEB
     ========================================================= */
  const SITES = [];
  const brandSec = $('#brand'), brandRow = $('#brandRow'), brandProg = $('#brandProg');
  brandRow.innerHTML = SITES.map(x => `<a class="site" href="${x.href}" target="_blank" rel="noopener" style="--dy:${x.dy}px;--r:${x.r}deg">${x.st}<div class="win"><div class="chrome"><i></i><i></i><i></i><span>${x.url}</span></div><div class="page"><img src="v2/b/${x.img}.webp" alt="${x.name} website home page" loading="lazy"></div></div><div class="cap"><b>${x.name}</b><span>${x.kind} · visit ↗</span></div></a>`).join('');
  let bTop = 0, bRange = 1, bShift = 0;
  let bManual = false;
  function layoutBrand() {
    bManual = true; brandSec.classList.toggle('manual', bManual);
    if (bManual) { brandSec.style.height = ''; brandRow.style.transform = ''; bTop = top(brandSec); bRange = 1; bShift = 0; return; }
    bShift = Math.max(0, brandRow.scrollWidth - vw);
    brandSec.style.height = (vh + bShift * 1.1) + 'px';
    bTop = top(brandSec); bRange = Math.max(1, brandSec.offsetHeight - vh);
  }
  const bcur = { x: 0 };
  const bStep = d => { const c = brandRow.querySelector('.site'); brandRow.scrollBy({ left: d * (c ? c.offsetWidth + 40 : vw * .6), behavior: reduce ? 'auto' : 'smooth' }); };
  $('#bPrev').addEventListener('click', () => bStep(-1)); $('#bNext').addEventListener('click', () => bStep(1));
  const bEnds = () => { $('#bPrev').disabled = brandRow.scrollLeft < 8; $('#bNext').disabled = brandRow.scrollLeft > brandRow.scrollWidth - brandRow.clientWidth - 8; };
  brandRow.addEventListener('scroll', bEnds, { passive: true }); setTimeout(bEnds, 500);
  let bAuto = 0, bStop = false;
  ['pointerdown', 'wheel', 'touchstart'].forEach(ev => brandRow.addEventListener(ev, () => { bStop = true; clearInterval(bAuto); }, { passive: true }));
  [$('#bPrev'), $('#bNext')].forEach(b => b.addEventListener('click', () => { bStop = true; clearInterval(bAuto); }));
  new IntersectionObserver((es, o) => es.forEach(e => { if (!e.isIntersecting || bStop || reduce) return; o.disconnect();
    setTimeout(() => { if (bStop) return; bAuto = setInterval(() => { if (bStop || brandRow.scrollLeft > brandRow.scrollWidth - brandRow.clientWidth - 8) { clearInterval(bAuto); if (!bStop) setTimeout(() => brandRow.scrollTo({ left: 0, behavior: 'smooth' }), 1400); return; } bStep(1); }, 2200); }, 900); }), { threshold: .45 }).observe(brandRow);
  function frameBrand(dt, y) {
    if (bManual) return;
    const q = clamp((y - bTop) / bRange);
    const k = reduce ? 1 : 1 - Math.exp(-dt * 8);
    bcur.x += (-q * bShift - bcur.x) * k;
    brandRow.style.transform = `translate3d(${bcur.x.toFixed(1)}px, 0, 0)`;
    brandProg.style.setProperty('--p', (q * 100).toFixed(1) + '%');
  }

  /* =========================================================
     5 · HOW I WORK
     ========================================================= */
  /* =========================================================
     5 · MY STACK (a gift that opens on scroll)
     ========================================================= */
  const TOOL_ROLE = { Claude: 'Think', Vercel: 'Ship', Antigravity: 'Build', Supabase: 'Build', Figma: 'Design', ProtoPie: 'Prototype', Xcode: 'Build', Notion: 'Plan', 'Apple Music': 'Focus', 'Premiere Pro': 'Edit', 'After Effects': 'Motion', 'Microsoft Teams': 'Collaborate', 'Canva': 'Create', 'ChatGPT': 'Think', 'Vowen': 'Dictate', 'Gmail': 'Connect', 'ElevenLabs': 'Voice' };
  const TOOLS = [{"n":"Figma","bg":"#1E1E1E","how":"Where every screen starts: flows, systems and the messy explorations in between.","icon":"<svg viewBox=\"0 0 24 24\"><path fill=\"#F24E1E\" d=\"M8.5 2H12v6.67H8.5a3.33 3.33 0 0 1 0-6.67z\"/><path fill=\"#FF7262\" d=\"M12 2h3.5a3.33 3.33 0 0 1 0 6.67H12z\"/><path fill=\"#A259FF\" d=\"M8.5 8.67H12v6.66H8.5a3.33 3.33 0 0 1 0-6.66z\"/><circle fill=\"#1ABCFE\" cx=\"15.5\" cy=\"12\" r=\"3.33\"/><path fill=\"#0ACF83\" d=\"M8.5 15.33H12v3.34a3.33 3.33 0 1 1-3.5-3.34z\"/></svg>"},{"n":"Claude","bg":"#D97757","how":"My thinking partner. I use it to pressure-test flows, write UX copy and build faster.","icon":"<svg viewBox=\"0 0 24 24\"><path fill=\"#fff\" d=\"m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z\"/></svg>"},{"n":"ChatGPT","bg":"#0B0B0B","how":"Brainstorming, quick research and rewriting copy. My second brain for first drafts.","icon":"<svg viewBox=\"0 0 24 24\"><path fill=\"#fff\" d=\"M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z\"/></svg>"},{"n":"Figma Make","bg":"#1E1E1E","how":"AI-assisted exploration and prototypes.","icon":"<svg viewBox=\"0 0 24 24\"><path fill=\"#F24E1E\" d=\"M8.5 2H12v6.67H8.5a3.33 3.33 0 0 1 0-6.67z\"/><path fill=\"#FF7262\" d=\"M12 2h3.5a3.33 3.33 0 0 1 0 6.67H12z\"/><path fill=\"#A259FF\" d=\"M8.5 8.67H12v6.66H8.5a3.33 3.33 0 0 1 0-6.66z\"/><circle fill=\"#1ABCFE\" cx=\"15.5\" cy=\"12\" r=\"3.33\"/><path fill=\"#0ACF83\" d=\"M8.5 15.33H12v3.34a3.33 3.33 0 1 1-3.5-3.34z\"/></svg>"},{"n":"UX Research","bg":"#FFFFFF","how":"Understanding user needs, behaviours and pain points.","icon":"<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z\"/><path d=\"M4 19V5\"/></svg>"},{"n":"Design Systems","bg":"#1E1E1E","how":"Reusable patterns, consistent components and clear handoff.","icon":"<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1\"/></svg>"},{"n":"Product Thinking","bg":"#FFFFFF","how":"Connecting user problems with business goals.","icon":"<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 18h6M10 22h4\"/><path d=\"M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z\"/></svg>"},{"n":"HTML / CSS","bg":"#0B0B0B","how":"Understanding responsive interfaces and collaborating with developers.","icon":"<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M3 10h18\"/></svg>"}];
  const stackTrack = $('#stack'); let stTop=0, stRange=1, giftTap=true;
  const archiveTools = $('#atelierTools'), archiveToggle=$('#toolkitToggle');
  TOOLS.forEach((t,i)=>{ const card=document.createElement('article'); card.className='atelier-tool'; card.style.setProperty('--order',i); card.innerHTML=`<span class="atelier-tool-icon" style="background:${t.bg==='‪#FFFFFF'?'#6b45b5':t.bg}">${t.icon}</span><h3>${t.n}</h3><p>${t.how}</p>`; archiveTools.appendChild(card); });
  archiveToggle.addEventListener('click',()=>{ const open=archiveToggle.getAttribute('aria-expanded')!=='true'; archiveToggle.setAttribute('aria-expanded',String(open)); archiveToggle.textContent=open?'Close the toolkit ↙':'Open the toolkit ↗'; archiveTools.hidden=!open; $('#stack').classList.toggle('archive-open',open); });
  function layoutStack(){ stTop=top(stackTrack); stRange=stackTrack.offsetHeight; }
  function frameStack(){}

  const procLine = $('#procLine'), procFg = $('#procFg'), procBg = $('#procBg'); let pNodes = [], pLen = 0, pTop = 0;
  PROC.forEach(([b, s, c], i) => { const n = document.createElement('div'); n.className = 'pnode' + (i % 2 ? ' up' : ''); n.style.setProperty('--c', c); n.innerHTML = `<span class="dot"></span><b>${b}</b><span>${s}</span>`; procLine.appendChild(n); pNodes.push(n); });
  function layoutProc() {
    pTop = top(procLine);
    if (mobile) return;
    const w = procLine.clientWidth, h = procLine.clientHeight, mid = h * .5, amp = h * .16, n = PROC.length;
    const pts = PROC.map((_, i) => [w * (.04 + .92 * i / (n - 1)), mid + (i % 2 ? -amp : amp)]);
    let d = `M 0 ${mid}`; let prev = [0, mid];
    pts.forEach(p => { const mx = (prev[0] + p[0]) / 2; d += ` C ${mx} ${prev[1]}, ${mx} ${p[1]}, ${p[0]} ${p[1]}`; prev = p; });
    d += ` C ${w} ${prev[1]}, ${w} ${mid}, ${w + 20} ${mid}`;
    procBg.setAttribute('d', d); procFg.setAttribute('d', d); $('#procSvg').setAttribute('viewBox', `0 0 ${w} ${h}`);
    pLen = procFg.getTotalLength(); procFg.style.strokeDasharray = pLen; procFg.style.strokeDashoffset = pLen;
    pNodes.forEach((nd, i) => { nd.style.left = pts[i][0] + 'px'; nd.style.top = (pts[i][1] - 13) + 'px'; if (i % 2) nd.style.top = (pts[i][1] + 13) + 'px'; });
  }
  function frameProc(y) {
    const q = clamp((y + vh * .8 - pTop) / (procLine.offsetHeight + vh * .35));
    if (!mobile && pLen) procFg.style.strokeDashoffset = (pLen * (1 - q)).toFixed(1);
    pNodes.forEach((n, i) => n.classList.toggle('in', mobile ? n.getBoundingClientRect().top < vh * .85 : q > (i + .3) / PROC.length));
  }

  /* ---------- highlights that paint as they enter ---------- */
  const lateHl = ['#journeyHl', '#workHl', '#brandHl', '#llHl', '#procHl', ].map(s => $(s)).filter(Boolean);
  const helloRq = $('#helloRq'); helloRq.style.animation = 'none';
  const cloudsFoot = $$('#cloudsFoot img'), cloudsFootEl = $('#cloudsFoot');
  let dockY = 0;
  const dock = $('.bar .nav');
  const navLinks = $$('.bar .nav a[data-go]'), navInd = $('#navInd'); let navOn = null, navTops = [];
  function frameMisc(y) {
    navTops = navLinks.map(a => top($('#' + a.dataset.go)));
    let cur = null; navLinks.forEach((a, k) => { if (a.offsetParent && navTops[k] <= y + vh * .5) cur = a; });
    if (y < vh * .5) cur = navLinks.find(a => a.dataset.go === 'top') || null;
    if (navOn && navOn === cur && navInd.offsetWidth !== navOn.offsetWidth) { navInd.style.width = navOn.offsetWidth + 'px'; navInd.style.transform = `translateX(${navOn.offsetLeft}px)`; }
    if (cur !== navOn) { navOn = cur; navLinks.forEach(a => a.classList.toggle('on', a === cur)); navInd.classList.toggle('on', !!cur); if (cur) { navInd.style.width = cur.offsetWidth + 'px'; navInd.style.transform = `translateX(${cur.offsetLeft}px)`; } }
    const inMap = y > jTop - vh * .4 && y < jTop + jRange + vh * .3, bx = boxTrack.getBoundingClientRect(), pinned = (bx.top < vh * .3 && bx.bottom > vh * .7) || (y > stTop - vh * .2 && y < stTop + stRange) || (y > rvTop - vh * .2 && y < rvTop + rvRange) || (y > bTop - vh * .2 && y < bTop + bRange);
    if (y > dockY + 3 && y > vh * .5) { if (dock.dataset.dn !== '1') dock.dataset.dn = 1; } else if (y < dockY - 3 && dock.dataset.dn) dock.dataset.dn = '';
    if (dock.classList.contains('away')) dock.classList.remove('away'); dockY = y; // the nav always stays on screen
    lateHl.forEach(h => { if (!h.classList.contains('on') && h.getBoundingClientRect().top < vh * .78) h.classList.add('on'); });
    const hr = helloRq.getBoundingClientRect();
    if (hr.top < vh * .8 && !helloRq.dataset.done) { helloRq.dataset.done = 1; helloRq.classList.add('painted'); }
    const fr = cloudsFootEl.getBoundingClientRect(), fq = clamp(1 - fr.top / vh), fk = fq.toFixed(3);
    if (fk !== frameMisc.fk) { frameMisc.fk = fk; cloudsFoot.forEach(im => im.style.transform = `translate3d(0, ${(-(fq) * vh * +im.dataset.sp).toFixed(1)}px, 0)` + (im.dataset.f ? ' scaleX(-1)' : '')); }
  }
  const st = document.createElement('style'); st.textContent = '#helloRq::before{animation:none}#helloRq.painted::before{animation:paint 1s var(--ease) .1s forwards}'; document.head.appendChild(st);

  /* ---------- copy email ---------- */
  $('#copy').addEventListener('click', e => {
    const b = e.currentTarget, text = $('#mailText').textContent;
    const done = () => { b.classList.add('ok'); b.title = 'Copied'; setTimeout(() => { b.classList.remove('ok'); b.title = 'Copy email'; }, 1800); };
    try { navigator.clipboard.writeText(text).then(done, () => selectMail()); } catch (_) { selectMail(); }
  });
  function selectMail() { const r = document.createRange(); r.selectNodeContents($('#mailText')); const s = getSelection(); s.removeAllRanges(); s.addRange(r); try { if(document.execCommand('copy')) { const b=$('#copy'); b.textContent='Copied'; b.classList.add('ok'); setTimeout(()=>{b.textContent='Copy email';b.classList.remove('ok')},1800); s.removeAllRanges(); } else $('#copy').textContent='Press Ctrl/Cmd + C'; } catch (_) { $('#copy').textContent='Press Ctrl/Cmd + C'; } }

  /* ---------- LastLook: a line that reveals itself ---------- */
  const llRevTrack = $('#llRevTrack'), llRevEl = $('#llRev');
  let llTop = 0, llRange = 1, rvTop = 0, rvRange = 1, llLit = -1;
  const llWords = [];
  (function split(node) { [...node.childNodes].forEach(n => { if (n.nodeType === 3) { const f = document.createDocumentFragment(); n.textContent.split(/(\s+)/).forEach(tok => { if (!tok) return; if (/^\s+$/.test(tok)) { f.appendChild(document.createTextNode(tok)); return; } const w = document.createElement('span'); w.className = 'w'; w.textContent = tok; llWords.push(w); f.appendChild(w); }); n.replaceWith(f); } else if (n.classList && n.classList.contains('w')) llWords.push(n); else split(n); }); })(llRevEl);
  const llMarks = $$('.hl', llRevEl).map(el => ({ el, last: llWords.indexOf($$('.w', el).pop()) }));
  function layoutLL() { const sec = $('#lastlook'); llTop = top(sec); llRange = Math.max(1, sec.offsetHeight - vh); rvTop = top(llRevTrack); rvRange = Math.max(1, llRevTrack.offsetHeight - vh); }
  const llRoles = $('#llRoles');
  function frameLL(y) {
    if (!llRoles.classList.contains('in') && llRoles.getBoundingClientRect().top < vh * .82) llRoles.classList.add('in');
    const p = playIn(llRevEl, 'll', 2600), lit = p * llWords.length * 1.05;
    if (Math.abs(lit - llLit) < .05) return; llLit = lit;
    const b1 = DIMW(); llWords.forEach((w, i) => { w.style.opacity = (b1 + (1 - b1) * clamp(lit - i)).toFixed(3); });
    llMarks.forEach(m => m.el.classList.toggle('on', lit >= m.last + 1));
  }

  const lookEyes = $$('#llRev .oo s');
  addEventListener('pointermove', e => {
    const r = llRevEl.getBoundingClientRect(); if (r.bottom < -100 || r.top > vh + 100) return;
    lookEyes.forEach(b => { const p = b.parentElement.getBoundingClientRect(), dx = e.clientX - (p.left + p.width / 2), dy = e.clientY - (p.top + p.height / 2), a = Math.atan2(dy, dx), m = Math.min(1, Math.hypot(dx, dy) / 260) * p.width * .2;
      b.style.setProperty('--ex', (Math.cos(a) * m).toFixed(1) + 'px'); b.style.setProperty('--ey', (Math.sin(a) * m * 1.2).toFixed(1) + 'px'); });
  }, { passive: true });

  /* ---------- sound effects (small clips from ElevenLabs, loaded after the first tap) ---------- */
  (() => {
    const NAMES = { click: 1, hover: .35, close: .6, pin: .6, bell: .55, toggle: .65 }, WAV = { click: 1, hover: 1, close: 1, toggle: 1 };
    let ctx = null, master = null, bufs = {}, loading = false, last = {}, muted = false;
    try { muted = localStorage.getItem('sr-sfx') === '0'; } catch (_) {}
    const btn = $('#sfxBtn');
    const paint = () => { if (!btn) return; btn.setAttribute('aria-pressed', String(!muted)); btn.setAttribute('aria-label', muted ? 'Sound effects off' : 'Sound effects on'); };
    const load = () => { if (loading) return; loading = true;
      try { ctx = new (window.AudioContext || window.webkitAudioContext)(); master = ctx.createGain(); master.gain.value = 1; master.connect(ctx.destination); } catch (_) { return; }
      Object.keys(NAMES).forEach(n => fetch(`v2/sfx/${n}.${WAV[n] ? 'wav' : 'mp3'}`).then(r => r.arrayBuffer()).then(b => new Promise((ok, no) => ctx.decodeAudioData(b, ok, no))).then(buf => { bufs[n] = buf; }).catch(() => {})); };
    const play = (n, opts = {}) => { if (muted || document.hidden || !ctx || !bufs[n]) return; const now = performance.now(), gap = n === 'hover' ? 130 : 45; if (last[n] && now - last[n] < gap) return; last[n] = now;
      if (ctx.state === 'suspended') ctx.resume();
      const src = ctx.createBufferSource(), g = ctx.createGain(); src.buffer = bufs[n]; src.playbackRate.value = n === 'click' || n === 'hover' ? .97 + Math.random() * .06 : 1; g.gain.value = (NAMES[n] || .5) * (opts.v || 1);
      src.connect(g); g.connect(master); src.start(); };
    window.__sfx = play;
    const unlock = () => { load(); if (ctx && ctx.state === 'suspended') ctx.resume(); };
    addEventListener('pointerdown', unlock, { capture: true, once: false, passive: true }); addEventListener('keydown', unlock, { capture: true, passive: true });
    if (btn) btn.addEventListener('click', e => { e.stopPropagation(); muted = !muted; try { localStorage.setItem('sr-sfx', muted ? '0' : '1'); } catch (_) {} paint(); if (!muted) { unlock(); setTimeout(() => play('click'), 60); } });
    paint();
    const CLOSE = '.cs-close, .nw-x, .nw-rd-x, .wop-x, .nw-all-x, #s-x, .sheet .x, .bk-x';
    const TAP = 'a, button, summary, [role="button"], label[for]';
    document.addEventListener('click', e => { const t = e.target; if (!t.closest || t.closest('#sfxBtn, [data-nosound]')) return;
      if (t.closest(CLOSE)) play('close'); else if (t.closest('.theme-btn')) play('toggle'); else if (t.closest(TAP)) play('click'); }, true);
    // hovering the portfolio: map pins and the cards in the box
    let lastEl = null;
    document.addEventListener('pointerover', e => { if (e.pointerType !== 'mouse') return; const el = e.target.closest && e.target.closest('.pin:not(.ph-pin), .wk'); if (el && el !== lastEl) play('hover'); lastEl = el || null; }, true);
  })();

  /* ---------- custom cursor (mouse only) ---------- */
  (() => {
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const root = document.documentElement, still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ball = document.createElement('div'); ball.className = 'cc-ball off'; ball.setAttribute('aria-hidden', 'true'); ball.appendChild(document.createElement('i')); const word = document.createElement('b'); ball.appendChild(word); document.body.appendChild(ball);
    const CLICK = 'a, button, summary, select, label, [role="button"], [data-read], [data-open], [data-case], .pin, .hot, .wk';
    const TEXT = 'input, textarea, select, [contenteditable="true"], iframe';
    // a short word on the few big targets where it isn't obvious what a click does (checked once per element, never while moving)
    const WORDS = [['.cs-close, .nw-x, .nw-rd-x, .wop-x, .nw-all-x, #s-x, .sheet .x, .bk-x', 'Close'], ['#jcNext', 'Next'], ['#jcPrev', 'Prev'], ['.nw-card[data-read]', 'Read'], ['.nw-ghost, #nwOpen', 'Write'], ['.pin, .ph-pin', 'Open'], ['[data-case], .wk, .jc-more, #nwView', 'View'], ['.sticky', 'Drag'], ['.theme-btn', 'Theme'], ['a[data-book]', 'Book']];
    let x = 0, y = 0, rx = 0, ry = 0, on = false, raf = 0;
    const loop = () => { rx += (x - rx) * (still ? 1 : .28); ry += (y - ry) * (still ? 1 : .28);
      ball.style.transform = `translate3d(${rx}px, ${ry}px, 0)`; raf = Math.abs(x - rx) + Math.abs(y - ry) > .2 ? requestAnimationFrame(loop) : 0; };
    const show = v => ball.classList.toggle('off', !v);
    addEventListener('pointermove', e => { if (e.pointerType !== 'mouse') return; x = e.clientX; y = e.clientY;
      if (!on) { on = true; rx = x; ry = y; root.classList.add('cc'); show(true); } if (!raf) raf = requestAnimationFrame(loop); }, { passive: true });
    document.addEventListener('pointerover', e => { if (!on || e.pointerType !== 'mouse') return; const t = e.target;
      if (t.closest && t.closest(TEXT)) { show(false); return; } show(true); let hit = t.closest && WORDS.find(([q]) => t.closest(q)); let txt = hit ? hit[1] : '';
      if (!hit && t.closest) { const b = t.closest('button, a'); if (b) { const lab = (b.getAttribute('aria-label') || b.textContent || '').trim(); if (/^(next|continue)/i.test(lab)) txt = 'Next'; else if (/^(prev|back|previous)/i.test(lab)) txt = 'Prev'; } if (txt) hit = true; }
      word.textContent = txt; ball.classList.toggle('lbl', !!hit); ball.classList.toggle('link', !hit && !!(t.closest && t.closest(CLICK))); }, true);
    document.addEventListener('pointerdown', e => { if (e.pointerType === 'mouse') ball.classList.add('down'); }, true);
    addEventListener('pointerup', () => ball.classList.remove('down'), true);
    root.addEventListener('mouseleave', () => show(false)); root.addEventListener('mouseenter', () => on && show(true));
  })();

  /* ---------- browsers without text-wrap: pretty: glue the last two words of each line of copy ---------- */
  if (!(window.CSS && CSS.supports && CSS.supports('text-wrap', 'pretty'))) {
    const glue = root => root.querySelectorAll('p, li, figcaption, blockquote, small, h1, h2, h3, h4, h5').forEach(el => {
      const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT); let last = null; for (let n; (n = w.nextNode());) if (n.textContent.trim()) last = n;
      if (last && /\S \S+\s*$/.test(last.textContent)) last.textContent = last.textContent.replace(/ (\S+\s*)$/, '\u00A0$1'); });
    glue(document); new MutationObserver(ms => ms.forEach(m => m.addedNodes.forEach(n => n.nodeType === 1 && glue(n)))).observe(document.body, { childList: true, subtree: true });
  }

  /* ---------- birds around the heading: a loose flock that wanders, flaps and glides ---------- */
  (() => {
    const box = $('#skyBirds'), copy = $('#heroCopy'); if (!box || reduce) return;
    const B = Array.from({ length: mobile ? 1 : 2 }, (_, i) => {
      const el = document.createElement('div'); el.className = 'sb'; const sz = (mobile ? 18 : 22) + Math.random() * 14; el.style.width = sz + 'px'; el.style.setProperty('--fl', (.32 + Math.random() * .26).toFixed(2) + 's');
      el.innerHTML = '<svg viewBox="0 0 24 12"><path class="w" d="M1 7Q6 1 12 7Q18 1 23 7"/></svg>'; box.appendChild(el);
      return { el, x: Math.random() * vw * .6, y: vh * (.05 + Math.random() * .3), a: Math.random() * Math.PI * 2, v: 34 + Math.random() * 26, t: Math.random() * 10, g: 0 };
    });
    let last = performance.now();
    (function fly(now) {
      const dt = Math.min(.05, (now - last) / 1000); last = now;
      if (Y() < vh && !box.parentElement.classList.contains('still')) {
        const r = copy.getBoundingClientRect(), L = Math.max(0, r.left - 60), R = Math.min(vw, r.right + vw * .12), T = Math.max(20, r.top - vh * .14), Bo = Math.min(vh * .62, r.bottom + vh * .06);
        const cx = B.reduce((s, b) => s + b.x, 0) / B.length, cy = B.reduce((s, b) => s + b.y, 0) / B.length;
        B.forEach(b => {
          b.t += dt; let tx = Math.cos(b.a), ty = Math.sin(b.a);
          b.a += (Math.sin(b.t * .7 + b.v) * .9 + Math.sin(b.t * 1.9) * .4) * dt;
          const want = (dx, dy) => { const da = Math.atan2(dy, dx) - b.a; b.a += Math.atan2(Math.sin(da), Math.cos(da)) * dt * 1.4; };
          if (b.x < L || b.x > R || b.y < T || b.y > Bo) want((L + R) / 2 - b.x, (T + Bo) / 2 - b.y);
          else if (Math.hypot(cx - b.x, cy - b.y) > 90) want(cx - b.x, cy - b.y);
          if (b.g > 0) b.g -= dt; else if (Math.random() < dt * .4) b.g = 1.6 + Math.random() * 2;
          const sp = b.v * (b.g > 0 ? .85 : 1); b.x += Math.cos(b.a) * sp * dt; b.y += Math.sin(b.a) * sp * dt * .55;
          b.el.classList.toggle('glide', b.g > 0);
          const flip = Math.cos(b.a) < 0 ? -1 : 1, tilt = Math.sin(b.a) * 14 * flip;
          b.el.style.transform = `translate3d(${b.x.toFixed(1)}px, ${b.y.toFixed(1)}px, 0) scaleX(${flip}) rotate(${tilt.toFixed(1)}deg)`;
        });
      }
      requestAnimationFrame(fly);
    })(last);
  })();

  /* ---------- keycaps: they work on your keyboard too ---------- */
  const keysMat = $('#keysMat');
  addEventListener('keydown', e => {
    if (e.metaKey || e.ctrlKey || e.altKey || /input|textarea/i.test(document.activeElement.tagName)) return;
    const r = keysMat.getBoundingClientRect(); if (r.bottom < 0 || r.top > vh) return;
    const k = $(`.key[data-k="${e.key.toLowerCase()}"]`, keysMat); if (!k) return;
    k.classList.add('down'); setTimeout(() => { k.classList.remove('down'); k.target ? window.open(k.href, '_blank', 'noopener') : (location.href = k.href); }, 170);
  });

  /* ---------- nav ---------- */
  $$('[data-go]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); unfocus(); const id = a.dataset.go; goTo(id === 'top' ? 0 : id === 'work' ? top($('#boxTrack')) : top($('#' + id)) + (id === 'journey' ? 4 : 0)); }));

  /* ---------- loop ---------- */
  function layout() {
    vw = innerWidth; vh = innerHeight; mobile = vw < 860;
    navTops = []; navOn = undefined;
    layoutValley(); layoutStory(); layoutJourney(); layoutBrand(); layoutStack(); layoutLL(); layoutProc(); boxScale();
  }
  let last = performance.now();
  // fold a finished scene down to one screen, keeping what's on screen exactly where it is
  function fold(k, el, ref, extra) {
    if (DONE[k] || el.getBoundingClientRect().bottom > vh + 2) return;
    const y = Y(), before = top(ref);
    el.style.height = '100vh'; el.style.height = '100svh'; if (extra) extra();
    DONE[k] = 1; const delta = before - top(ref);
    if (lenis) lenis.scrollTo(y - delta, { immediate: true, force: true }); else scrollTo(0, y - delta);
    layout();
  }
  function frame(t) {
    const dt = Math.min(.05, (t - last) / 1000); last = t;
    if (lenis) lenis.raf(t);
    let y = Y();
    fold('v', valley, $('#journey'), () => { story.style.marginTop = '0px'; });
    fold('s', story, $('#journey'));
    if (!jCar) fold('j', jTrack, $('#work'));
    if (boxOpen) fold('box', boxTrack, $('#brand'));
    if (!giftTap) fold('st', stackTrack, $('#process'));
    fold('ll', llRevTrack, llRoles);
    y = Y();
    if (y < vTop + vRange + vh) frameValley(dt, DONE.v ? 0 : y);
    if (y > sTop - vh && y < sTop + sRange + vh) frameStory(DONE.s ? 1e9 : held('s', y, sTop - vh));
    if (y > jTop - vh && y < jTop + jRange + vh) frameJourney(dt, y);
    if (y > jTop + jRange - vh) frameWork(dt);
    if (y > bTop - vh && y < bTop + bRange + vh) frameBrand(dt, held('b', y, bTop - vh));
    if (y > stTop - vh && y < stTop + Math.max(stRange, vh) + vh) frameStack(DONE.st ? 1e9 : held('st', y, stTop - vh));
    if (y > llTop - vh && y < llTop + llRange + vh) frameLL(DONE.ll ? 1e9 : held('ll', y, llTop - vh));
    if (y > pTop - vh * 1.2) frameProc(held('p', y, pTop - vh * 1.2));
    frameMisc(y);
    requestAnimationFrame(frame);
  }
  let lt = 0;
  const ro = new ResizeObserver(() => { cancelAnimationFrame(lt); lt = requestAnimationFrame(layout); });
  ro.observe(document.body);
  addEventListener('load', layout);
  document.fonts && document.fonts.ready.then(layout);
  layout(); requestAnimationFrame(frame);
})();

(()=>{
 const RESUME_URL=''; // Set to './resume.pdf' after adding your PDF to this folder.
 document.querySelectorAll('[data-resume]').forEach(a=>a.addEventListener('click',e=>{if(RESUME_URL){a.href=RESUME_URL;return}e.preventDefault();const d=document.getElementById('resumeNotice');d.showModal()}));
 document.getElementById('resumeNotice').addEventListener('click',e=>{if(e.target.tagName==='DIALOG')e.target.close()});

})();

/* dark mode: remembered per viewer, revealed as a soft circle of night spreading from the switch */
(() => {
  const root = document.documentElement, btn = document.getElementById('themeBtn');
  const label = () => btn.setAttribute('aria-label', root.dataset.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  const set = t => { root.dataset.theme = t; label(); try { localStorage.setItem('sr-theme', t); } catch (_) {} dispatchEvent(new Event('themechange')); };
  label();
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  btn.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    const r = btn.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2, R = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    if (reduce) { set(next); return; }
    if (!document.startViewTransition) { root.classList.add('theme-fade'); set(next); setTimeout(() => root.classList.remove('theme-fade'), 1000); return; }
    const vt = document.startViewTransition(() => set(next));
    vt.ready.then(() => root.animate({ clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${R}px at ${x}px ${y}px)`] }, { duration: 1500, easing: 'cubic-bezier(.65, 0, .35, 1)', pseudoElement: '::view-transition-new(root)' }));
  });
})();
