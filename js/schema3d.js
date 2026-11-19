// Pages schéma — scène 3D pilotée par le défilement (Three.js, chargé en local).
// Les données viennent du JSON indiqué par l'attribut data-src de #s3d.
import * as THREE from './vendor/three/three.module.min.js';
import { OrbitControls } from './vendor/three/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from './vendor/three/CSS2DRenderer.js';

// Mêmes couleurs que l'ancien schéma 2D et que le reste du portfolio (bleu #1d4ed8 en accent).
const TYPES = {
  'cloud':         { label: 'Internet / WAN',      color: '#2563eb' },
  'router':        { label: 'Routeur / box',       color: '#d97706' },
  'firewall':      { label: 'Pare-feu',            color: '#dc2626' },
  'switch-module': { label: 'Commutateur',         color: '#0891b2' },
  'tower':         { label: "Point d'accès Wi-Fi", color: '#ea580c' },
  'server':        { label: 'Serveur physique',    color: '#059669' },
  'vm':            { label: 'Machine virtuelle',   color: '#7c3aed' },
  'storage':       { label: 'Stockage',            color: '#4f46e5' },
  'dns':           { label: 'Services réseau',     color: '#0d9488' },
  'queue':         { label: 'Base de données',     color: '#db2777' },
  'desktop':       { label: 'Poste client',        color: '#475569' },
  'tablet':        { label: 'Écran tactile',       color: '#0d9488' },
  'phone':         { label: 'Téléphone IP',        color: '#0891b2' },
  'printer':       { label: 'Imprimante',          color: '#64748b' }
};
const DEFAULT_TYPE = { label: 'Équipement', color: '#64748b' };

const PLAT_H = 0.35;          // épaisseur des plateformes
const CABLE_Y = 0.5;          // hauteur des câbles
const BG = 0xf4f5f7;          // fond clair, comme les autres pages
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const root = document.getElementById('s3d');
if (root) init(root);

/* ───────────────────────── Initialisation ───────────────────────── */
async function init(root) {
  const stage = document.getElementById('s3d-stage');
  const mount = document.getElementById('s3d-canvas');
  const loading = document.getElementById('s3d-loading');

  let data;
  try {
    const r = await fetch(root.dataset.src, { cache: 'no-store' });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    data = await r.json();
  } catch (err) {
    console.error('Impossible de charger le schéma :', err);
    loading.textContent = 'Le schéma n’a pas pu être chargé. Réessayez plus tard.';
    return;
  }

  const model = buildModel(data);
  renderStats(model);
  const sections = renderChapters(model);
  renderLegend(model);

  let scene3d = null;
  try {
    scene3d = createScene(mount, model);
  } catch (err) {
    console.error('WebGL indisponible :', err);
    stage.classList.add('is-fallback');
    loading.textContent = 'La 3D n’est pas disponible sur cet appareil : la description reste lisible ci-contre.';
  }
  if (scene3d) loading.classList.add('is-hidden');

  setupScrolly(model, sections, scene3d);
  setupUi(model, scene3d);
}

function buildModel(data) {
  const nodes = (data.nodes || []).map(n => {
    const type = TYPES[n.type] || DEFAULT_TYPE;
    return { ...n, typeInfo: type, color: type.color, neighbors: new Set() };
  });
  const byId = Object.fromEntries(nodes.map(n => [n.id, n]));
  const zones = data.zones || [];
  const zoneById = Object.fromEntries(zones.map(z => [z.id, z]));
  const links = (data.links || []).map(l => {
    const a = byId[l.from], b = byId[l.to];
    if (!a || !b || a === b) return null;
    a.neighbors.add(b); b.neighbors.add(a);
    return { ...l, a, b };
  }).filter(Boolean);
  const chapters = data.chapters || [];
  return { title: data.title, nodes, byId, zones, zoneById, links, chapters };
}

/* ───────────────────────── Contenu HTML ───────────────────────── */
function pad(n) { return String(n).padStart(2, '0'); }

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
}

function renderStats(model) {
  const box = document.getElementById('s3d-stats');
  if (!box) return;
  const vms = model.nodes.filter(n => n.type === 'vm').length;
  const phys = model.nodes.length - vms;
  const items = [
    [model.nodes.length, 'équipements'],
    [phys, 'physiques / réseau'],
    [vms, 'machines virtuelles'],
    [model.zones.length, 'zones']
  ];
  items.forEach(([v, l]) => {
    const d = el('div', 's3d-stat');
    d.appendChild(el('strong', null, pad(v)));
    d.appendChild(el('span', null, l));
    box.appendChild(d);
  });
}

function chipFor(node) {
  const b = el('button', 's3d-chip');
  b.type = 'button';
  b.style.setProperty('--c', node.color);
  b.dataset.node = node.id;
  b.appendChild(el('i'));
  b.appendChild(document.createTextNode(node.label));
  b.appendChild(el('span', null, node.typeInfo.label));
  return b;
}

