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

    teamTurnText.innerHTML = `É a vez do ${teamTurn} banir o mapa!`

    event.currentTarget.classList.remove("scaleAnimation")
    event.currentTarget.classList.add("selected")
    event.currentTarget.removeEventListener("click", chooseMap)
}

const banText = document.querySelectorAll(".banText")

for (let index = 0; index < maps.length; index++) {
    maps[index].addEventListener("click", () => {
        banText[index].innerHTML = "Banido"
    })
}

const mapImg = document.querySelectorAll(".mapImg")

for (let index = 0; index < maps.length; index++) {
    maps[index].addEventListener("click", () => {
        mapImg[index].classList.add("mapImgAfterSelected")
    })
}