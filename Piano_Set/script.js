let userChoices = [];
let isRecording = false;

function playSound(note) {
    var audio = new Audio("sounds/" + note + ".mp3");
    audio.play();
    if (isRecording) {
        userChoices.push(note);
    }
}

function playUserChoices() {
    userChoices.forEach((note, index) => {
        setTimeout(() => {
            playSound(note);
        }, index * 500); // Adjust the delay between notes if needed
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const pianoKeys = document.getElementById("pianoKeys");

    pianoKeys.addEventListener("click", function (event) {
        const target = event.target;

        if (target.tagName === "BUTTON") {
            const note = target.getAttribute("data-note");
            playSound(note);
        }
    });

    document.getElementById("markButton").addEventListener("click", function () {
        markUserChoices();
    });

    document.getElementById("startRecordingButton").addEventListener("click", function () {
        startRecording();
    });

    document.getElementById("stopRecordingButton").addEventListener("click", function () {
        stopRecording();
    });
});

function markUserChoices() {
    userChoices = [];
}

function startRecording() {
    isRecording = true;
}

function stopRecording() {
    isRecording = false;
}