// Crée les chapitres à droite de la scène ; renvoie la liste des éléments
// qui déclenchent un changement de vue quand ils passent la ligne de lecture.
function renderChapters(model) {
  const box = document.getElementById('s3d-chapters');
  const total = model.chapters.length;
  const sections = [];

  model.chapters.forEach((ch, i) => {
    const art = el('article', 's3d-chapter');
    art.id = 'vue-' + pad(i);
    art.appendChild(el('span', 's3d-num', pad(i) + ' / ' + pad(total - 1)));
    art.appendChild(el('h2', null, ch.title));
    art.appendChild(el('p', null, ch.text));

    const focus = ch.focus === 'all' ? null : ch.focus.map(id => model.byId[id]).filter(Boolean);
    const list = el('div', 's3d-chips');
    if (focus) {
      focus.forEach(n => list.appendChild(chipFor(n)));
    } else {
      model.zones.forEach(z => {
        const s = el('span', 's3d-zone-chip', z.label);
        s.style.setProperty('--c', z.color);
        list.appendChild(s);
      });
    }
    art.appendChild(list);

    if (focus) {
      const facts = el('dl', 's3d-facts');
      const zoneIds = [...new Set(focus.map(n => n.zone))];
      addFact(facts, 'Zone', zoneIds.map(z => (model.zoneById[z] || {}).label).filter(Boolean).join(' · '));
      const linkCount = model.links.filter(l => focus.includes(l.a) || focus.includes(l.b)).length;
      addFact(facts, 'Liaisons', String(linkCount));
      art.appendChild(facts);
    }
    box.appendChild(art);
    sections.push({ el: art, kind: 'chapter', index: i, title: ch.title, focus: focus ? focus.map(n => n.id) : 'all' });
  });

  return sections;
}

function addFact(dl, k, v) {
  if (!v) return;
  const d = el('div');
  d.appendChild(el('dt', null, k));
  d.appendChild(el('dd', null, v));
  dl.appendChild(d);
}

function renderLegend(model) {
  const box = document.getElementById('s3d-legend');
  if (!box) return;
  const seen = new Map();
  model.nodes.forEach(n => seen.set(n.typeInfo.label, (seen.get(n.typeInfo.label) || { t: n.typeInfo, c: 0 })));
  model.nodes.forEach(n => seen.get(n.typeInfo.label).c++);
  seen.forEach(({ t, c }, label) => {
    const s = el('span', 's3d-legend-item');
    const i = el('i'); i.style.background = t.color;
    s.appendChild(i);
    s.appendChild(document.createTextNode(label + (c > 1 ? ' ×' + c : '')));
    box.appendChild(s);
  });
}

