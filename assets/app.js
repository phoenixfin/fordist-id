(function () {
  var D = window.FORDIST || {};
  var ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return ESC[c]; }); };
  var safeUrl = function (u) { return /^(https?:\/\/|assets\/|\/)/.test(u || "") ? u : ""; };
  var palette = ["#234577", "#a98900", "#8a4b2f", "#3d5a4c", "#5b3f73"];
  var linkAttrs = function (url) { return url ? ' href="' + esc(url) + '" target="_blank" rel="noopener"' : ""; };

  document.getElementById("books").innerHTML = (D.books || []).map(function (b, i) {
    var url = safeUrl(b.link), tag = url ? "a" : "div";
    var cover = safeUrl(b.cover)
      ? '<div class="cover"><img src="' + esc(b.cover) + '" alt="Sampul ' + esc(b.title) + '" loading="lazy"></div>'
      : '<div class="cover auto" style="background:' + palette[i % palette.length] + '"><span>ForDIST</span><strong>' + esc(b.title) + "</strong></div>";
    var meta = [b.year, b.authors].filter(Boolean).map(esc).join(" · ");
    return "<" + tag + ' class="book"' + linkAttrs(url) + ">" + cover + '<div class="meta">' + meta + "</div><h3>" +
      esc(b.title) + "</h3><p>" + esc(b.desc) + "</p>" + (url ? '<span class="more">Selengkapnya →</span>' : "") + "</" + tag + ">";
  }).join("");

  document.getElementById("events").innerHTML = (D.events || []).map(function (e) {
    var url = safeUrl(e.link), tag = url ? "a" : "div";
    var photo = safeUrl(e.photo)
      ? '<div class="photo"><img src="' + esc(e.photo) + '" alt="" loading="lazy"></div>'
      : '<div class="photo">Foto kegiatan</div>';
    return "<" + tag + ' class="event"' + linkAttrs(url) + ">" + photo + '<div class="body"><div class="row"><span class="meta">' + esc(e.date) + "</span><span>" +
      esc(e.type || "") + "</span></div><h3>" + esc(e.title) + "</h3><p>" + esc(e.desc) + "</p></div></" + tag + ">";
  }).join("");

  var initials = function (n) {
    var w = n.replace(/^(Ust\.|Dr\.|Prof\.)\s+/i, "").split(/\s+/);
    return ((w[0] || "")[0] || "") + ((w.length > 1 ? w[w.length - 1] : "")[0] || "");
  };
  var teamHtml = function (group) {
    return (D.team || []).filter(function (m) { return m.group === group; }).map(function (m) {
      var pic = safeUrl(m.photo)
        ? '<img src="' + esc(m.photo) + '" alt="Foto ' + esc(m.name) + '" loading="lazy">'
        : esc(initials(m.name).toUpperCase());
      var cls = group === "pembimbing" ? "mentor" : "member";
      return '<div class="' + cls + '"><div class="avatar">' + pic + "</div><div><h3>" + esc(m.name) + "</h3><p>" + esc(m.role) + "</p></div></div>";
    }).join("");
  };
  document.getElementById("stat-books").textContent = (D.books || []).length;
  document.getElementById("stat-people").textContent = (D.team || []).length;
  document.getElementById("pembimbing").innerHTML = teamHtml("pembimbing");
  document.getElementById("anggota").innerHTML = teamHtml("anggota");

  var mailto = "mailto:" + encodeURIComponent(D.email || "").replace("%40", "@") +
    "?subject=" + encodeURIComponent("Ingin bergabung dengan ForDIST") +
    "&body=" + encodeURIComponent("Assalamu'alaikum,\n\nNama:\nDomisili:\nLatar belakang / minat:\n\n");
  document.querySelectorAll("[data-mail]").forEach(function (a) { a.href = mailto; });
  document.querySelectorAll("[data-email-text]").forEach(function (n) { n.textContent = D.email || ""; });
  document.getElementById("y").textContent = new Date().getFullYear();
})();
