let rightQuestion = 0;
let currentQuestion = 0;
let audioSuccess = new Audio('./assets/audio/success.mp3');
let audioFail = new Audio('./assets/audio/fail.mp3');

function init() {
  document.getElementById('all-questions').innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  if (gameIsOver()) {
    showEndScreen();
  } else {
    updateProgressBar();
    updateToNextQuestion();
  }
}

function gameIsOver() {
  return currentQuestion >= questions.length;
}

function showEndScreen() {
  document.getElementById('end-screen').style = '';
  document.getElementById('question-body').style = 'display: none';
  document.getElementById('amount-of-questions').innerHTML = questions.length;
  document.getElementById('amount-of-right-questions').innerHTML = rightQuestion;
}

function updateProgressBar() {
  let percent = (currentQuestion + 1) / questions.length;
  percent = Math.round(percent * 100);

  document.getElementById('progress-bar').style = `width: ${percent}%;`;
}

function updateToNextQuestion() {
  let question = questions[currentQuestion];
  document.getElementById('current-question').innerHTML = currentQuestion + 1;
  document.getElementById('question-text').innerHTML = question['question'];
  document.getElementById('answer_1').innerHTML = question['answer_1'];
  document.getElementById('answer_2').innerHTML = question['answer_2'];
  document.getElementById('answer_3').innerHTML = question['answer_3'];
  document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);
  let idOfRightAnswer =  `answer_${question['right_answer']}`;
  
  if (selectedQuestionNumber == question['right_answer']) {
    document.getElementById(selection).parentNode.classList.add('bg-success');
    audioSuccess.play();
    rightQuestion++;
  } else {
    document.getElementById(selection).parentNode.classList.add('bg-danger');    
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');   
    audioFail.play(); 
  }
  document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  showQuestion();

  document.getElementById('next-button').disabled = true;

  resetAnswerButtons();
  showQuestion();
}

function resetAnswerButtons() {
  document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_1').parentNode.classList.remove('bg-success');
  document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_2').parentNode.classList.remove('bg-success');
  document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_3').parentNode.classList.remove('bg-success');
  document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
  document.getElementById('header-image').src = './assets/img/quiz.jpg';
  document.getElementById('question-body').style = '';
  document.getElementById('end-screen').style = 'display: none';
  rightQuestion = 0;
  currentQuestion = 0;
  init();
}