/* ───────────────────────── Scène 3D ───────────────────────── */
function createScene(mount, model) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  if (!renderer.getContext()) throw new Error('Pas de contexte WebGL');
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(BG);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  mount.appendChild(renderer.domElement);

  const labelRenderer = new CSS2DRenderer();
  labelRenderer.domElement.className = 's3d-labels';
  mount.appendChild(labelRenderer.domElement);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(BG, 80, 190);
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 400);
  camera.position.set(0, 40, 50);

  scene.add(new THREE.HemisphereLight(0xffffff, 0xc9ced8, 1.5));
  const sun = new THREE.DirectionalLight(0xffffff, 1.7);
  sun.position.set(12, 30, 18);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -35, right: 35, top: 35, bottom: -35, near: 1, far: 90 });
  sun.shadow.bias = -0.0005;
  sun.shadow.radius = 4;
  scene.add(sun);
  const rim = new THREE.DirectionalLight(0xdbe4ff, 0.6);
  rim.position.set(-20, 12, -20);
  scene.add(rim);

  // Sol et grille
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(400, 400),
    new THREE.MeshStandardMaterial({ color: 0xeef0f3, roughness: 1 }));
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);
  const grid = new THREE.GridHelper(200, 100, 0xd3d8e0, 0xe2e5ea);
  grid.position.y = 0.01;
  grid.material.transparent = true;
  grid.material.opacity = 0.9;
  scene.add(grid);

  const glowTex = makeGlowTexture();

  // Centre du monde : on recentre tout sur la boîte englobante des nœuds
  const bb = new THREE.Box2();
  model.nodes.forEach(n => bb.expandByPoint(new THREE.Vector2(n.pos[0], n.pos[1])));
  model.zones.forEach(z => { bb.expandByPoint(new THREE.Vector2(...z.from)); bb.expandByPoint(new THREE.Vector2(...z.to)); });
  const center = bb.getCenter(new THREE.Vector2());
  const world = new THREE.Group();
  world.position.set(-center.x, 0, -center.y);
  scene.add(world);

  /* Plateformes de zones */
  model.zones.forEach(z => {
    const x0 = Math.min(z.from[0], z.to[0]), x1 = Math.max(z.from[0], z.to[0]);
    const z0 = Math.min(z.from[1], z.to[1]), z1 = Math.max(z.from[1], z.to[1]);
    const w = x1 - x0, d = z1 - z0;
    const color = new THREE.Color(z.color);
    const shape = roundedRect(w, d, Math.min(0.9, w / 4, d / 4));
    const geo = new THREE.ExtrudeGeometry(shape, { depth: PLAT_H, bevelEnabled: false, curveSegments: 6 });
    geo.rotateX(-Math.PI / 2);
    const mat = new THREE.MeshStandardMaterial({ color: new THREE.Color(0xffffff).lerp(color, 0.05), roughness: 0.85, metalness: 0 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x0 + w / 2, 0, z0 + d / 2);
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    world.add(mesh);

    const pts = shape.getPoints(10).map(p => new THREE.Vector3(p.x, PLAT_H + 0.01, -p.y));
    const edge = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts),
      new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.9 }));
    edge.position.copy(mesh.position);
    world.add(edge);

    const lab = el('div', 's3d-zone-label', z.label);
    lab.style.setProperty('--c', z.color);
    const obj = new CSS2DObject(lab);
    obj.position.set(x0 + 0.4, PLAT_H + 0.05, z1 - 0.2);
    obj.center.set(0, 1);
    world.add(obj);
    z.edge = edge; z.labelEl = lab;
  });

  /* Équipements */
  const pickTargets = [];
  model.nodes.forEach(n => {
    const g = new THREE.Group();
    g.position.set(n.pos[0], PLAT_H, n.pos[1]);
    const built = buildDevice(n.type, n.color);
    g.add(built.group);
    world.add(g);

    const mats = new Set();
    built.group.traverse(o => {
      if (o.isMesh || o.isLine || o.isLineSegments) {
        if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; }
        const ms = Array.isArray(o.material) ? o.material : [o.material];
        ms.forEach(m => mats.add(m));
      }
    });
    mats.forEach(m => { m.transparent = true; m.userData.baseOpacity = m.opacity; });

    // Zone de clic invisible
    const hit = new THREE.Mesh(new THREE.BoxGeometry(2.6, built.height + 0.6, 2.6),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false, colorWrite: false }));
    hit.position.y = (built.height + 0.6) / 2;
    hit.userData.node = n;
    g.add(hit);
    pickTargets.push(hit);

    const lab = el('button', 's3d-label');
    lab.type = 'button';
    lab.style.setProperty('--c', n.color);
    lab.appendChild(el('i'));
    lab.appendChild(document.createTextNode(n.label));
    lab.dataset.node = n.id;
    const obj = new CSS2DObject(lab);
    obj.position.set(0, built.height + 0.7, 0);
    obj.center.set(0.5, 1);
    g.add(obj);

    // Anneau de sélection
    const ring = new THREE.Mesh(new THREE.RingGeometry(1.55, 1.75, 64),
      new THREE.MeshBasicMaterial({ color: n.color, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide }));
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.03;
    g.add(ring);

    Object.assign(n, {
      group: g, inner: built.group, anim: built.anim, height: built.height, mats: [...mats],
      labelEl: lab, ring, dim: 1, dimTarget: 1, hoverS: 1,
      world: new THREE.Vector3(n.pos[0] - center.x, PLAT_H, n.pos[1] - center.y)
    });
  });

  /* Câbles */
  model.links.forEach(l => {
    const a = new THREE.Vector3(l.a.pos[0], CABLE_Y, l.a.pos[1]);
    const b = new THREE.Vector3(l.b.pos[0], CABLE_Y, l.b.pos[1]);
    const curve = orthoPath(a, b, l);
    const len = curve.getLength();
    const color = new THREE.Color(l.color || '#8b95a7');
    const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, Math.max(24, Math.round(len * 6)), 0.06, 6, false),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.85 }));
    world.add(tube);

    const packets = [];
    const count = len > 9 ? 2 : 1;
    for (let i = 0; i < count; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color, depthWrite: false, transparent: true }));
      s.scale.setScalar(0.7);
      world.add(s);
      packets.push({ sprite: s, t: Math.random(), dir: Math.random() < 0.5 ? 1 : -1 });
    }
    Object.assign(l, { curve, len, tube, packets, dim: 1, dimTarget: 1 });
  });

  /* Contrôles libres */
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enabled = false;
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.maxPolarAngle = Math.PI * 0.47;
  controls.minDistance = 6;
  controls.maxDistance = 120;
  renderer.domElement.style.touchAction = 'pan-y';   // le défilement de la page reste possible hors mode libre

  const api = {
    model, renderer, camera, controls, center,
    free: false, visible: true, selected: null, hovered: null,
    goalPos: new THREE.Vector3(0, 40, 50), goalTarget: new THREE.Vector3(),
    target: new THREE.Vector3(), focusIds: 'all'
  };

  /* Cadrage caméra */
  api.frame = function (ids, opts = {}) {
    const list = ids === 'all' ? model.nodes : ids.map(id => model.byId[id]).filter(Boolean);
    if (!list.length) return;
    const box = new THREE.Box3();
    list.forEach(n => {
      box.expandByPoint(n.world);
      box.expandByPoint(n.world.clone().add(new THREE.Vector3(0, n.height, 0)));
    });
    if (ids === 'all') model.zones.forEach(z => {   // la vue d'ensemble cadre aussi les plateformes
      box.expandByPoint(new THREE.Vector3(z.from[0] - center.x, 0, z.from[1] - center.y));
      box.expandByPoint(new THREE.Vector3(z.to[0] - center.x, 0, z.to[1] - center.y));
    });
    box.expandByScalar(ids === 'all' ? 0.5 : 2.2);
    const c = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const aspect = camera.aspect || 1;
    const vFov = THREE.MathUtils.degToRad(camera.fov);
    const hFov = 2 * Math.atan(Math.tan(vFov / 2) * aspect);
    // Vue d'ensemble plus en plongée : la scène est large, on profite ainsi de la hauteur de l'écran.
    const dir = (ids === 'all' ? new THREE.Vector3(0.1, 1.7, 1.0) : new THREE.Vector3(opts.side != null ? opts.side : 0.32, 1.05, 1.15)).normalize();
    mount.classList.toggle('is-overview', ids === 'all');
    // On part de la sphère englobante (toujours suffisante), puis on rapproche la caméra
    // tant que les 8 coins de la boîte restent dans l'image : cadrage serré sans débordement.
    const radius = Math.max(size.length() / 2, 4);
    const sphereDist = radius / Math.sin(Math.min(vFov, hFov) / 2);
    const probe = camera.clone();
    const corners = [];
    for (let i = 0; i < 8; i++) corners.push(new THREE.Vector3(i & 1 ? box.max.x : box.min.x, i & 2 ? box.max.y : box.min.y, i & 4 ? box.max.z : box.min.z));
    const margin = ids === 'all' ? 0.94 : 0.8;   // marge pour les étiquettes et le HUD
    const fits = d => {
      probe.position.copy(c).addScaledVector(dir, d);
      probe.lookAt(c);
      probe.updateMatrixWorld();
      return corners.every(p => { const q = p.clone().project(probe); return Math.abs(q.x) <= margin && Math.abs(q.y) <= margin && q.z < 1; });
    };
    let lo = sphereDist * 0.3, hi = sphereDist * 1.2;
    for (let i = 0; i < 18; i++) { const mid = (lo + hi) / 2; if (fits(mid)) hi = mid; else lo = mid; }
    const dist = Math.max(hi, opts.min || 12);
    api.goalTarget.copy(c);
    api.goalPos.copy(c).addScaledVector(dir, dist);
    if (opts.instant || reduceMotion) { api.target.copy(api.goalTarget); camera.position.copy(api.goalPos); }
  };

  api.setFocus = function (ids) {
    api.focusIds = ids;
    const set = ids === 'all' ? null : new Set(ids);
    model.nodes.forEach(n => {
      const on = !set || set.has(n.id);
      n.dimTarget = on ? 1 : 0.22;
      n.labelEl.classList.toggle('is-dim', !on);
    });
    model.links.forEach(l => {
      const on = !set || (set.has(l.a.id) && set.has(l.b.id)) || (set.size === 1 && (set.has(l.a.id) || set.has(l.b.id)));
      l.dimTarget = on ? 1 : 0.12;
    });
    model.zones.forEach(z => {
      const on = !set || model.nodes.some(n => n.zone === z.id && set.has(n.id));
      z.labelEl.classList.toggle('is-dim', !on);
      z.edge.material.opacity = on ? 0.9 : 0.25;
    });
  };

  api.select = function (n) {
    api.selected = n;
    model.nodes.forEach(m => m.labelEl.classList.toggle('is-selected', m === n));
  };

  /* Interaction souris / tactile */
  const ray = new THREE.Raycaster();
  const ptr = new THREE.Vector2();
  let downAt = null;
  function pick(ev) {
    const r = renderer.domElement.getBoundingClientRect();
    ptr.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ptr, camera);
    const hit = ray.intersectObjects(pickTargets, false)[0];
    return hit ? hit.object.userData.node : null;
  }
  renderer.domElement.addEventListener('pointermove', ev => {
    if (ev.pointerType !== 'mouse') return;
    const n = pick(ev);
    if (n !== api.hovered) {
      api.hovered = n;
      renderer.domElement.style.cursor = n ? 'pointer' : (api.free ? 'grab' : 'default');
      model.nodes.forEach(m => m.labelEl.classList.toggle('is-hover', m === n));
    }
  });
  renderer.domElement.addEventListener('pointerdown', ev => { downAt = { x: ev.clientX, y: ev.clientY }; });
  renderer.domElement.addEventListener('pointerup', ev => {
    if (!downAt) return;
    const moved = Math.hypot(ev.clientX - downAt.x, ev.clientY - downAt.y) > 6;
    downAt = null;
    if (!moved) api.onPick && api.onPick(pick(ev));
  });

  /* Taille */
  function resize() {
    const w = mount.clientWidth, h = mount.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    renderer.domElement.style.width = w + 'px';
    renderer.domElement.style.height = h + 'px';
    labelRenderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    if (api.lastFrame) api.frame(api.lastFrame.ids, api.lastFrame.opts);
  }
  new ResizeObserver(resize).observe(mount);
  resize();

  new IntersectionObserver(entries => { api.visible = entries[0].isIntersecting; }).observe(mount);

  /* Boucle */
  const clock = new THREE.Clock();
  let time = 0;
  function tick() {
    requestAnimationFrame(tick);
    const dt = Math.min(clock.getDelta(), 0.05);
    if (!api.visible || document.hidden) return;
    time += dt;

    if (api.free) {
      controls.update();
    } else {
      const k = reduceMotion ? 1 : 1 - Math.exp(-dt * 2.6);
      api.target.lerp(api.goalTarget, k);
      const sway = reduceMotion ? 0 : Math.sin(time * 0.18) * 0.05;
      const off = api.goalPos.clone().sub(api.goalTarget).applyAxisAngle(new THREE.Vector3(0, 1, 0), sway);
      camera.position.lerp(api.goalTarget.clone().add(off), k);
      camera.lookAt(api.target);
    }

    model.nodes.forEach(n => {
      n.dim += (n.dimTarget - n.dim) * Math.min(1, dt * 6);
      n.mats.forEach(m => { m.opacity = m.userData.baseOpacity * n.dim; });
      const hs = (api.hovered === n || api.selected === n) ? 1.08 : 1;
      n.hoverS += (hs - n.hoverS) * Math.min(1, dt * 10);
      n.inner.scale.setScalar(n.hoverS);
      if (n.anim && !reduceMotion) n.anim(time, dt);
      const sel = api.selected === n;
      const ringOn = sel ? 0.9 : 0;
      n.ring.material.opacity += (ringOn - n.ring.material.opacity) * Math.min(1, dt * 8);
      n.ring.scale.setScalar(1 + (sel ? Math.sin(time * 3) * 0.04 : 0));
    });

    model.links.forEach(l => {
      l.dim += (l.dimTarget - l.dim) * Math.min(1, dt * 6);
      l.tube.material.opacity = 0.85 * l.dim;
      const speed = 3.2 / l.len;
      l.packets.forEach(p => {
        if (!reduceMotion) p.t = (p.t + dt * speed * p.dir + 1) % 1;
        const pos = l.curve.getPointAt(p.t);
        p.sprite.position.copy(pos);
        p.sprite.material.opacity = 0.9 * l.dim;
      });
    });

    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
  }
  api.frameOnce = (ids, opts) => { api.lastFrame = { ids, opts }; api.frame(ids, opts); };
  api.frameOnce('all', { instant: true });
  tick();
  return api;
}

