let questions = [
  {
    "question": "Wer hat HTML erfunden?",
    "answer_1": "Robbie Williams",
    "answer_2": "Lady Gaga",
    "answer_3": "Tim Berners-Lee",
    "answer_4": "Justin Bieber",
    "right_answer": 3
  },
  {
    "question": "Was bedeuted HTML?",
    "answer_1": "Hyper Text Markup Language", 
    "answer_2": "High Text Markup Language",
    "answer_3": "Hyper Tabular Markup Language",
    "answer_4": "Hyperlinks and Text Markup Language",
    "right_answer": 1
  },
  {
    "question": "Was bedeutet das HTML-Tag &lt;a&gt;?",
    "answer_1": "Text Fett",
    "answer_2": "Container",
    "answer_3": "Ein Link",
    "answer_4": "Kursiv",
    "right_answer": 3
  },
  {
    "question": "Wie bindet man eine Webseite in eine andere ein?",
    "answer_1": "&lt;iframe&gt;&lt;/iframe&gt;",
    "answer_2": "&lt;frame&gt;&lt;/frame&gt;",
    "answer_3": "&lt;frameset&gt;&lt;/frameset&gt;",
    "answer_4": "&lt;embed&gt;&lt;/embed&gt;",
    "right_answer": 1
  },
  {
    "question": "Wie definierst du in HTML ein Bild?",
    "answer_1": "&lt;img&gt;url&lt;/img&gt;",
    "answer_2": "&lt;image&gt;url&lt;/image&gt;",
    "answer_3": "&lt;img src='url'&gt;",
    "answer_4": "&lt;image src='url'&gt;",
    "right_answer": 3
  },
  {
    "question": "Welches Attribute muss gesetzt werden, damit ein Link sich in einem neuen Tab öffnet?",
    "answer_1": "target='new'",
    "answer_2": "target='blank'",
    "answer_3": "target='top'",
    "answer_4": "target='newtab'",
    "right_answer": 2
  },
  {
    "question": "Wie fügt man einen Kommentar in HTML ein?",
    "answer_1": "&lt;!--Kommentar--&gt;",
    "answer_2": "&lt;#Kommentar#&gt;",
    "answer_3": "&lt;*Kommentar*&gt;",
    "answer_4": "&lt;--Kommentar--&gt;",
    "right_answer": 1
  },
  {
    "question": "Welches Tag wird verwendet, um eine Liste mit Punkten zu erstellen?",
    "answer_1": "&lt;ol&gt;",
    "answer_2": "&lt;ul&gt;",
    "answer_3": "&lt;list&gt;",
    "answer_4": "&lt;li&gt;",
    "right_answer": 2
  },
  {
    "question": "Was ist die richtige Reihenfolge der HTML-Elemente?",
    "answer_1": "head, body, title",
    "answer_2": "title, head, body",
    "answer_3": "html, head, body",
    "answer_4": "html, body, head",
    "right_answer": 3
  },
  {
    "question": "Welches Tag wird verwendet, um eine Tabelle zu erstellen?",
    "answer_1": "&lt;table&gt;",
    "answer_2": "&lt;tr&gt;",
    "answer_3": "&lt;td&gt;",
    "answer_4": "&lt;table&gt;&lt;tr&gt;&lt;td&gt;",
    "right_answer": 1
  }
];

let rightQuestion = 0;
let currentQuestion = 0;
let audioSuccess = new audio('./assets/audio/success.mp3');
let audioFail = new audio('./assets/audio/fail.mp3');

function init() {
  document.getElementById('all-questions').innerHTML = questions.length;

  showQuestion();
}

function showQuestion() {

  if (currentQuestion >= questions.length) {
    document.getElementById('end-screen').style = '';
    document.getElementById('question-body').style = 'display: none';

    document.getElementById('amount-of-questions').innerHTML = questions.length;
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestion;

    document.getElementById('header-image').src = './assets/img/brain result.png';
  } else {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);

    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style = `width: ${percent}%;`;

    let question = questions[currentQuestion];

    document.getElementById('current-question').innerHTML = currentQuestion + 1;
    document.getElementById('question-text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
  }
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);
  let idOfRightAnswer =  `answer_${question['right_answer']}`;
  
  if (selectedQuestionNumber == question['right_answer']) {
    document.getElementById(selection).parentNode.classList.add('bg-success');
    audioSuccess();
    rightQuestion++;
  } else {
    document.getElementById(selection).parentNode.classList.add('bg-danger');    
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');   
    audioFail(); 
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