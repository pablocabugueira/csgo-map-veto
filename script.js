const card = document.querySelector(".card")
const banText = document.querySelectorAll(".banText")
const banIcon = document.querySelectorAll(".banIcon")
const mapImg = document.querySelectorAll(".mapImg")
const mapName = document.querySelector(".mapName")

card.addEventListener("click", function() {
    banIcon.style.opacity = "1"
    banText.style.opacity = "1"
    mapImg.style.opacity = "0.15"
    mapName.style.opacity = "0.15"

    banText.innerHTML = "VETADO"
})