/* ───────────────────────── Défilement ───────────────────────── */
function setupScrolly(model, sections, api) {
  const counter = document.getElementById('s3d-counter');
  const title = document.getElementById('s3d-title');
  const total = model.chapters.length;
  let current = null;

  function apply(sec) {
    if (sec === current) return;
    current = sec;
    sections.forEach(s => s.el.classList.toggle('is-active', s === sec));
    document.querySelectorAll('.s3d-chapter').forEach(a => a.classList.toggle('is-current', a === sec.el));
    if (counter) counter.textContent = pad(sec.index) + ' / ' + pad(total - 1);
    if (title) title.textContent = sec.title;
    if (!api) return;
    if (api.free) return;
    api.select(null);
    hideInfo();

    api.setFocus(sec.focus);
    api.frameOnce(sec.focus);
  }

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const mobile = window.innerWidth < 900;
      const line = window.innerHeight * (mobile ? 0.78 : 0.55);
      let pick = sections[0];
      for (const s of sections) {
        if (s.el.getBoundingClientRect().top < line) pick = s;
      }
      apply(pick);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
  apply(sections[0]);

  api && (api.reapply = () => { const c = current; current = null; apply(c); });
}

/* ───────────────────────── Interface ───────────────────────── */
let hideInfo = () => {};

