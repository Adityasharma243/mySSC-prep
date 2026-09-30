/* mySSC prep - builds every page from content.js. You should not need to edit this. */
(function () {
  /* Notes and formula sheets are hidden for now. Change false to true to bring them back. */
  var SHOW_NOTES = false;

  /* Hindi font for the Hindi topic names */
  var fontLink = document.createElement("link");
  fontLink.rel = "stylesheet";
  fontLink.href = "https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;700&display=swap";
  document.head.appendChild(fontLink);

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

  /* A notes button: a link when the PDF is set, a greyed "(soon)" label when it is not. */
  function noteButton(href, label, lang) {
    if (href) {
      var a = el("a", "note-btn", label);
      a.href = encodeURI(href); a.target = "_blank"; a.rel = "noopener";
      if (lang) a.setAttribute("lang", lang);
      return a;
    }
    var b = el("span", "note-btn soon", label + " (soon)");
    if (lang) b.setAttribute("lang", lang);
    return b;
  }

  /* Hands a list of questions to script.js once it is ready. */
  function start(list) {
    function go() { window.startQuiz(list); }
    if (window.startQuiz) go(); else window.addEventListener("load", go);
  }
  /* Loads questions/<topic id>.js, which fills QUESTIONS["<topic id>"]. */
  function loadQuestions(id, box) {
    var none = "<p>No questions have been added for this topic yet.</p>";
    box.innerHTML = "<p>Loading questions...</p>";
    var tag = document.createElement("script");
    tag.src = "questions/" + id + ".js";
    tag.onload = function () {
      var list = window.QUESTIONS && window.QUESTIONS[id];
      if (list && list.length) start(list); else box.innerHTML = none;
    };
    tag.onerror = function () { box.innerHTML = none; };
    document.body.appendChild(tag);
  }

  if (page === "home") {
    var hero = el("section", "hero",
      '<h1>Welcome to <span class="mark">mySSC prep</span></h1>' +
      "<p>Practice questions for SSC exams. Pick a subject to begin.</p>");
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
      var chapters = sec.chapters || [];
      var topics = sec.noteTopics || [];
      var panel = el("section", "panel");
      if (!(s.sections.length === 1 && sec.title === s.title)) panel.appendChild(el("h2", "", sec.title));

      if (topics.length) {
        panel.appendChild(el("h3", "", "Notes"));
        var nl = el("ul", "note-list");
        topics.forEach(function (t) {
          var li = el("li");
          li.appendChild(el("span", "note-title", t.title + (t.titleHi ? '<span class="hi" lang="hi">' + t.titleHi + "</span>" : "")));
          var links = el("span", "note-links");
          links.appendChild(noteButton(t.en, "English", "en"));
          links.appendChild(noteButton(t.hi, "हिन्दी", "hi"));
          li.appendChild(links);
          nl.appendChild(li);
        });
        panel.appendChild(nl);
      }

      if (chapters.length) {
        if (topics.length) panel.appendChild(el("h3", "", "Practice questions"));
        var ul = el("ul");
        chapters.forEach(function (c) {
          var li = el("li");
          if (c.ready || c.quiz) li.appendChild(link("chapter.html?s=" + s.id + "&c=" + c.id, "", c.title));
          else li.innerHTML = c.title + " (coming soon)";
          ul.appendChild(li);
        });
        panel.appendChild(ul);
      } else if (topics.length) {
        panel.appendChild(el("h3", "", "Practice questions"));
        panel.appendChild(el("p", "", "Coming soon."));
      } else {
        panel.appendChild(el("p", "", "Topics coming soon."));
      }
      main.appendChild(panel);
    });
    main.appendChild(link("index.html", "button", "Back to home"));

  } else if (page === "chapter") {
    var sub = subjectById(params.get("s")), ch, secTitle;
    if (sub && sub.sections) sub.sections.forEach(function (sec) {
      (sec.chapters || []).forEach(function (c) { if (c.id === params.get("c")) { ch = c; secTitle = sec.title; } });
    });
    if (!ch) return missing();
    document.title = ch.title + " - mySSC prep";
    main.appendChild(el("p", "crumbs", '<a href="subject.html?s=' + sub.id + '">' + sub.title + "</a> / " + secTitle));
    main.appendChild(el("h1", "", ch.title));

    if (SHOW_NOTES && ch.notes) {
      var n = el("section", "panel", "<h2>Notes</h2>");
      ch.notes.forEach(function (t) { n.appendChild(el("p", "", t)); });
      main.appendChild(n);
    }
    if (SHOW_NOTES && (ch.formulas || ch.tables)) {
      var f = el("section", "panel", "<h2>Formula sheet</h2>");
      (ch.formulas || []).forEach(function (t) { f.appendChild(el("div", "formula", t)); });
      (ch.tables || []).forEach(function (t) {
        var h = "<tr>" + t.head.map(function (x) { return "<th>" + x + "</th>"; }).join("") + "</tr>";
        var r = t.rows.map(function (row) { return "<tr>" + row.map(function (x) { return "<td>" + x + "</td>"; }).join("") + "</tr>"; }).join("");
        f.appendChild(el("table", "sheet", h + r));
      });
      main.appendChild(f);
    }
    if (ch.ready || ch.quiz) {
      var qz = el("section", "panel", "<h2>Practice questions</h2>");
      var box = el("div"); box.id = "quiz"; qz.appendChild(box);
      main.appendChild(qz);
      if (ch.ready) loadQuestions(ch.id, box); else start(ch.quiz);
    }
  }
})();
