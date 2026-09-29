/* mySSC prep - quiz engine.
   Each chapter page defines a list called QUIZ, then this file builds the quiz.
   To add a question, add one more { q, options, answer } block on the chapter page.
   "answer" is the position of the correct option, counting from 0. */

(function () {
  var box = document.getElementById("quiz");
  if (!box || typeof QUIZ === "undefined") return;

  var current = 0;
  var score = 0;

  function showQuestion() {
    var item = QUIZ[current];
    box.innerHTML = "";

    var progress = document.createElement("p");
    progress.className = "quiz-progress";
    progress.textContent = "Question " + (current + 1) + " of " + QUIZ.length;
    box.appendChild(progress);

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

    var next = document.createElement("button");
    next.className = "button";
    next.textContent = current === QUIZ.length - 1 ? "See my score" : "Next question";
    next.hidden = true;
    next.onclick = function () {
      current++;
      if (current < QUIZ.length) showQuestion(); else showScore();
    };
    box.appendChild(next);

    item.options.forEach(function (text, index) {
      var choice = document.createElement("button");
      choice.className = "option";
      choice.textContent = text;
      choice.onclick = function () {
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
        next.hidden = false;
        next.focus();
      };
      list.appendChild(choice);
    });
  }

  function showScore() {
    box.innerHTML = "";
    var result = document.createElement("h3");
    result.textContent = "You scored " + score + " out of " + QUIZ.length;
    box.appendChild(result);

    var again = document.createElement("button");
    again.className = "button";
    again.textContent = "Try again";
    again.onclick = function () { current = 0; score = 0; showQuestion(); };
    box.appendChild(again);
  }

  showQuestion();
})();
