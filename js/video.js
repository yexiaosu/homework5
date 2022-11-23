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

document.getElementById("slower").onclick = function() {
    if (vid.playbackRate > 0.5) {
        vid.playbackRate = vid.playbackRate / 2;
    } else {
        alert("Video is at slowest speed!");
    }
};

document.getElementById("faster").onclick = function() {
    if (vid.playbackRate < 2) {
        vid.playbackRate = vid.playbackRate * 2;
    } else {
        alert("Video is at fastest speed!");
    }
};