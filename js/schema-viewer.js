// Schema pages — interactive network diagram rendered on a canvas from a
// Fossflow/Isoflow JSON export (path given by the canvas data-src attribute).
(function () {
  'use strict';

  var TYPES = {
    'cloud':         { label: 'Internet / WAN',          color: '#2563eb' },
    'router':        { label: 'Routeur',                 color: '#d97706' },
    'firewall':      { label: 'Pare-feu',                color: '#dc2626' },
    'switch-module': { label: 'Commutateur',             color: '#0891b2' },
    'tower':         { label: "Point d'accès Wi-Fi",     color: '#ea580c' },
    'server':        { label: 'Serveur physique',        color: '#059669' },
    'vm':            { label: 'Machine virtuelle',       color: '#7c3aed' },
    'storage':       { label: 'Stockage',                color: '#4f46e5' },
    'dns':           { label: 'Services réseau',         color: '#0d9488' },
    'queue':         { label: 'Base de données',         color: '#db2777' }
  };
  var DEFAULT_TYPE = { label: 'Équipement', color: '#64748b' };

  var FONT = '"bai-jamjuree-latin-700-normal", "Segoe UI", sans-serif';
  var NODE_R = 34;
  var MIN_LAYOUT_W = 860, MIN_LAYOUT_H = 560;   // below this, the layout is scaled down instead of squeezed
  var PAD_X = 90, PAD_Y = 70;
  var MOBILE_SCALE = 0.7;
  var MIN_SCALE = 0.25, MAX_SCALE = 3;

  var canvas = document.getElementById('schema-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var wrapper = document.getElementById('canvas-wrapper');
  var panel = document.getElementById('info-panel');

  var nodes = [], links = [], icons = {}, colorMap = {};
  var world = { minX: 0, minY: 0, maxX: 1, maxY: 1 };
  var view = { w: 0, h: 0, dpr: 1 };
  var camX = 0, camY = 0, scale = 1;
  var hovered = null, selected = null;

  function typeOf(iconId) { return TYPES[iconId] || DEFAULT_TYPE; }

  function hexToRgba(hex, a) {
    var r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  }

  /* ── Sizing & camera ── */
  function resize() {
    view.dpr = window.devicePixelRatio || 1;
    view.w = wrapper.clientWidth;
    view.h = wrapper.clientHeight;
    canvas.width = Math.round(view.w * view.dpr);
    canvas.height = Math.round(view.h * view.dpr);
    canvas.style.width = view.w + 'px';
    canvas.style.height = view.h + 'px';
    draw();
  }

  // Spread the diagram tiles over a box at least the size of the viewport, and
  // large enough that nodes sharing a column (or a row) never overlap.
  var MIN_GAP_Y = 104, MIN_GAP_X = 150;

  function minPxPerTile(axis, other, gap) {
    var k = 0;
    for (var i = 0; i < nodes.length; i++) {
      for (var j = i + 1; j < nodes.length; j++) {
        var a = nodes[i], b = nodes[j];
        if (Math.abs(a[other] - b[other]) >= 1.5) continue;
        var d = Math.abs(a[axis] - b[axis]);
        if (d > 0) k = Math.max(k, gap / d);
      }
    }
    return k;
  }

  function layout() {
    var spanX = Math.max(1, world.maxX - world.minX), spanY = Math.max(1, world.maxY - world.minY);
    var minW = view.w < 600 ? 640 : MIN_LAYOUT_W;
    var W = Math.max(view.w, minW, spanX * minPxPerTile('tx', 'ty', MIN_GAP_X) + PAD_X * 2);
    var H = Math.max(view.h, MIN_LAYOUT_H, spanY * minPxPerTile('ty', 'tx', MIN_GAP_Y) + PAD_Y * 2 + 30);
    nodes.forEach(function (n) {
      n.x = PAD_X + ((n.tx - world.minX) / spanX) * (W - PAD_X * 2);
      n.y = PAD_Y + ((n.ty - world.minY) / spanY) * (H - PAD_Y * 2 - 30);
    });
    return { w: W, h: H };
  }

  function fit() {
    var box = layout();
    scale = Math.min(view.w / box.w, view.h / box.h);
    camX = (view.w - box.w * scale) / 2;
    camY = (view.h - box.h * scale) / 2;
    // On phones the full overview is too small to read: start at a readable
    // zoom from the beginning of the diagram and let the visitor swipe through it.
    if (scale < MOBILE_SCALE && view.w < 600) {
      scale = MOBILE_SCALE;
      camX = 0;
      camY = (view.h - box.h * scale) / 2;
    }
    draw();
  }

  function zoomAt(sx, sy, factor) {
    var next = Math.min(Math.max(scale * factor, MIN_SCALE), MAX_SCALE);
    var wx = (sx - camX) / scale, wy = (sy - camY) / scale;
    scale = next;
    camX = sx - wx * scale;
    camY = sy - wy * scale;
    draw();
  }

  function toWorld(sx, sy) { return { x: (sx - camX) / scale, y: (sy - camY) / scale }; }

  function hit(sx, sy) {
    var p = toWorld(sx, sy);
    for (var i = nodes.length - 1; i >= 0; i--) {
      var dx = p.x - nodes[i].x, dy = p.y - nodes[i].y;
      if (dx * dx + dy * dy <= (NODE_R + 8) * (NODE_R + 8)) return nodes[i];
    }
    return null;
  }

  /* ── Drawing ── */
  function draw() {
    ctx.setTransform(view.dpr, 0, 0, view.dpr, 0, 0);
    ctx.clearRect(0, 0, view.w, view.h);
    drawDots();
    ctx.save();
    ctx.translate(camX, camY);
    ctx.scale(scale, scale);
    links.forEach(drawLink);
    nodes.forEach(drawNode);
    ctx.restore();
  }

  function drawDots() {
    var step = 24 * scale;
    if (step < 8) step *= 2;
    var ox = ((camX % step) + step) % step, oy = ((camY % step) + step) % step;
    ctx.fillStyle = '#d6dae3';
    for (var x = ox; x < view.w; x += step) {
      for (var y = oy; y < view.h; y += step) ctx.fillRect(x, y, 1.5, 1.5);
    }
  }

  function isActiveLink(l) { return selected && (l.from === selected || l.to === selected); }

  function drawLink(l) {
    var a = l.from, b = l.to;
    var dx = b.x - a.x, dy = b.y - a.y, len = Math.sqrt(dx * dx + dy * dy) || 1;
    var ux = dx / len, uy = dy / len;
    var active = isActiveLink(l);
    ctx.save();
    ctx.globalAlpha = selected && !active ? 0.15 : 1;
    ctx.strokeStyle = hexToRgba(l.color, active ? 1 : 0.7);
    ctx.lineWidth = active ? 3 : 2;
    ctx.lineCap = 'round';
    if (l.dashed) ctx.setLineDash([7, 6]);
    ctx.beginPath();
    ctx.moveTo(a.x + ux * NODE_R, a.y + uy * NODE_R);
    ctx.lineTo(b.x - ux * NODE_R, b.y - uy * NODE_R);
    ctx.stroke();
    if (l.label) {
      var mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
      ctx.setLineDash([]);
      ctx.font = '600 11px ' + FONT;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      var tw = ctx.measureText(l.label).width + 12;
      ctx.fillStyle = '#fff';
      roundRect(mx - tw / 2, my - 10, tw, 20, 10);
      ctx.fill();
      ctx.fillStyle = '#334155';
      ctx.fillText(l.label, mx, my + 1);
    }
    ctx.restore();
  }

  function drawNode(n) {
    var isHover = hovered === n, isSel = selected === n;
    var dim = selected && !isSel && !n.neighbors.has(selected);
    ctx.save();
    ctx.globalAlpha = dim ? 0.3 : 1;

    ctx.shadowColor = isHover || isSel ? hexToRgba(n.color, 0.45) : 'rgba(15, 23, 42, 0.12)';
    ctx.shadowBlur = isHover || isSel ? 22 : 10;
    ctx.shadowOffsetY = isHover || isSel ? 0 : 3;
    ctx.beginPath();
    ctx.arc(n.x, n.y, NODE_R, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.shadowColor = 'transparent';

    ctx.lineWidth = isSel ? 4 : 2.5;
    ctx.strokeStyle = n.color;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(n.x, n.y, NODE_R - 6, 0, Math.PI * 2);
    ctx.fillStyle = hexToRgba(n.color, 0.08);
    ctx.fill();

    if (n.image && n.image.complete && n.image.naturalWidth) {
      ctx.drawImage(n.image, n.x - 21, n.y - 23, 42, 42);
    } else {
      ctx.font = '700 15px ' + FONT;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = n.color;
      ctx.fillText(n.label.slice(0, 2).toUpperCase(), n.x, n.y);
    }

    var fs = 13 / Math.min(1, Math.max(scale, 0.75));
    ctx.font = '700 ' + fs.toFixed(1) + 'px ' + FONT;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    var tw = ctx.measureText(n.label).width + 16;
    var lh = fs + 9;
    var ly = n.y + NODE_R + 6 + lh / 2;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.92)';
    roundRect(n.x - tw / 2, ly - lh / 2, tw, lh, lh / 2);
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = isSel ? n.color : '#e2e8f0';
    ctx.stroke();
    ctx.fillStyle = '#0f172a';
    ctx.fillText(n.label, n.x, ly + 1);
    ctx.restore();
  }

  function roundRect(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  /* ── Info panel & legend ── */
  function select(n) {
    selected = n;
    draw();
    if (!n) { panel.classList.remove('active'); return; }
    panel.style.setProperty('--node-color', n.color);
    var iconEl = document.getElementById('info-icon');
    iconEl.innerHTML = '';
    if (n.image && n.image.src) {
      var img = document.createElement('img');
      img.src = n.image.src;
      img.alt = '';
      iconEl.appendChild(img);
    }
    document.getElementById('info-name').textContent = n.label;
    document.getElementById('info-role').textContent = n.type.label;

    var list = document.getElementById('info-links');
    list.innerHTML = '';
    var neighbors = Array.from(n.neighbors).sort(function (a, b) { return a.label.localeCompare(b.label); });
    document.getElementById('info-links-title').textContent =
      neighbors.length ? 'Relié à ' + neighbors.length + ' équipement' + (neighbors.length > 1 ? 's' : '') : 'Aucune liaison';
    neighbors.forEach(function (m) {
      var li = document.createElement('li');
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.style.setProperty('--node-color', m.color);
      btn.textContent = m.label;
      var role = document.createElement('span');
      role.textContent = m.type.label;
      btn.appendChild(role);
      btn.addEventListener('click', function () { select(m); });
      li.appendChild(btn);
      list.appendChild(li);
    });
    panel.classList.add('active');
  }

  function buildLegend() {
    var legend = document.getElementById('schema-legend');
    if (!legend) return;
    legend.innerHTML = '';
    var seen = {};
    nodes.forEach(function (n) {
      if (seen[n.type.label]) { seen[n.type.label].count++; return; }
      seen[n.type.label] = { type: n.type, count: 1 };
    });
    Object.keys(seen).forEach(function (k) {
      var item = document.createElement('span');
      item.className = 'legend-item';
      var dot = document.createElement('i');
      dot.style.background = seen[k].type.color;
      item.appendChild(dot);
      item.appendChild(document.createTextNode(k + (seen[k].count > 1 ? ' ×' + seen[k].count : '')));
      legend.appendChild(item);
    });
  }

  /* ── Pointer interaction (mouse, touch, pinch) ── */
  var pointers = {}, dragStart = null, moved = false, pinchDist = 0;

  function localXY(e) {
    var r = canvas.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }

  canvas.addEventListener('pointerdown', function (e) {
    canvas.setPointerCapture(e.pointerId);
    pointers[e.pointerId] = localXY(e);
    var ids = Object.keys(pointers);
    if (ids.length === 1) { dragStart = pointers[e.pointerId]; moved = false; }
    if (ids.length === 2) {
      var a = pointers[ids[0]], b = pointers[ids[1]];
      pinchDist = Math.hypot(a.x - b.x, a.y - b.y);
      moved = true;
    }
  });

  canvas.addEventListener('pointermove', function (e) {
    var p = localXY(e);
    var prev = pointers[e.pointerId];
    if (!prev) {
      var h = hit(p.x, p.y);
      if (h !== hovered) { hovered = h; canvas.style.cursor = h ? 'pointer' : 'grab'; draw(); }
      return;
    }
    pointers[e.pointerId] = p;
    var ids = Object.keys(pointers);
    if (ids.length === 2) {
      var a = pointers[ids[0]], b = pointers[ids[1]];
      var d = Math.hypot(a.x - b.x, a.y - b.y);
      if (pinchDist) zoomAt((a.x + b.x) / 2, (a.y + b.y) / 2, d / pinchDist);
      pinchDist = d;
      return;
    }
    if (dragStart && (Math.abs(p.x - dragStart.x) > 3 || Math.abs(p.y - dragStart.y) > 3)) moved = true;
    if (moved) {
      camX += p.x - prev.x;
      camY += p.y - prev.y;
      canvas.style.cursor = 'grabbing';
      draw();
    }
  });

  function endPointer(e) {
    if (!pointers[e.pointerId]) return;
    var p = localXY(e);
    delete pointers[e.pointerId];
    if (Object.keys(pointers).length) return;
    canvas.style.cursor = hovered ? 'pointer' : 'grab';
    if (!moved && e.type === 'pointerup') select(hit(p.x, p.y));
    dragStart = null;
    pinchDist = 0;
  }
  canvas.addEventListener('pointerup', endPointer);
  canvas.addEventListener('pointercancel', endPointer);
  canvas.addEventListener('pointerleave', function () {
    if (hovered && !Object.keys(pointers).length) { hovered = null; draw(); }
  });

  canvas.addEventListener('wheel', function (e) {
    e.preventDefault();
    var p = localXY(e);
    zoomAt(p.x, p.y, e.deltaY > 0 ? 0.9 : 1.1);
  }, { passive: false });

  document.getElementById('btn-zoom-in').addEventListener('click', function () { zoomAt(view.w / 2, view.h / 2, 1.25); });
  document.getElementById('btn-zoom-out').addEventListener('click', function () { zoomAt(view.w / 2, view.h / 2, 0.8); });
  document.getElementById('btn-reset').addEventListener('click', fit);
  document.getElementById('info-close').addEventListener('click', function () { select(null); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') select(null); });

  /* ── Data ── */
  function mapDiagram(diagram) {
    var v = (diagram.views && diagram.views[0]) || { items: [], connectors: [] };
    var byId = {};
    (diagram.colors || []).forEach(function (c) { if (c && c.id) colorMap[c.id] = c.value; });
    (diagram.icons || []).forEach(function (ic) {
      if (!ic || !ic.id || !ic.url) return;
      var img = new Image();
      img.onload = draw;
      img.src = ic.url;
      icons[ic.id] = img;
    });
    (diagram.items || []).forEach(function (it) { byId[it.id] = it; });

    var nodeById = {};
    nodes = (v.items || []).map(function (placed) {
      var src = byId[placed.id] || { id: placed.id, name: placed.id };
      var type = typeOf(src.icon);
      var n = {
        id: src.id,
        label: src.name || 'Sans nom',
        type: type,
        color: type.color,
        image: icons[src.icon] || null,
        tx: (placed.tile && placed.tile.x) || 0,
        ty: (placed.tile && placed.tile.y) || 0,
        x: 0,
        y: 0,
        neighbors: new Set()
      };
      nodeById[n.id] = n;
      return n;
    });

    links = (v.connectors || []).map(function (c) {
      var anchors = (c.anchors || []).filter(function (a) { return a && a.ref && a.ref.item; });
      if (anchors.length < 2) return null;
      var from = nodeById[anchors[0].ref.item], to = nodeById[anchors[anchors.length - 1].ref.item];
      if (!from || !to || from === to) return null;
      from.neighbors.add(to);
      to.neighbors.add(from);
      var color = /^#[0-9a-f]{6}$/i.test(c.customColor || '') ? c.customColor : (colorMap[c.color] || '#94a3b8');
      if (color === '#000000') color = '#475569';
      return { from: from, to: to, color: color, dashed: c.style === 'DASHED' || c.style === 'DOTTED', label: c.description || '' };
    }).filter(Boolean);

    if (nodes.length) {
      world = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };
      nodes.forEach(function (n) {
        world.minX = Math.min(world.minX, n.tx); world.maxX = Math.max(world.maxX, n.tx);
        world.minY = Math.min(world.minY, n.ty); world.maxY = Math.max(world.maxY, n.ty);
      });
    }
  }

  function showError() {
    var msg = document.createElement('p');
    msg.className = 'schema-error';
    msg.textContent = 'Le schéma n’a pas pu être chargé. Réessayez plus tard.';
    wrapper.appendChild(msg);
  }

  window.addEventListener('resize', function () { resize(); fit(); });
  resize();

  fetch(canvas.getAttribute('data-src'), { cache: 'no-store' })
    .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
    .then(function (diagram) {
      mapDiagram(diagram);
      if (!nodes.length) throw new Error('Diagramme vide');
      buildLegend();
      fit();
    })
    .catch(function (err) {
      console.error('Impossible de charger le schéma :', err);
      showError();
    });
})();
