document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("backgroundMusik");
    const playButton = document.getElementById("playMusik");
    const stopButton = document.getElementById("stopMusik");

    // Ambil status dari localStorage
    const isPlaying = localStorage.getItem("isPlaying") === "true";
    const currentTime = localStorage.getItem("currentTime");

    // Set waktu awal jika ada di localStorage
    if (currentTime) {
        audio.currentTime = parseFloat(currentTime);
    }

    // Jika sebelumnya musik sedang diputar, lanjutkan
    if (isPlaying) {
        audio.play();
        playButton.textContent = "Pause Music";
    }

    // Menangani aksi Play/Pause
    playButton.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            playButton.textContent = "Pause Music";
            localStorage.setItem("isPlaying", "true");
        } else {
            audio.pause();
            playButton.textContent = "Play Music";
            localStorage.setItem("isPlaying", "false");
        }
    });

    // Menangani aksi Stop
    stopButton.addEventListener("click", function () {
        audio.pause();
        audio.currentTime = 0;
        playButton.textContent = "Play Music";
        localStorage.setItem("isPlaying", "false");
        localStorage.setItem("currentTime", "0");
    });

    // Simpan posisi waktu saat halaman di-reload
    window.addEventListener("beforeunload", function () {
        localStorage.setItem("currentTime", audio.currentTime);
    });
});