function setupUi(model, api) {
  const info = document.getElementById('s3d-info');
  const freeBtn = document.getElementById('s3d-free');
  const resetBtn = document.getElementById('s3d-reset');
  const stage = document.getElementById('s3d-stage');

  function showInfo(n) {
    if (!n) { hideInfo(); return; }
    info.style.setProperty('--c', n.color);
    info.querySelector('.s3d-info-type').textContent = n.typeInfo.label;
    info.querySelector('.s3d-info-name').textContent = n.label;
    info.querySelector('.s3d-info-role').textContent = n.role || '';
    const zone = model.zoneById[n.zone];
    info.querySelector('.s3d-info-zone').textContent = zone ? zone.label : '';
    const list = info.querySelector('.s3d-info-links');
    list.innerHTML = '';
    const nb = [...n.neighbors].sort((a, b) => a.label.localeCompare(b.label));
    info.querySelector('.s3d-info-links-title').textContent =
      nb.length ? 'Relié à ' + nb.length + ' équipement' + (nb.length > 1 ? 's' : '') : 'Aucune liaison';
    nb.forEach(m => list.appendChild(chipFor(m)));
    info.classList.add('is-open');
  }
  hideInfo = () => { info.classList.remove('is-open'); };

  function selectNode(n) {
    if (!api) { showInfo(n); return; }
    api.select(n);
    showInfo(n);
    if (n && !api.free) {
      const ids = [n.id, ...[...n.neighbors].map(m => m.id)];
      api.setFocus(ids);
      api.frameOnce([n.id], { min: 13 });
    }
  }

  document.addEventListener('click', ev => {
    const b = ev.target.closest('[data-node]');
    if (!b) return;
    const n = model.byId[b.dataset.node];
    if (n) selectNode(n);
  });
  info.querySelector('.s3d-info-close').addEventListener('click', () => {
    hideInfo();
    if (api) { api.select(null); api.reapply && api.reapply(); }
  });
  document.addEventListener('keydown', ev => {
    if (ev.key === 'Escape' && info.classList.contains('is-open')) info.querySelector('.s3d-info-close').click();
  });

  if (!api) {
    freeBtn.hidden = true;
    resetBtn.hidden = true;
    return;
  }
  api.onPick = n => {
    if (n) selectNode(n);
    else if (api.selected) info.querySelector('.s3d-info-close').click();
  };

  function setFree(on) {
    api.free = on;
    api.controls.enabled = on;
    stage.classList.toggle('is-free', on);
    freeBtn.setAttribute('aria-pressed', String(on));
    freeBtn.textContent = on ? '✕ Quitter le mode libre' : '✥ Manipuler la 3D';
    api.renderer.domElement.style.cursor = on ? 'grab' : 'default';
    api.renderer.domElement.style.touchAction = on ? 'none' : 'pan-y';
    if (on) {
      api.controls.target.copy(api.target);
      api.setFocus('all');
    } else {
      api.reapply && api.reapply();
    }
  }
  freeBtn.addEventListener('click', () => setFree(!api.free));
  resetBtn.addEventListener('click', () => {
    if (api.free) setFree(false);
    else { api.select(null); hideInfo(); api.reapply && api.reapply(); }
  });
}

