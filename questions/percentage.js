/* Questions for the Percentage topic. File name must match the topic id in content.js.
   Each question: q, options, answer (position of right option, counting from 0),
   and optionally exam, year and solution. Keep a comma between questions. */

window.QUESTIONS = window.QUESTIONS || {};

QUESTIONS["percentage"] = [
  {
    q: "What is 20% of 350?",
    options: ["60","70","75","80"],
    answer: 1,
    solution: "20% of 350 = (20 × 350) / 100 = 70"
  },
  {
    q: "A price rises from 400 to 500. What is the percentage increase?",
    options: ["20%","22%","25%","30%"],
    answer: 2,
    solution: "Increase = 500 − 400 = 100.<br>Percentage increase = 100 / 400 × 100 = 25%"
  },
  {
    q: "A number is increased by 25% and then decreased by 20%. What is the net change?",
    options: ["No change","5% increase","5% decrease","10% increase"],
    answer: 0,
    solution: "Use a + b + (a × b)/100 with a = 25 and b = −20.<br>25 − 20 + (25 × −20)/100 = 5 − 5 = 0, so there is no change."
  },
  {
    q: "20 is what percent of 80?",
    options: ["20%","25%","30%","40%"],
    answer: 1,
    solution: "(20 / 80) × 100 = 25%"
  }
];
