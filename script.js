
let quizQuestions = [
    { question: "What is the capital of India?", answer: "delhi" },
    { question: "2 + 2 equals?", answer: "4" },
    { question: "What color is the sky?", answer: "blue" },
    { question: "HTML stands for?", answer: "hypertext markup language" },
    { question: "Which planet is known as the Red Planet?", answer: "mars" }
];
function runQuiz() {
    let score = 0;
    for (let i = 0; i < quizQuestions.length; i++) {
        let q = quizQuestions[i].question;
        let userAnswer = prompt(q);
        if (userAnswer === null) {
            alert("Quiz cancelled!");
            return;
        }
        userAnswer = userAnswer.toLowerCase().trim();
        let correctAnswer = quizQuestions[i].answer.toLowerCase().trim();
        if (userAnswer === correctAnswer) {
            score++;
            alert("Correct!");
        } else {
            alert("Wrong! Correct answer: " + quizQuestions[i].answer);
        }
    }
    alert("Quiz Finished!\nYour Score: " + score + " / " + quizQuestions.length);
}