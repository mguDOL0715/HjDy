const body = document.body;

document.getElementById('angry').addEventListener('click', () => {
    body.style.backgroundColor = '#FFE6E2';
    playAudio('audio/angry.mp3');
});

document.getElementById('happy').addEventListener('click', () => {
    body.style.backgroundColor = '#FFF9DD';
    playAudio('audio/happy.mp3');
});

document.getElementById('sad').addEventListener('click', () => {
    body.style.backgroundColor = '#E3F8FA';
    playAudio('audio/sad.mp3');
});

let isPlaying = false;
const audio = new Audio();

document.getElementById('playPause').addEventListener('click', function () {
    if (!isPlaying) {
        this.querySelector('img').src = 'images/멈춤.png';
        audio.play();
        isPlaying = true;
    } else {
        this.querySelector('img').src = 'images/재생.png';
        audio.pause();
        isPlaying = false;
    }
});

function playAudio(src) {
    audio.src = src;
    audio.play();
    document.getElementById('playPause').querySelector('img').src = 'images/멈춤.png';
    isPlaying = true;
}

const calendarIcon = document.getElementById('calendarIcon');
const backToMain = document.getElementById('backToMain');
const mainPage = document.getElementById('mainPage');
const calendarPage = document.getElementById('calendarPage');

calendarIcon.addEventListener('click', () => {
    mainPage.style.display = 'none';
    calendarPage.style.display = 'flex';
});

backToMain.addEventListener('click', () => {
    calendarPage.style.display = 'none';
    mainPage.style.display = 'block';
});
