/* TEMPLATE for a new topic.
   1. Copy this file and rename the copy to the topic's id from content.js
      (for example profit-loss.js, time-work.js).
   2. Change TOPIC_ID below to that same id (keep the quotes).
   3. Replace the two sample questions with yours.
   4. In content.js, add   ready: true,   to that topic.

   "answer" is the position of the right option, counting from 0 (first = 0, second = 1, ...).
   "exam", "year" and "solution" are optional. In a solution you can use <br> for a new line.
   Keep a comma between questions, but not after the last one. */

window.QUESTIONS = window.QUESTIONS || {};

QUESTIONS["TOPIC_ID"] = [
  {
    q: "Your question here?",
    options: ["Option A","Option B","Option C","Option D"],
    answer: 0,
    exam: "SSC CGL",
    year: 2022,
    solution: "Step 1 ...<br>Step 2 ...<br>So the answer is A."
  },
  {
    q: "Another question?",
    options: ["Option A","Option B","Option C","Option D"],
    answer: 2,
    solution: "Short solution here."
  }
];
