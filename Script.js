

//0-1/3 = rock
//1/3-2/3=paper
// 2/3 - 1 =Scissor;
let computermove = "";
function rps(r) {
    if (r >= 0 && r <= 1 / 3) {
        computermove = "rock";
    } else if (r > 1 / 3 && r <= 2 / 3) {
        computermove = "paper";
    } else if (r > 2 / 3 && r < 1) {
        computermove = "scissor";
    }
    return computermove;
}
// score board
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    ties: 0,
    loss: 0
};

// console.log(JSON.parse(localStorage.getItem('score')));

let userValue = '';
let finale = '';
let compfinale = '';
let result = '';
const pickComputerMove = (userValue) => {
    // div2.style.display="none";
    var random = Math.random();
    result = rps(random);
    if (userValue == result) {
        finale = 'tie'
        compfinale = 'tie'
    } else if ((userValue == "rock" && result == "scissor") || (userValue == "paper" && result == "rock") || (userValue == "scissor" && result == "paper")) {
        finale = 'win';
        compfinale = 'loss'
    } else if ((result == "rock" && userValue == "scissor") || (result == "paper" && userValue == "rock") || (result == "scissor" && userValue == "paper")) {
        finale = 'loss'
        compfinale = 'win';
    }
    // score board;
    if (finale == 'win') {
        score.wins += 1;
    } else if (finale == 'loss') {
        score.loss += 1;
    } else if (finale == 'tie') {
        score.ties += 1;
    }


    localStorage.setItem('score', JSON.stringify(score));// local storage only support strings
    finalResult = document.querySelector('.result');
    finalResult.innerHTML = `You've ${finale} `;
    moves = document.querySelector('.moves');
    moves.innerHTML = ` you <img src="Images/${userValue}-emoji.png" class="moveIcon">  <img src="Images/${result}-emoji.png" alt="" srcset="" class="moveIcon"> Computer`;
    updateScore();

    //     alert(`You picked ${userValue}. Computer picked ${result}. ${finale}
    // Wins: ${score.wins}, Losses: ${score.loss}, Ties: ${score.ties}`);

}
function updateScore() {
    document.querySelector('#ans').innerHTML = `Wins: ${score.wins}, Losses: ${score.loss}, Ties: ${score.ties}`;
}






