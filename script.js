const team1 = "Time 1"
const team2 = "Time 2"
let teamTurn = team1

let teamTurnText = document.querySelector("#teamVetoText")

const maps = document.querySelectorAll(".card")

for (let index = 0; index < maps.length; index++) {
    maps[index].addEventListener("click", chooseMap)
}

function chooseMap(event) {
    if (teamTurn == team1) {
        teamTurn = team2
    } else {
        teamTurn = team1
    }

    teamTurnText.innerHTML = `É a vez do ${teamTurn} vetar o mapa!`
}