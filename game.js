const buttonColors = ['red', 'blue', 'green', 'yellow']
let gamePattern = []
let userClickedPattern = []
let level = 0
let gameStart = false


$('.btn').click(() => {
    let userChosenColor = $(this).attr("id")
    userClickedPattern.push(userChosenColor)
    console.log(userClickedPattern)
});

function nextSequence() {
    level += 1 
    let randomNumber = Math.floor(Math.random() * 4)
    let randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)
    $(`.${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    playSound()
    $('h1').text(`${level}`)
}
function playSound(name) {
    let audio = new Audio(`sounds/${randomChosenColor}.mp3`)
    audio.play()
}
function animatePress(currentColor) {
    $('.btn').addClass('pressed')
    setTimeout(() => { $('.btn').removeClass('pressed') }, 100)
}
$(document).keydown((key)=> {
    gameStart = true
    nextSequence()
})