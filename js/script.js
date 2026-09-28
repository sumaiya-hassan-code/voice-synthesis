let voice = document.getElementById("voice");
let text = document.getElementById("text");

voice.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(text.value);
    speechSynthesis.speak(utterance);
});