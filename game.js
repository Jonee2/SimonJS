const buttonColors = ['red', 'blue', 'green', 'yellow']
let gamePattern = []
let userClickedPattern = []
let gameStart = false
let level = 0

$(document).keydown(function() {
    if (!gameStart) {
        nextSequence()
        gameStart = true
    }
})

$('.btn').click(function() {
    let userChosenColor = $(this).attr("id")
    userClickedPattern.push(userChosenColor)
    console.log(userClickedPattern)
    playSound(userChosenColor)
    animatePress(userChosenColor)
    checkAnswer(userClickedPattern.length-1)
});

function nextSequence() {
    userClickedPattern = []
    level += 1 
    let randomNumber = Math.floor(Math.random() * 4)
    let randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)
    $(`.${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    playSound()
    $('h1').text(`level ${level}`)
}
function playSound(name) {
    let audio = new Audio(`sounds/${name}.mp3`)
    audio.play()
}
function animatePress(currentColor) {
    $(`.${currentColor}`).addClass('pressed')
    setTimeout(() => { $(`.${currentColor}`).removeClass('pressed') }, 100)
}
function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) { console.log('success') }
    else {
        $('body').addClass('game-over')
        setTimeout(() => { $('body').removeClass('game-over') }, 200)
        $('h1').text('Game Over, press any key to restart')
        console.log('fail')
        startOver()
    }
    if (userClickedPattern.length === gamePattern.length)
    {
        setTimeout(function () {nextSequence();}, 1000)
    } 
}
function startOver() {
    level = 0
    gamePattern = []
    gameStart = false
}