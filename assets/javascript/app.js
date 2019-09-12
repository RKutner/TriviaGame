window.onload = function(){
    var clockRunning = false;
    var score=0;
    var timer=60;
    $("#timer").text = timer;


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

    const $answerDiv = $('<div>');
    for(let i = 0; i < currentQuestion.answers.length; i++){
        const currentAnswer = currentQuestion.answers[i];
        const $answerP = $('<button>').text(currentAnswer);
        $answerDiv.append($answerP);
        $answerDiv.append($("<p>"))
        if(i==4){($answerP).addClass("right")}
        else{($answerP).addClass("wrong")}
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
        console.log("start")

    
    }
}

function tick(){
    timer--
    $("#timer").text = timer;
}



function quiz(arr){
    console.log("quiz")
    for(let i=0; i<arr.length; i++){
        $newDiv= $("<h1>")
        $newDiv.text(arr[i])
    }

    }
}}
