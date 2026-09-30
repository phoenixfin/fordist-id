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
    return "<" + tag + ' class="book"' + linkAttrs(url) + ">" + cover + "<h3>" + esc(b.title) + '</h3><div class="meta">' +
      esc(b.authors) + (b.year ? " · " + esc(b.year) : "") + "</div><p>" + esc(b.desc) + "</p></" + tag + ">";
  }).join("");

  document.getElementById("events").innerHTML = (D.events || []).map(function (e) {
    var url = safeUrl(e.link), tag = url ? "a" : "div";
    var photo = safeUrl(e.photo)
      ? '<div class="photo"><img src="' + esc(e.photo) + '" alt="" loading="lazy"></div>'
      : '<div class="photo">Foto kegiatan</div>';
    return "<" + tag + ' class="event"' + linkAttrs(url) + ">" + photo + '<div class="body"><span class="meta">' + esc(e.date) + "</span>" +
      (e.type ? '<span class="tag">' + esc(e.type) + "</span>" : "") + "<h3>" + esc(e.title) + "</h3><p>" + esc(e.desc) + "</p></div></" + tag + ">";
  }).join("");

  var mailto = "mailto:" + encodeURIComponent(D.email || "").replace("%40", "@") +
    "?subject=" + encodeURIComponent("Ingin bergabung dengan ForDIST") +
    "&body=" + encodeURIComponent("Assalamu'alaikum,\n\nNama:\nDomisili:\nLatar belakang / minat:\n\n");
  document.querySelectorAll("[data-mail]").forEach(function (a) { a.href = mailto; });
  document.querySelectorAll("[data-email-text]").forEach(function (n) { n.textContent = D.email || ""; });
  document.getElementById("y").textContent = new Date().getFullYear();
})();
