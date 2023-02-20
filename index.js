let homeScore = 0
let homeScoreEl = document.getElementById("home-score")

let awayScore = 0
let awayScoreEl = document.getElementById("away-score")

function homeOnePoint() {
    homeScore+=1
    
    homeScoreEl.textContent = homeScore
    
}

function homeTwoPoint() {
    homeScore+=2
    
    homeScoreEl.textContent = homeScore
    
}

function homeThreePoint() {
    homeScore+=3
    
    homeScoreEl.textContent = homeScore
    
}

function awayOnePoint() {
    awayScore+=1
    
    awayScoreEl.textContent = awayScore
}

function awayTwoPoint() {
    awayScore+=2
    
    awayScoreEl.textContent = awayScore
}

function awayThreePoint() {
    awayScore+=3
    
    awayScoreEl.textContent = awayScore
}