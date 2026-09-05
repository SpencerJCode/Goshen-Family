class goshenWebEngine {
    recordingEngine = new recordingEngine();
}

const recordingEngine = class {
    constructor() {
        this.audioPath = `/assets/recordings/`;
        this.recordingName = 'Numbers 1_20.mp3';
        this.audio = new Audio(this.audioPath + this.recordingName);
        this.button = document.getElementById("recording_player");
        this.thingsOfLifeSelector = null;
        this.scriptureSelector = null;
    }

    initialLoad() {
        this.thingsOfLifeSelector = document.getElementById("things_of_life");
        this.scriptureSelector = document.getElementById("scripture");
        this.thingsOfLifeSelector.addEventListener("change", (event) => {
            console.log(event.target.value)
            this.goToRecording(event.target.value);
        });
        this.scriptureSelector.addEventListener("change", (event) => {
            console.log(event.target.value)
            this.goToRecording(event.target.value);
        });
    }

    loadRecording(recording) {
        this.recordingName = recording;
        this.audio = new Audio(this.audioPath + this.recordingName);
    }

    goToRecording(recording) {
        this.button = document.getElementById("recording_player");
        this.audio.pause();
        this.button.innerHTML = "Play >";
        var recording = recording;
        console.log(recording);
        this.loadRecording(recording);
        this.audio.addEventListener("ended", function(){
            this.currentTime = 0;
            let playButton = document.getElementById("recording_player");
            playButton.innerHTML = "Play >";
        });
    }

    playRecording() {
        this.button = document.getElementById("recording_player");
        if (this.button.innerHTML == "Play &gt;") {
            this.audio.play();
            this.button.innerHTML = "Stop";
        } else {
            this.audio.pause();
            this.button.innerHTML = "Play >";
        }
    }
    
    stopRecording() {
        this.audio.pause();
    }

}
goshenWebEngine = new goshenWebEngine();
