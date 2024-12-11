const watchNowBtn = document.getElementById("watchNowBtn");
const videoPopup = document.getElementById("videoPopup");
const closePopupBtn = document.getElementById("closePopupBtn");
const movieTrailer = document.getElementById("movieTrailer");


watchNowBtn.addEventListener("click", () => {
    videoPopup.classList.remove("hidden");
    movieTrailer.currentTime = 0; // Reset to the beginning
    movieTrailer.play();
});


closePopupBtn.addEventListener("click", () => {
    videoPopup.classList.add("hidden");
    movieTrailer.pause();
    movieTrailer.currentTime = 15; // Reset to 15 seconds
});
