const input = document.getElementById('answer')
const submit = document.getElementsByClassName('calculator')
const operator = document.getElementById('operation')
const Question = document.getElementById('question')
const form = document.getElementById('form')
const showScore = document.getElementById('showscore')

num1 = Math.floor(Math.random() * 11);
num2 = Math.floor(Math.random() * 11);
Question.innerText = `What is the multiple of ${num1} and ${num2}`

correctAnswer = num1*num2;
let score = JSON.parse(localStorage.getItem("score"));

if (!score){
    score = 0;
}

form.addEventListener("submit", () => {
   
    const userAns = +input.value
        
    if (userAns===correctAnswer){
        score++
        localstore()
    }else{
        score-- 
        localstore()
    }
    return score
})

function localstore(){
    localStorage.setItem("score", JSON.stringify(score))
}
showScore.innerText = `score:${score}`;