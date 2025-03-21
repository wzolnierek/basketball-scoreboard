let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let resetButton = document.getElementById("reset-btn")
let scoreH = 0
let scoreG = 0

function addScoreHome(value) {
    scoreH += value
    homeScore.textContent = scoreH
}

function addScoreGuest(value) {
    scoreG += value
    guestScore.textContent = scoreG
}

function  resetScore() {
    scoreH = 0
    scoreG = 0
    homeScore.textContent = scoreH
    guestScore.textContent = scoreG
}
