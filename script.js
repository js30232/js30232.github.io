window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var msg = new SpeechSynthesisUtterance();
var text = document.getElementById("text");
var speakButton = document.getElementById("speak");

var rec = new SpeechRecognition();
rec.interimResults = true; 
var voice = "белый";

var body = document.querySelector("body");

function setOption() {
    msg.text = text.value;
    speechSynthesis.speak(msg);    
}

rec.addEventListener("result", function(e) {
    voice = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join("");
    console.log(voice); 
    
    if(voice.match(/белый/i)) {
        body.style.backgroundColor = "#F7F7F7";
    }
    
    if(voice.match(/красный/i)) {
        body.style.backgroundColor = "#BC382E";
    }
    
    if(voice.match(/оранжевый/i)) {
        body.style.backgroundColor = "#FF8000";
    }
    
    if(voice.match(/желтый/i)) {
        body.style.backgroundColor = "#F5BD00";
    }
    
    if(voice.match(/зеленый/i)) {
        body.style.backgroundColor = "#388D80";
    }
    
    if(voice.match(/голубой/i)) {
        body.style.backgroundColor = "#4583AA";
    }
    
    if(voice.match(/синий/i)) {
        body.style.backgroundColor = "#163260";
    }
    
    if(voice.match(/фиолетовый/i)) {
        body.style.backgroundColor = "#560DA6";
    }
});

rec.addEventListener("end", function(e) {
    rec.start();
});

speakButton.addEventListener("click", setOption);
rec.start();