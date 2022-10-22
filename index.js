let homecount = 0
let homeScore = document.getElementById("home")
let guestcount = 0
let guestScore = document.getElementById("guest")

function hone() {
    homecount += 1
    homeScore.textContent = homecount
}

function htwo() {
     homecount += 2
    homeScore.textContent = homecount
}

function hthree() {
     homecount += 3
    homeScore.textContent = homecount
}

function gone() {
     guestcount += 1
    guestScore.textContent = guestcount
}

function gtwo() {
    guestcount += 2
    guestScore.textContent = guestcount
}

function gthree() {
    guestcount += 3
    guestScore.textContent = guestcount
}