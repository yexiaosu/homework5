// Add js here.
var vid = document.getElementById("videoplayer");

window.onload = function () {
  vid.loop = false;
  vid.autoplay = false;
  vid.load();
};

document.getElementById("play").onclick = function() {
    vid.play();
};

document.getElementById("pause").onclick = function() {
    vid.pause();
};