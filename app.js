/* mySSC prep - builds every page from content.js. You should not need to edit this. */
(function () {
  var main = document.getElementById("app");
  var page = document.body.getAttribute("data-page");
  var params = new URLSearchParams(location.search);

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }
  function subjectById(id) { return SUBJECTS.filter(function (s) { return s.id === id; })[0]; }
  function link(href, cls, html) { var a = el("a", cls, html); a.href = href; return a; }
  function missing() {
    main.appendChild(el("h1", "", "Page not found"));
    main.appendChild(link("index.html", "button", "Back to home"));
  }

  if (page === "home") {
    var hero = el("section", "hero",
      '<h1>Welcome to <span class="mark">mySSC prep</span></h1>' +
      "<p>Notes, formula sheets and practice questions for SSC exams. Pick a subject to begin.</p>");
    var grid = el("section", "subjects");
    SUBJECTS.forEach(function (s) {
      var html = "<h3>" + s.title + "</h3><p>" + s.blurb + "</p>";
      if (s.sections) grid.appendChild(link("subject.html?s=" + s.id, "subject", html));
      else grid.appendChild(el("div", "subject soon", html));
    });
    main.appendChild(hero); main.appendChild(grid);

  } else if (page === "subject") {
    var s = subjectById(params.get("s"));
    if (!s || !s.sections) return missing();
    document.title = s.title + " - mySSC prep";
    main.appendChild(el("h1", "", s.title));
    s.sections.forEach(function (sec) {
      var panel = el("section", "panel", "<h2>" + sec.title + "</h2>");
      var ul = el("ul");
      sec.chapters.forEach(function (c) {
        var li = el("li");
        if (c.notes || c.formulas || c.quiz) li.appendChild(link("chapter.html?s=" + s.id + "&c=" + c.id, "", c.title));
        else li.innerHTML = c.title + " (coming soon)";
        ul.appendChild(li);
      });
      panel.appendChild(ul); main.appendChild(panel);
    });
    main.appendChild(link("index.html", "button", "Back to home"));

  } else if (page === "chapter") {
    var sub = subjectById(params.get("s")), ch, secTitle;
    if (sub && sub.sections) sub.sections.forEach(function (sec) {
      sec.chapters.forEach(function (c) { if (c.id === params.get("c")) { ch = c; secTitle = sec.title; } });
    });
    if (!ch) return missing();
    document.title = ch.title + " - mySSC prep";
    main.appendChild(el("p", "crumbs", '<a href="subject.html?s=' + sub.id + '">' + sub.title + "</a> / " + secTitle));
    main.appendChild(el("h1", "", ch.title));

    if (ch.notes) {
      var n = el("section", "panel", "<h2>Notes</h2>");
      ch.notes.forEach(function (t) { n.appendChild(el("p", "", t)); });
      main.appendChild(n);
    }
    if (ch.formulas || ch.tables) {
      var f = el("section", "panel", "<h2>Formula sheet</h2>");
      (ch.formulas || []).forEach(function (t) { f.appendChild(el("div", "formula", t)); });
      (ch.tables || []).forEach(function (t) {
        var h = "<tr>" + t.head.map(function (x) { return "<th>" + x + "</th>"; }).join("") + "</tr>";
        var r = t.rows.map(function (row) { return "<tr>" + row.map(function (x) { return "<td>" + x + "</td>"; }).join("") + "</tr>"; }).join("");
        f.appendChild(el("table", "sheet", h + r));
      });
      main.appendChild(f);
    }
    if (ch.quiz) {
      var qz = el("section", "panel", "<h2>Practice quiz</h2>");
      var box = el("div"); box.id = "quiz"; qz.appendChild(box);
      main.appendChild(qz);
      window.QUIZ = ch.quiz;   /* script.js (loaded next) builds the quiz */
    }
  }
})();
