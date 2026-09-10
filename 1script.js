let selectedClass = "";
let selectedSubject = "";
let selectedLevel = "";

let currentQuestion = 0;
let score = 0;


const questions = [

    {
        question: "What is 5 + 3?",
        options: ["6", "7", "8", "9"],
        answer: "8"
    },

    {
        question: "What is 10 - 4?",
        options: ["5", "6", "7", "8"],
        answer: "6"
    },

    {
        question: "Which number comes after 9?",
        options: ["8", "10", "11", "12"],
        answer: "10"
    },

    {
        question: "Which is a programming language?",
        options: ["HTML", "Python", "Keyboard", "Mouse"],
        answer: "Python"
    },

    {
        question: "How many days are there in a week?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    }

];


function showSection(id) {

    document.querySelectorAll(".section").forEach(section => {

        section.classList.remove("active");

    });


    document.getElementById(id).classList.add("active");

}


function selectClass(className) {

    selectedClass = className;


    document.getElementById("classTitle").innerText =
        selectedClass + " - Select Subject";


    showSection("subjects");

}


function selectSubject(subject) {

    selectedSubject = subject;


    document.getElementById("subjectTitle").innerText =
        selectedClass + " → " + selectedSubject;


    showSection("level");

}


function startQuiz(level) {

    selectedLevel = level;

    currentQuestion = 0;

    score = 0;


    document.getElementById("quizTitle").innerText =
        selectedClass + " | " +
        selectedSubject + " | " +
        selectedLevel + " Test";


    showSection("quiz");


    loadQuestion();

}


function loadQuestion() {

    let q = questions[currentQuestion];


    document.getElementById("questionNumber").innerText =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        questions.length;


    document.getElementById("question").innerText =
        q.question;


    let optionsHTML = "";


    q.options.forEach(option => {

        optionsHTML += `

            <label class="option">

                <input
                    type="radio"
                    name="answer"
                    value="${option}"
                >

                ${option}

            </label>

        `;

    });


    document.getElementById("options").innerHTML =
        optionsHTML;

}


function nextQuestion() {

    let selected =
        document.querySelector(
            'input[name="answer"]:checked'
        );


    if (!selected) {

        alert("Please select an answer!");

        return;

    }


    if (
        selected.value ===
        questions[currentQuestion].answer
    ) {

        score++;

    }


    currentQuestion++;


    if (
        currentQuestion <
        questions.length
    ) {

        loadQuestion();

    } else {

        showResult();

    }

}


function showResult() {

    document.getElementById("score").innerText =
        score + " / " + questions.length;


    let feedback = "";


    if (score === 5) {

        feedback =
            "Excellent! 🌟 Keep up the good work.";

    }

    else if (score >= 3) {

        feedback =
            "Good job! 👍 Practice a little more to improve.";

    }

    else {

        feedback =
            "Keep practicing! 📚 You can improve with regular practice.";

    }


    document.getElementById("feedback").innerText =
        feedback;


    showSection("result");

}