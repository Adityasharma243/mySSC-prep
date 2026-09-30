/* mySSC prep - quiz engine.
   app.js loads a topic's questions and calls startQuiz(questions).
   Each question looks like:
   { q, options, answer, exam, year, solution }
   "answer" is the position of the correct option, counting from 0.
   "exam", "year" and "solution" are optional. You should not need to edit this file. */

(function () {
  function clock(totalSeconds) {
    var m = Math.floor(totalSeconds / 60), s = totalSeconds % 60;
    return m + ":" + (s < 10 ? "0" : "") + s;
  }
  function words(ms) {
    var sec = Math.round(ms / 1000);
    if (sec < 60) return sec + (sec === 1 ? " second" : " seconds");
    var m = Math.floor(sec / 60), s = sec % 60;
    return m + " min " + s + " sec";
  }

  window.startQuiz = function (QUIZ) {
    var box = document.getElementById("quiz");
    if (!box || !QUIZ || !QUIZ.length) return;

    var current = 0;
    var score = 0;
    var totalMs = 0;
    var timerId = null;

    function stopTimer() {
      if (timerId) { clearInterval(timerId); timerId = null; }
    }

    function showQuestion() {
      stopTimer();
      var item = QUIZ[current];
      box.innerHTML = "";

      /* Progress and live timer */
      var meta = document.createElement("div");
      meta.className = "quiz-meta";
      var progress = document.createElement("p");
      progress.className = "quiz-progress";
      progress.textContent = "Question " + (current + 1) + " of " + QUIZ.length;
      var timer = document.createElement("span");
      timer.className = "quiz-timer";
      timer.setAttribute("aria-hidden", "true");
      timer.textContent = "Time: 0:00";
      meta.appendChild(progress);
      meta.appendChild(timer);
      box.appendChild(meta);

      /* Exam name and year tag */
      var tagText = [item.exam, item.year].filter(Boolean).join(" ");
      if (tagText) {
        var tag = document.createElement("span");
        tag.className = "quiz-tag";
        tag.textContent = tagText;
        box.appendChild(tag);
      }

      var question = document.createElement("h3");
      question.textContent = item.q;
      box.appendChild(question);

      var list = document.createElement("div");
      list.className = "options";
      box.appendChild(list);

      var feedback = document.createElement("p");
      feedback.className = "feedback";
      feedback.setAttribute("aria-live", "polite");
      box.appendChild(feedback);

      var taken = document.createElement("p");
      taken.className = "time-taken";
      box.appendChild(taken);

      var solution = document.createElement("div");
      solution.className = "solution";
      solution.hidden = true;
      if (item.solution) {
        solution.innerHTML = "<h4>Solution</h4><div>" + item.solution + "</div>";
      }
      box.appendChild(solution);

      var next = document.createElement("button");
      next.className = "button";
      next.textContent = current === QUIZ.length - 1 ? "See my score" : "Next question";
      next.hidden = true;
      next.onclick = function () {
        current++;
        if (current < QUIZ.length) showQuestion(); else showScore();
      };
      box.appendChild(next);

      /* Timer starts now */
      var startedAt = Date.now();
      timerId = setInterval(function () {
        timer.textContent = "Time: " + clock(Math.floor((Date.now() - startedAt) / 1000));
      }, 500);

      item.options.forEach(function (text, index) {
        var choice = document.createElement("button");
        choice.className = "option";
        choice.textContent = text;
        choice.onclick = function () {
          var elapsed = Date.now() - startedAt;
          stopTimer();
          totalMs += elapsed;
          timer.textContent = "Time: " + clock(Math.round(elapsed / 1000));
          taken.textContent = "You took " + words(elapsed) + ".";

          var all = list.querySelectorAll("button");
          all.forEach(function (b) { b.disabled = true; });
          if (index === item.answer) {
            score++;
            choice.classList.add("right");
            feedback.textContent = "Correct.";
          } else {
            choice.classList.add("wrong");
            all[item.answer].classList.add("right");
            feedback.textContent = "Not quite. The answer is " + item.options[item.answer] + ".";
          }
          if (item.solution) solution.hidden = false;
          next.hidden = false;
          next.focus();
        };
        list.appendChild(choice);
      });
    }

    function showScore() {
      stopTimer();
      box.innerHTML = "";
      var result = document.createElement("h3");
      result.textContent = "You scored " + score + " out of " + QUIZ.length;
      box.appendChild(result);

      var times = document.createElement("p");
      times.className = "time-taken";
      times.textContent = "Total time: " + words(totalMs) +
        ". Average: " + words(totalMs / QUIZ.length) + " per question.";
      box.appendChild(times);

      var again = document.createElement("button");
      again.className = "button";
      again.textContent = "Try again";
      again.onclick = function () { current = 0; score = 0; totalMs = 0; showQuestion(); };
      box.appendChild(again);
    }

    showQuestion();
  };
})();
