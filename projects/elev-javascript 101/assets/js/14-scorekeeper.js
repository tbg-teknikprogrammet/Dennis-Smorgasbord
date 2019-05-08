// select the elements
var p1Display = document.getElementById("p1Count")
var p1Score = 0
var p2Display = document.getElementById("p2Count")
var p2Score = 0
var playingTo = document.getElementById("playingTo")
var winningScore = 0
var inputNumber = document.getElementsByTagName("input")[0]
var p1Btn = document.getElementById("p1")
var p2Btn = document.getElementById("p2")
var resetBtn = document.getElementById("reset")
var winnerText = document.getElementById("winner")

inputNumber.addEventListener("input", function() {
    playingTo.innerHTML = this.value
    winningScore = Number(this.value)
})