//Here we take an array of objects as the quiz data which contains question, 4 answer options and the correct answer
const quizData = [
  {
    question: "How old did Cristiano Ronaldo turn recently?",
    a: "32",
    b: "33",
    c: "48",
    d: "37",
    correct: "d",
  },
  {
    question: "What is the most used programming language of 2021?",
    a: "Python",
    b: "Javascript",
    c: "C#",
    d: "Java",
    correct: "a",
  },
  {
    question: "Who is the president of US?",
    a: "Jon Snow",
    b: "Donald Trump",
    c: "Dwayne Johnson",
    d: "Joe Biden",
    correct: "d",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading style sheets",
    c: "Jason Object Notation",
    d: "Helicopter Terminals Motorboats Lambprghinis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "2019",
    c: "1995",
    d: "1998",
    correct: "c",
  },
];

//target each option by id
const question = document.getElementById("question");

// all options being returned as an array
let answers = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
let submitbtn = document.getElementById("submit");
//keep track of the current question
let currentQuestion = 0;
//keeps track of score
let score = 0;

//keeps track of option being selected
let ans = undefined;

loadQuiz();
//call every time page is refreshed

function loadQuiz() {
  let currentQuizData = quizData[currentQuestion]; //keeps track of current quiz page being displayed
  question.innerHTML = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  // deselectAnswers();
  //   let ans = undefined;
  answers.forEach((answerEl) => {
    // console.log(answerEl.checked);

    if (answerEl.checked) {
      ans = answerEl.id; //selects which answer
    }
  });
  //if its not selected
  //return ans which was initialised with undefined
  return ans;
}
// function deselectAnswers() {
//   //deselects radio button on refreshing

//   answers.forEach((answerEl) => {
//     answerEl.checked = false;
//   });
// }

submitbtn.addEventListener("click", () => {
  let answer = getSelected();
  console.log(answer);
  if (answer) {
    let currentQuizData = quizData[currentQuestion];
    if (answer === currentQuizData.correct) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      //we go to next question only if a button is selected
      loadQuiz();
    } else {
      //TODO show results
      alert("Yayy!!! you finished Get yourself a lemonade!");
    }
  }
});