/* ───────────────────────── Modèles 3D ───────────────────────── */
function std(color, opts = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.5, metalness: 0.35, ...opts });
}
function glow(color, k = 1.1) {
  return new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: k * 0.5, roughness: 0.4 });
}
function box(w, h, d, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  return m;
}

function buildDevice(type, hex) {
  const color = new THREE.Color(hex);
  const g = new THREE.Group();
  const body = std(0xe6e9ef, { metalness: 0.1, roughness: 0.55 });
  const dark = std(0x2b313c, { metalness: 0.2 });
  const acc = glow(color);
  let height = 2, anim = null;

  switch (type) {
    case 'server': {
      g.add(box(1.8, 2.9, 1.9, body, 0, 1.45, 0));
      for (let i = 0; i < 6; i++) {
        const y = 0.45 + i * 0.42;
        g.add(box(1.5, 0.3, 0.05, dark, 0, y, 0.96));
        g.add(box(0.09, 0.09, 0.04, acc, 0.6, y, 0.99));
        g.add(box(0.5, 0.04, 0.04, dark, -0.3, y, 0.99));
      }
      g.add(box(1.82, 0.05, 0.05, acc, 0, 2.88, 0.96));
      const leds = g.children.filter(c => c.material === acc && c.geometry.parameters.width < 0.1);
      anim = t => leds.forEach((l, i) => { l.visible = Math.sin(t * 5 + i * 1.7) > -0.6; });
      height = 3;
      break;
    }
    case 'vm': {
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.95, 0.12, 40), body);
      base.position.y = 0.06;
      g.add(base);
      const rim = new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.035, 8, 48), acc);
      rim.rotation.x = Math.PI / 2; rim.position.y = 0.12;
      g.add(rim);
      const cube = new THREE.Group();
      const geo = new THREE.BoxGeometry(1.35, 1.35, 1.35);
      cube.add(new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.15, transparent: true, opacity: 0.18, roughness: 0.1, depthWrite: false })));
      cube.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo), new THREE.LineBasicMaterial({ color })));
      const innerCube = box(0.5, 0.5, 0.5, acc);
      cube.add(innerCube);
      cube.position.y = 1.35;
      g.add(cube);
      const off = Math.random() * 6;
      anim = t => {
        cube.position.y = 1.35 + Math.sin(t * 1.4 + off) * 0.12;
        cube.rotation.y = t * 0.35 + off;
        innerCube.rotation.x = t * 0.9;
        innerCube.rotation.z = t * 0.6;
      };
      height = 2.2;
      break;
    }
    case 'firewall': {
      const brick = std(0xc24a3f, { roughness: 0.8, metalness: 0 });
      const rows = 4, cols = 4, bw = 0.62, bh = 0.36, gap = 0.05;
      for (let r = 0; r < rows; r++) {
        const shift = r % 2 ? bw / 2 : 0;
        for (let c = 0; c < cols; c++) {
          let x = -((cols - 1) * (bw + gap)) / 2 + c * (bw + gap) + shift;
          if (x > 1.25) continue;
          g.add(box(bw, bh, 0.9, brick, x, bh / 2 + r * (bh + gap), 0));
        }
      }
      g.add(box(2.7, 0.05, 0.05, acc, 0.15, rows * (bh + gap) - 0.02, 0.47));
      height = 1.8;
      break;
    }
    case 'router': {
      g.add(box(2.2, 0.55, 1.5, body, 0, 0.42, 0));
      for (let i = 0; i < 4; i++) g.add(box(0.12, 0.08, 0.04, acc, -0.6 + i * 0.4, 0.45, 0.77));
      [-0.75, 0.75].forEach(x => {
        const a = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 1.4, 10), std(0x475569));
        a.position.set(x, 1.35, -0.55);
        g.add(a);
        const tip = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 8), acc);
        tip.position.set(x, 2.08, -0.55);
        g.add(tip);
      });
      height = 2.2;
      break;
    }
    case 'switch-module': {
      [0.3, 0.78].forEach(y => {
        g.add(box(3.2, 0.42, 1.5, body, 0, y, 0));
        for (let i = 0; i < 12; i++) {
          const x = -1.35 + i * 0.245;
          g.add(box(0.16, 0.13, 0.04, dark, x, y - 0.03, 0.76));
          g.add(box(0.05, 0.04, 0.03, acc, x, y + 0.12, 0.77));
        }
      });
      const leds = g.children.filter(c => c.material === acc);
      anim = t => leds.forEach((l, i) => { l.visible = Math.sin(t * 9 + i * 2.3) > -0.3; });
      height = 1.1;
      break;
    }
    case 'cloud': {
      const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: color, emissiveIntensity: 0.08, roughness: 0.9 });
      const c = new THREE.Group();
      [[0, 0, 0, 1.05], [1, -0.25, 0, 0.78], [-1, -0.25, 0, 0.82], [0.45, 0.45, 0, 0.75], [-0.45, 0.4, 0.15, 0.72], [0, -0.3, 0.5, 0.75]]
        .forEach(([x, y, z, r]) => { const s = new THREE.Mesh(new THREE.SphereGeometry(r, 24, 16), mat); s.position.set(x, y, z); c.add(s); });
      c.position.y = 2.6;
      g.add(c);
      const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 2.2, 8),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.6 }));
      beam.position.y = 1.1;
      g.add(beam);
      const pad0 = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.8, 0.1, 32), body);
      pad0.position.y = 0.05;
      g.add(pad0);
      anim = t => { c.position.y = 2.6 + Math.sin(t * 0.9) * 0.15; };
      height = 3.8;
      break;
    }
    case 'storage': {
      g.add(box(1.9, 1.7, 1.6, body, 0, 0.85, 0));
      for (let i = 0; i < 4; i++) {
        const x = -0.63 + i * 0.42;
        g.add(box(0.34, 1.3, 0.05, dark, x, 0.8, 0.81));
        g.add(box(0.1, 0.06, 0.03, acc, x, 1.35, 0.84));
      }
      g.add(box(1.92, 0.05, 0.05, acc, 0, 1.68, 0.81));
      height = 1.8;
      break;
    }
    case 'dns': {
      g.add(box(1.6, 0.9, 1.4, body, 0, 0.45, 0));
      g.add(box(1.62, 0.05, 0.05, acc, 0, 0.88, 0.71));
      const globe = new THREE.Mesh(new THREE.SphereGeometry(0.62, 14, 10), new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: 0.85 }));
      globe.position.y = 1.75;
      const core0 = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 12), acc);
      core0.position.y = 1.75;
      g.add(globe, core0);
      anim = t => { globe.rotation.y = t * 0.6; };
      height = 2.5;
      break;
    }
    case 'queue': {
      for (let i = 0; i < 3; i++) {
        const y = 0.28 + i * 0.56;
        const c = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 0.46, 40), body);
        c.position.y = y;
        g.add(c);
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.03, 8, 48), acc);
        ring.rotation.x = Math.PI / 2;
        ring.position.y = y + 0.24;
        g.add(ring);
      }
      height = 1.8;
      break;
    }
    case 'tower': {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.14, 2.4, 12), std(0x334155));
      pole.position.y = 1.2;
      g.add(pole);
      const headM = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.65, 0.18, 32), std(0xe2e8f0, { roughness: 0.3 }));
      headM.position.y = 2.5;
      g.add(headM);
      const led = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.04, 20), acc);
      led.position.y = 2.6;
      g.add(led);
      const waves = [0, 1, 2].map(i => {
        const w = new THREE.Mesh(new THREE.RingGeometry(0.7, 0.78, 48),
          new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.5, side: THREE.DoubleSide, depthWrite: false }));
        w.rotation.x = -Math.PI / 2;
        w.position.y = 2.5;
        w.userData.off = i / 3;
        g.add(w);
        return w;
      });
      anim = t => waves.forEach(w => {
        const k = (t * 0.45 + w.userData.off) % 1;
        w.scale.setScalar(1 + k * 1.6);
        w.material.userData.baseOpacity = 0.6 * (1 - k);
      });
      height = 2.8;
      break;
    }
    case 'desktop': {
      // Écran sur pied et unité centrale
      g.add(box(0.9, 0.06, 0.6, body, -0.3, 0.03, 0));
      g.add(box(0.12, 0.8, 0.12, body, -0.3, 0.45, -0.1));
      g.add(box(2.0, 1.2, 0.1, dark, -0.3, 1.35, 0));
      g.add(box(1.84, 1.04, 0.02, glow(color, 0.6), -0.3, 1.35, 0.06));
      g.add(box(0.6, 1.4, 1.2, body, 1.15, 0.7, -0.1));
      g.add(box(0.06, 0.06, 0.03, acc, 1.15, 1.2, 0.51));
      height = 2;
      break;
    }
    case 'tablet': {
      // Écran tactile incliné sur socle
      g.add(box(1.2, 0.12, 0.9, body, 0, 0.06, 0));
      const panel = new THREE.Group();
      panel.add(box(1.9, 1.2, 0.1, dark));
      panel.add(box(1.72, 1.02, 0.02, glow(color, 0.6), 0, 0, 0.06));
      panel.position.set(0, 0.85, 0);
      panel.rotation.x = -0.35;
      g.add(panel);
      height = 1.6;
      break;
    }
    case 'phone': {
      // Téléphone de bureau : base, écran incliné, combiné
      g.add(box(1.5, 0.3, 1.1, body, 0, 0.15, 0));
      const scr = box(0.75, 0.5, 0.05, glow(color, 0.6), 0.2, 0.5, -0.25);
      scr.rotation.x = -0.6;
      g.add(scr);
      g.add(box(0.32, 0.18, 1.0, dark, -0.5, 0.4, 0));
      for (let i = 0; i < 9; i++) g.add(box(0.1, 0.03, 0.1, dark, 0.05 + (i % 3) * 0.16, 0.31, 0.15 + Math.floor(i / 3) * 0.14));
      height = 0.9;
      break;
    }
    case 'printer': {
      g.add(box(1.9, 0.8, 1.4, body, 0, 0.4, 0));
      g.add(box(1.4, 0.05, 0.5, dark, 0, 0.55, 0.72));
      g.add(box(1.2, 0.02, 0.7, std(0xffffff, { metalness: 0 }), 0, 0.84, -0.2));
      g.add(box(0.12, 0.06, 0.04, acc, 0.7, 0.68, 0.71));
      height = 1.1;
      break;
    }
    default:
      g.add(box(1.6, 1.6, 1.6, body, 0, 0.8, 0));
      g.add(box(1.62, 0.05, 0.05, acc, 0, 1.58, 0.81));
      height = 1.7;
  }
  return { group: g, height, anim };
}

