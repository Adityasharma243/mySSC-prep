/* mySSC prep - ALL your content lives in this one file.
   To add a chapter: copy a chapter block inside a section, paste it after
   the last one (keep the comma between blocks), and change the text.
   "id" must be short, lowercase, no spaces (it becomes part of the page link).
   For each quiz question, "answer" is the position of the right option,
   counting from 0 (first option = 0, second = 1, ...). */

var SUBJECTS = [
  {
    id: "maths",
    title: "Maths",
    blurb: "Arithmetic and Advanced Maths",
    sections: [
      {
        title: "Arithmetic",
        chapters: [
          {
            id: "percentage",
            title: "Percentage",
            notes: [
              "Percent means \"out of 100\". To find a percentage of a number, multiply the number by the percentage and divide by 100.",
              "For a change, always compare with the <strong>old</strong> value."
            ],
            formulas: [
              "x% of y = (x × y) / 100",
              "Percentage change = (new − old) / old × 100",
              "Two successive changes of a% and b% = a + b + (a × b)/100"
            ],
            tables: [
              { head: ["Fraction", "Percentage"],
                rows: [["1/2","50%"],["1/3","33.33%"],["1/4","25%"],["1/5","20%"],["1/8","12.5%"]] }
            ],
            quiz: [
              { q: "What is 20% of 350?", options: ["60","70","75","80"], answer: 1 },
              { q: "A price rises from 400 to 500. What is the percentage increase?", options: ["20%","22%","25%","30%"], answer: 2 },
              { q: "A number is increased by 25% and then decreased by 20%. What is the net change?", options: ["No change","5% increase","5% decrease","10% increase"], answer: 0 },
              { q: "20 is what percent of 80?", options: ["20%","25%","30%","40%"], answer: 1 }
            ]
          },
          { id: "ratio-proportion", title: "Ratio and Proportion" },
          { id: "profit-loss", title: "Profit and Loss" },
          { id: "discount", title: "Discount" },
          { id: "time-work", title: "Time and Work" },
          { id: "pipe-cistern", title: "Pipe and Cistern" },
          { id: "time-speed-distance", title: "Time, Speed and Distance" },
          { id: "train", title: "Train" },
          { id: "race", title: "Race" },
          { id: "average", title: "Average" },
          { id: "partnership", title: "Partnership" },
          { id: "mixture-alligation", title: "Mixture and Alligation" },
          { id: "boat-stream", title: "Boat and Stream" },
          { id: "si-ci", title: "SI & CI" },
          { id: "dishonest-shopkeeper", title: "Dishonest Shopkeeper" },
          { id: "installment", title: "Installment" },
          { id: "problem-ages", title: "Problem on Ages" }
        ]
      },
      {
        title: "Advanced Maths",
        chapters: [
          { id: "mensuration-2d", title: "2D Mensuration" },
          { id: "mensuration-3d", title: "3D Mensuration" },
          {
            id: "algebra",
            title: "Algebra",
            notes: [
              "Most SSC algebra questions are solved by using an identity, not by finding x and y one by one. Look for squares, cubes and a sum or product that is given to you."
            ],
            formulas: [
              "(a + b)² = a² + 2ab + b²",
              "(a − b)² = a² − 2ab + b²",
              "a² − b² = (a + b)(a − b)",
              "(a + b)³ = a³ + b³ + 3ab(a + b)",
              "a³ + b³ = (a + b)(a² − ab + b²)",
              "If x + 1/x = k, then x² + 1/x² = k² − 2"
            ],
            quiz: [
              { q: "If x + y = 10 and xy = 21, what is x² + y²?", options: ["49","58","79","100"], answer: 1 },
              { q: "What is the value of 101² − 99²?", options: ["200","300","400","404"], answer: 2 },
              { q: "If x + 1/x = 3, what is x² + 1/x²?", options: ["5","7","9","11"], answer: 1 },
              { q: "Solve for x: 3x − 7 = 11", options: ["4","5","6","18"], answer: 2 }
            ]
          },
          { id: "trigonometry", title: "Trigonometry" },
          { id: "height-distance", title: "Height and Distance" },
          { id: "geometry", title: "Geometry" },
          { id: "di", title: "DI" },
          { id: "probability", title: "Probability" },
          { id: "statistics", title: "Statistics" },
          { id: "coordinate-geometry", title: "Coordinate Geometry" },
          { id: "quadratic-equation", title: "Quadratic Equation" },
          { id: "permutations-combinations", title: "Permutations & Combinations" }
        ]
      }
    ]
  },
  { id: "physics", title: "Physics", blurb: "Coming soon" },
  { id: "science", title: "Science", blurb: "Coming soon" }
];
