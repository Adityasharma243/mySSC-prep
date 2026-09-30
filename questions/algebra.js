/* Questions for the Algebra topic. File name must match the topic id in content.js.
   Each question: q, options, answer (position of right option, counting from 0),
   and optionally exam, year and solution. Keep a comma between questions. */

window.QUESTIONS = window.QUESTIONS || {};

QUESTIONS["algebra"] = [
  {
    q: "If x + y = 10 and xy = 21, what is x² + y²?",
    options: ["49","58","79","100"],
    answer: 1,
    solution: "x² + y² = (x + y)² − 2xy = 100 − 42 = 58"
  },
  {
    q: "What is the value of 101² − 99²?",
    options: ["200","300","400","404"],
    answer: 2,
    solution: "a² − b² = (a + b)(a − b)<br>= (101 + 99)(101 − 99) = 200 × 2 = 400"
  },
  {
    q: "If x + 1/x = 3, what is x² + 1/x²?",
    options: ["5","7","9","11"],
    answer: 1,
    solution: "If x + 1/x = k, then x² + 1/x² = k² − 2.<br>= 9 − 2 = 7"
  },
  {
    q: "Solve for x: 3x − 7 = 11",
    options: ["4","5","6","18"],
    answer: 2,
    solution: "3x = 11 + 7 = 18, so x = 18 / 3 = 6"
  }
];
