function setupPlayerControls() {
    const player = document.getElementById("player");

    const btnPlay = document.getElementById("btnPlay");
    const btnPause = document.getElementById("btnPause");
    const btnStop = document.getElementById("btnStop");
    const btnPrev = document.getElementById("btnPrev");
    const btnNext = document.getElementById("btnNext");
    const btnVolume = document.getElementById("btnVolume");
    const btnFullscreen = document.getElementById("btnFullscreen");
    const btnMore = document.getElementById("btnMore");

    // PLAY
    btnPlay.onclick = () => {
        player.play();
        btnPlay.style.display = "none";
        btnPause.style.display = "flex";
    };

    // PAUSE
    btnPause.onclick = () => {
        player.pause();
        btnPause.style.display = "none";
        btnPlay.style.display = "flex";
    };

    // STOP
    btnStop.onclick = () => {
        player.pause();
        player.currentTime = 0;
        btnPause.style.display = "none";
        btnPlay.style.display = "flex";
    };

    // NEXT CHANNEL
    btnNext.onclick = () => {
        if (currentIndex < currentCategoryChannels.length - 1) {
            playChannel(currentIndex + 1);
        }
    };

    // PREVIOUS CHANNEL
    btnPrev.onclick = () => {
        if (currentIndex > 0) {
            playChannel(currentIndex - 1);
        }
    };

    // MUTE / UNMUTE
    btnVolume.onclick = () => {
        player.muted = !player.muted;
        btnVolume.textContent = player.muted ? "🔈" : "🔊";
    };

    // FULLSCREEN
    btnFullscreen.onclick = () => {
        if (!document.fullscreenElement) {
            player.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    };

    // MORE OPTIONS
    btnMore.onclick = () => {
        alert("More options coming soon: Quality, Speed, Info, Reload");
    };
}
