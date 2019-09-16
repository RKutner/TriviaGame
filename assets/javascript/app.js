window.onload = function(){
    var clockRunning = false;
    var score=0;
    var timer=60;
    $("#timer").text = 60;


const questions = [
    {question:"Who is the one true god?", answers:["Azathoth", "The Flying Spaghetti Monster", "Bilious", "What the hell there's no way I'm dealing with that conversation in class. Next question."]},
    {question: "Who is the best cricketer of all time?", answers:["Virat Kohli", "Sachin Tendulkar", "Don Bradman", "What the hell is a cricketer?"]},
    {question: "Feather Bowling comes from which country?", answers:["China", "Chad", "Belgium", "FEATHER bowling? You just made that up"]},
    {question: "Who really controls the US government?", answers:["The Inebriati", "The Knights Tipplar", "Yo mama", "Okay, are ANY of these going to be real questions?"]},
    {question: "What does the fox say?", answers:["Gering-ding-ding-ding-dingeringeding!", "Wa-pa-pa-pa-pa-pa-pow!", "Hatee-hatee-hatee-ho!", "If you won't take this seriously, I'm leaving"]},
    {question: "Bah-weep-Graaaaagnah wheep ni ni bong?", answers:["Look...", "...", "...", "I hate you."]}

]


for(let i = 0; i < questions.length; i++){
    const currentQuestion = questions[i];
    const $questionDiv = $('<div>');
    const $questionP = $('<h1>');
    const question = currentQuestion.question;
    
    $questionP.text(question)
    $questionDiv.append($questionP)
    $questionDiv.addClass("card")
    
    const $answerDiv = $('<div>');
    for(let j = 0; j < currentQuestion.answers.length; j++){
        const currentAnswer = currentQuestion.answers[j];
        const $answerP = $('<h2>').text(currentAnswer);
        const $radio= $(`<input type='radio' name= ${i}>`)
        $answerDiv.append($answerP)
        $answerP.prepend($radio)
        $answerDiv.append($("<p>"))
        if(j==4){($answerP).addClass("right")}
        else{($answerP).addClass("wrong")}
        $answerDiv.addClass("card")
    }
    $answerDiv.hide();
    $questionDiv.hide();
    $('.questions').append($questionDiv, $answerDiv)
    

$("#startTimer").on('click', (event)=> {
    event.preventDefault();
    start()
    quiz(questions)
    console.log("click")
    $answerDiv.show();
    $questionDiv.show();
});



function start(){
    if (!clockRunning){
        intervalId= setInterval(tick, 1000);
        clockRunning=true;
    
    }
}

function tick(){
    timer--
    $("#timer").text(timer);
    if(timer<1){ 
        gameOver()
    }
}

function gameOver(){
    clockRunning=false;
    clearInterval(intervalId)

    alert("This is where I'd give you a score if this was a real quiz. Alas, I decided to go with comedy instead of trivia. \n /shrug")



}

function quiz(arr){
    console.log("quiz")
    for(let i=0; i<arr.length; i++){
        $newDiv= $("<h1>")
        $newDiv.text(arr[i])
    }

    }
}}
