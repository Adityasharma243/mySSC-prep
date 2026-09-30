/* mySSC prep - the list of subjects, sections and topics lives in this file.

   PRACTICE QUESTIONS live in the "questions" folder, one file per topic.
   To turn a practice topic on:
   1. Create questions/<id>.js (copy questions/template.js and rename it to the topic's id)
   2. Add   ready: true,   to that topic below.

   NOTES (PDFs) live in the "notes" folder, for example notes/polity/preamble-en.pdf.
   Each note topic has two links, "en" for English and "hi" for Hindi.
   Leave a link as "" and the button shows "(soon)". To switch it on, put the PDF path in it:
     en: "notes/polity/preamble-en.pdf",

   "id" must be short, lowercase, no spaces. */

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
  {
    id: "science",
    title: "Science",
    blurb: "Physics, Chemistry and Biology",
    sections: [
      { title: "Physics", chapters: [] },
      { title: "Chemistry", chapters: [] },
      { title: "Biology", chapters: [] }
    ]
  },
  {
    id: "history",
    title: "History",
    blurb: "Ancient and Modern History",
    sections: [
      { title: "Ancient History", chapters: [] },
      { title: "Modern History", chapters: [] }
    ]
  },
  {
    id: "geography",
    title: "Geography",
    blurb: "Indian and World Geography",
    sections: [
      { title: "Indian Geography", chapters: [] },
      { title: "World Geography", chapters: [] }
    ]
  },
  {
    id: "polity",
    title: "Polity",
    blurb: "Constitution and governance",
    sections: [
      {
        title: "Polity",
        chapters: [],
        noteTopics: [
          { id: "const-dev-1600-1853", title: "Constitutional Development of India (1600–1853)", titleHi: "भारत में संवैधानिक विकास (1600–1853)", en: "", hi: "" },
          { id: "const-dev-1858-montagu-chelmsford", title: "Constitutional Development of India (1858–Montagu–Chelmsford)", titleHi: "भारत में संवैधानिक विकास (1858–मांटेग्यू–चेम्सफोर्ड)", en: "", hi: "" },
          { id: "goi-act-1935", title: "Government of India Act, 1935 and Provincial Elections", titleHi: "भारत शासन अधिनियम, 1935 और प्रांतीय चुनाव", en: "", hi: "" },
          { id: "cripps-cabinet-mission", title: "Cripps Mission (1942) and Cabinet Mission (1946)", titleHi: "क्रिप्स मिशन (1942) और कैबिनेट मिशन (1946)", en: "", hi: "" },
          { id: "constituent-assembly", title: "Constitution of the Constituent Assembly", titleHi: "संविधान सभा का गठन", en: "", hi: "" },
          { id: "assembly-committees", title: "Committees and Sub-Committees of the Constituent Assembly", titleHi: "संविधान सभा की समितियाँ और उप-समितियाँ", en: "", hi: "" },
          { id: "sources-of-constitution", title: "Sources of the Constitution", titleHi: "संविधान के स्रोत", en: "", hi: "" },
          { id: "schedules", title: "Schedules of the Constitution", titleHi: "संविधान की अनुसूचियाँ", en: "", hi: "" },
          { id: "parts", title: "Parts of the Constitution", titleHi: "संविधान के भाग", en: "", hi: "" },
          { id: "preamble", title: "Preamble", titleHi: "प्रस्तावना", en: "", hi: "" },
          { id: "union-territories", title: "Union and Its Territories", titleHi: "संघ और उसका राज्यक्षेत्र", en: "", hi: "" },
          { id: "reorganisation-of-states", title: "Reorganisation of States", titleHi: "राज्यों का पुनर्गठन", en: "", hi: "" },
          { id: "citizenship", title: "Citizenship", titleHi: "नागरिकता", en: "", hi: "" },
          { id: "citizenship-01", title: "Citizenship – 01", titleHi: "नागरिकता – 01", en: "", hi: "" },
          { id: "citizenship-02", title: "Citizenship – 02", titleHi: "नागरिकता – 02", en: "", hi: "" },
          { id: "fundamental-rights-01", title: "Fundamental Rights – 01", titleHi: "मौलिक अधिकार – 01", en: "", hi: "" },
          { id: "fundamental-rights-02", title: "Fundamental Rights – 02", titleHi: "मौलिक अधिकार – 02", en: "", hi: "" },
          { id: "dpsp", title: "Directive Principles of State Policy (DPSP)", titleHi: "राज्य की नीति के निदेशक तत्त्व (DPSP)", en: "", hi: "" },
          { id: "fundamental-duties", title: "Fundamental Duties", titleHi: "मौलिक कर्तव्य", en: "", hi: "" },
          { id: "president", title: "President", titleHi: "राष्ट्रपति", en: "", hi: "" },
          { id: "president-powers", title: "Powers of the President", titleHi: "राष्ट्रपति की शक्तियाँ", en: "", hi: "" },
          { id: "vice-president", title: "Vice President", titleHi: "उपराष्ट्रपति", en: "", hi: "" },
          { id: "pm-council-of-ministers", title: "Prime Minister and Council of Ministers", titleHi: "प्रधानमंत्री और मंत्रिपरिषद", en: "", hi: "" },
          { id: "attorney-general", title: "Attorney General", titleHi: "महान्यायवादी", en: "", hi: "" },
          { id: "parliament", title: "Parliament", titleHi: "संसद", en: "", hi: "" },
          { id: "parliament-proceedings-committees", title: "Proceedings of Parliament and Parliamentary Committees", titleHi: "संसद की कार्यवाही और संसदीय समितियाँ", en: "", hi: "" },
          { id: "bills", title: "Bills and Their Types", titleHi: "विधेयक और उनके प्रकार", en: "", hi: "" },
          { id: "judiciary", title: "Indian Judiciary", titleHi: "भारतीय न्यायपालिका", en: "", hi: "" },
          { id: "cag", title: "Comptroller and Auditor General (CAG) of India", titleHi: "भारत का नियंत्रक एवं महालेखा परीक्षक (CAG)", en: "", hi: "" },
          { id: "governors", title: "Governors", titleHi: "राज्यपाल", en: "", hi: "" },
          { id: "state-legislatures", title: "State Legislatures", titleHi: "राज्य विधानमंडल", en: "", hi: "" },
          { id: "ut-administration", title: "Union Territories Administration", titleHi: "केंद्रशासित प्रदेशों का प्रशासन", en: "", hi: "" },
          { id: "local-self-government", title: "Local Self-Government", titleHi: "स्थानीय स्वशासन", en: "", hi: "" },
          { id: "election-commission", title: "Election Commission", titleHi: "निर्वाचन आयोग", en: "", hi: "" },
          { id: "delimitation-commission", title: "Delimitation Commission", titleHi: "परिसीमन आयोग", en: "", hi: "" },
          { id: "upsc-spsc", title: "Union Public Service Commission and State Public Service Commissions", titleHi: "संघ लोक सेवा आयोग और राज्य लोक सेवा आयोग", en: "", hi: "" },
          { id: "official-language", title: "Official Language", titleHi: "राजभाषा", en: "", hi: "" },
          { id: "constitutional-amendments", title: "Important Constitutional Amendments", titleHi: "महत्वपूर्ण संविधान संशोधन", en: "", hi: "" }
        ]
      }
    ]
  },
  { id: "reasoning", title: "Reasoning", blurb: "Coming soon" }
];
