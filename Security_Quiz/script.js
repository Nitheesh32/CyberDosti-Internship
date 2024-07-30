const questions = [
    {
        question: "Which of the following is the best definition for cybersecurity",
        answers: [
            {text: "The process by which an organization manages cybersecurity risk to an acceptable level", correct: false},
            {text: "The protection of information from unauthorized access or disclosure", correct: false},
            {text: "The protection of paper documents, digital and intellectual property, and verbal or visual communication", correct: false},
            {text: "Protecting information assets by addressing threats to information that is processed, stored or transported by interworked information systems", correct: true}
        ]
    },
    {
        question: "Which of the following should you do to restrict access to your files and devices?",
        answers: [
            {text: "Update your software once a year", correct: false},
            {text: "Share passowrds only with colleagues you trust", correct: false},
            {text: "Have your staff members access information via an open Wi-Fi network", correct: false},
            {text: "Use multi-factor authentication", correct: true}
        ]
    },
    {
        question: "Which of the following is the best answer for how to secure your router?",
        answers: [
            {text: "change the default name and password of the router", correct: false},
            {text: "Turn off the router's remote management", correct: false},
            {text: "Log out as the administrator once the router is set up", correct: false},
            {text: "All of the above", correct: true}
        ]
    },
    {
        question: "When receiving an email from an unknown contact that has an attachment, you should:",
        answers: [
            {text: "Open the attachment to view its content", correct: false},
            {text: "Delete the email", correct: true},
            {text: "Forward the email to your co-workers to allow them to open the attachment first", correct: false},
            {text: "Forward the email to your personal email account so you can open it home", correct: false}
        ]
    },
    {
        question: "Which of the following would be the best password?",
        answers: [
            {text: "MySecret", correct: false},
            {text: " Iw2c^tILV", correct: true},
            {text: "Abc123", correct: false},
            {text: "Keyboard", correct: false}
        ]
    },
    {
        question: "Three common controls used to protect the availability of information are:",
        answers: [
            {text: "Redundancy, backups and access controls", correct: true},
            {text: "Encryption, file permissions and access controls", correct: false},
            {text: "Access controls, logging and digital signatures", correct: false},
            {text: "Hashes, logging and backups", correct: false}
        ]
    },
    {
        question: "Which of the following attacks requires a carrier file to self-replicate?",
        answers: [
            {text: "Trojan", correct: false},
            {text: "Virus", correct: false},
            {text: "Worm", correct: true},
            {text: "Spam", correct: false}
        ]
    },
    {
        question: "Which of the following offers the strongest wireless signal encryption?",
        answers: [
            {text: "WEP", correct: false},
            {text: "WAP", correct: false},
            {text: "WIPS", correct: false},
            {text: "WPA", correct: true}
        ]
    },
    {
        question: "What information do you need to set up a wireless access point?",
        answers: [
            {text: "SSID", correct: true},
            {text: "MAC address", correct: false},
            {text: "IP address", correct: false},
            {text: "ARP", correct: false}
        ]
    }, 
    {
        question: "What are two types of intrusion prevention systems?",
        answers: [
            {text: "Passive and active", correct: false},
            {text: "Anomaly and signature", correct: false},
            {text: "Host and network", correct: true},
            {text: "Internal and external", correct: false}
        ]
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
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach( answer => {
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
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();

