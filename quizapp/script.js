const questions = [
  {
    question: "Which is the largest animal in the world?",
    answer: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Girrafe", correct: false },
    ],
  },
  {
    question: "How many states are there in India?",
    answer: [
      { text: "23", correct: false },
      { text: "28", correct: true },
      { text: "29", correct: false },
      { text: "27", correct: false },
    ],
  },
  {
    question: "Who was the first man to step on the moon?",
    answer: [
      { text: " Tony Shark", correct: false },
      { text: "Neil Armstrong", correct: true },
      { text: "Edwin 'Buzz' Aldrin", correct: false },
      { text: "Michal Kollins", correct: false },
    ],
  },
  {
    question: "Name the current President of India?",
    answer: [
      { text: "Mr.Ramnath Kovind", correct: false },
      { text: "Droupadi Murmu", correct: true },
      { text: "Narendra Modi", correct: false },
      { text: "Amit Shah", correct: false },
    ],
  },
  {
    question: "Which city is the capital city of India?",
    answer: [
      { text: "Shimla", correct: false },
      { text: "New Delhi", correct: true },
      { text: "Bhopal", correct: false },
      { text: "Ghaziabad", correct: false },
    ],
  },
];




const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}



function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo +". "+currentQuestion.question;

    currentQuestion.answer.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}




function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}




function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}




function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}




function handleNextButton(){
   currentQuestionIndex++;
   if(currentQuestionIndex<questions.length){
    showQuestion();
   }else{
    showScore();
   }
}




nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();