/* ───────────────────────── Utilitaires ───────────────────────── */
function roundedRect(w, h, r) {
  const s = new THREE.Shape();
  const x = -w / 2, y = -h / 2;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r); s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
  return s;
}

// Câble orthogonal (x puis z puis x) aux angles arrondis.
function orthoPath(a, b, l) {
  const pts = [a.clone()];
  const bend = l.bend == null ? 0.5 : l.bend;
  if (l.busX != null) {
    pts.push(new THREE.Vector3(l.busX, a.y, a.z), new THREE.Vector3(l.busX, a.y, b.z), b.clone());
  } else if (l.busZ != null) {
    pts.push(new THREE.Vector3(a.x, a.y, l.busZ), new THREE.Vector3(b.x, a.y, l.busZ), b.clone());
  } else if (Math.abs(a.z - b.z) < 0.01 || Math.abs(a.x - b.x) < 0.01) {
    pts.push(b.clone());
  } else {
    const mx = a.x + (b.x - a.x) * bend;
    pts.push(new THREE.Vector3(mx, a.y, a.z), new THREE.Vector3(mx, a.y, b.z), b.clone());
  }
  for (let i = pts.length - 1; i > 0; i--) if (pts[i].distanceTo(pts[i - 1]) < 0.01) pts.splice(i, 1);
  for (let i = pts.length - 2; i > 0; i--) {
    const d1 = pts[i].clone().sub(pts[i - 1]).normalize(), d2 = pts[i + 1].clone().sub(pts[i]).normalize();
    if (d1.dot(d2) > 0.999) pts.splice(i, 1);   // points alignés
  }
  const path = new THREE.CurvePath();
  let cur = pts[0].clone();
  for (let i = 1; i < pts.length; i++) {
    const p = pts[i];
    if (i === pts.length - 1) { path.add(new THREE.LineCurve3(cur, p.clone())); break; }
    const prev = pts[i - 1], next = pts[i + 1];
    const din = p.clone().sub(prev), dout = next.clone().sub(p);
    const r = Math.min(0.9, din.length() / 2, dout.length() / 2);
    din.normalize(); dout.normalize();
    const p1 = p.clone().addScaledVector(din, -r), p2 = p.clone().addScaledVector(dout, r);
    if (cur.distanceTo(p1) > 1e-3) path.add(new THREE.LineCurve3(cur, p1));
    if (r > 1e-3) path.add(new THREE.QuadraticBezierCurve3(p1, p.clone(), p2));
    cur = p2;
  }
  return path;
}

function makeGlowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const x = c.getContext('2d');
  const g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.25, 'rgba(255,255,255,0.8)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g;
  x.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

