/**
 * SELECTOR
 */
const rockPlayer = document.getElementById("rockPlayer")
const paperPlayer = document.getElementById("paperPlayer")
const scissorsPlayer = document.getElementById("scissorsPlayer")


function chooseRock(){
    rockPlayer.classList.add("bgAbu")
    choosePlayer("rock")
    paperPlayer.removeAttribute("onclick")
    scissorsPlayer.removeAttribute("onclick")
}

function choosePaper(){
    paperPlayer.classList.add("bgAbu")
    choosePlayer("paper")
    rockPlayer.removeAttribute("onclick")
    scissorsPlayer.removeAttribute("onclick")
}

function chooseScissors(){
    scissorsPlayer.classList.add("bgAbu")
    choosePlayer("scissors")
    rockPlayer.removeAttribute("onclick")
    paperPlayer.removeAttribute("onclick")
}

function choosePlayer(choose){
    if (choose === "rock"){
        chooseCom(randomComPlayer)
        gamePlay(choose,randomComPlayer)
     
    } else if (choose === "paper"){
        chooseCom(randomComPlayer)
        gamePlay(choose,randomComPlayer)

    } else if (choose === "scissors"){
        chooseCom(randomComPlayer)
        gamePlay(choose,randomComPlayer)

    }
}

const rockCom = document.getElementById("rockCom")
const paperCom = document.getElementById("paperCom")
const scissorsCom = document.getElementById("scissorsCom")


const comPlayer = ['rock', 'paper', 'scissors']
const randomComPlayer = comPlayer[Math.floor(Math.random()*comPlayer.length)]

function chooseCom(choose2){
    if (choose2 === 'rock'){
        rockCom.classList.add("bgAbu")
        // rockCom.style.height = "10vh"
    } else if (choose2 === 'paper') {
        paperCom.classList.add("bgAbu")
        // paperCom.style.height = "10vh"
    } else if (choose2 === 'scissors') {
        scissorsCom.classList.add("bgAbu")
        // scissorsCom.style.height = "10vh"
    }
}

let bgDraw = document.getElementById("bgResult")

const gamePlay = (player1,player2) => {
    let cekPlayer = player1+player2
    console.log(cekPlayer)
    if (cekPlayer === "rockrock" || cekPlayer === "paperpaper" || cekPlayer === "scissorsscissors"){
        console.log("draw")
        bgDraw.src='assets/html2-bg-draw.png'
        bgDraw.classList.add("bgDraw")
    } else if (cekPlayer === "rockscissors" || cekPlayer === "paperrock" || cekPlayer === "scissorspaper"){
        console.log("player 1 win")
        bgDraw.src='assets/html2-bgPlayer1Win.png'
        bgDraw.classList.add("bgDraw")
    } else if (cekPlayer === "rockpaper" || cekPlayer === "paperscissors" || cekPlayer === "scissorsrock"){
        console.log("COM win")
        bgDraw.src='assets/html2-bgComWin.png'
        bgDraw.classList.add("bgDraw")
    }
}

function refreshPage(){
    window.location.reload()
}

