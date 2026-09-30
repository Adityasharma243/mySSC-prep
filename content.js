/* mySSC prep - the list of subjects, sections and topics lives in this file.
   Questions do NOT go here. Each topic has its own file in the "questions" folder.

   To turn a topic on:
   1. Create questions/<id>.js (copy questions/_template.js and rename it to the topic's id)
   2. Add   ready: true,   to that topic below.

   "id" must be short, lowercase, no spaces. It must match the question file name. */

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
            ready: true,
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
            ready: true,
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
