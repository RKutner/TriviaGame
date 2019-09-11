window.onload = function(){
    var clockRunning = false;
    var clockRunning;
    var score=0;
    var timer=60;
    $("#timer").text = timer;

var questions= [
    ["Who is the one true god?", "Azathoth", "The Flying Spaghetti Monster", "Bilious", "What the hell there's no way I'm dealing with that conversation in class. Next question."],
    ["Who is the best cricketer of all time?", "Virat Kohli", "Sachin Tendulkar", "Don Bradman", "What the hell is a cricketer?"],
    ["Feather Bowling comes from which country?", "China", "Chad", "Belgium", "FEATHER bowling? You just made that up"],
    ["Who really controls the US government?", "The Inebriati", "The Knights Tipplar", "Yo mama", "Okay, are ANY of these going to be real questions?"],
    ["What does the fox say?", "Gering-ding-ding-ding-dingeringeding!", "Wa-pa-pa-pa-pa-pa-pow!", "Hatee-hatee-hatee-ho!", "If you won't take this seriously, I'm leaving"],
    ["Bah-weep-Graaaaagnah wheep ni ni bong?", "Look...", "...", "...", "I hate you."]
]
$("#startTimer").on('click', (event)=> {
    event.preventDefault();
    start()
    quiz(questions)
});



function start(){
    if (!clockRunning){
        intervalId= setInterval(tick, 1000);
        clockRunning=true;
    }
}

function tick(){
    timer--
    $("#timer").text = timer;
}



function quiz(arr){
    for (let i=0; i<4; i++){
        $(".question")= $("<h1>")
        $(".answerA")= $("<h3>")
        $(".answerA").attr('type', 'radio')
        $(".answerA").text(arr[i])
        $(".answerB")= $("<h3>")
        $(".answerB").attr('type', 'radio')
        $(".answerB").text(arr[i])
        $(".answerC")= $("<h3>")
        $(".answerC").attr('type', 'radio')
        $(".answerC").text(arr[i])
        $(".answerD")= $("<h3>")
        $(".answerD").attr('type', 'radio')
        $(".answerD").text(arr[i])

    }

    }
}
