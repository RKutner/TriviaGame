var questions= [
    ["Who is the one true god?\n A: Azathoth\n B: Torm\n C: Mir Yannik\n D. What the hell there's no way I'm dealing with that conversation in class. Next question."], ["d"]
    ["Who is the best cricketer of all time?\n A: Virat Kohli\n B:Sachin Tendulkar\n C: Don Bradman D: What the hell is a cricketer?"],["d"]
    ["Feather Bowling comes from which country?\n A: China\n B: Chad\n C: Belgium\n D: FEATHER bowling? You just made that up"]["d"]
    ["Who really controls the US government?\n A: The Inebriati\n B: The Knights Tipplar\n C: Yo mama\n D: Okay, are ANY of these going to be real questions?"]["d"]
    ["What does the fox say?\n A: Gering-ding-ding-ding-dingeringeding!\n B: Wa-pa-pa-pa-pa-pa-pow!\n C:Hatee-hatee-hatee-ho!\n D: If you can't take this seriously, I'm leaving"]["d"]
    ["Bah-weep-Graaaaagnah wheep ni ni bong?\n A: Look...\n B:...\n C:...\n D: I hate you."][d]
]

window.onload = function(){
    var clockRunning = false;
    var score;
    $("timer").text = 60;

}

function start(){
    if (!clockRunning){
        intervalId= setInterval(tick, 1000);
        clockRunning=true;
    }
}