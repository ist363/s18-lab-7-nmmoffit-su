//Element nodes
const buttons = document.getElementsByClassName('btn-choice');
const playerScoreText = document.getElementById('playerScoreText');
const computerScoreText = document.getElementById('computerScoreText');

//Event Listeners
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(event){
        let playerChoice = event.currentTarget.getAttribute('data-option');
        // console.log(playerChoice);
        playRound(playerChoice); 
    })
}


//Variables for the game
const choices = ['Rock', 'Paper', 'Scissors'];
var playerScore = 0;
var computerScore = 0;
const winningScore = 10;

//Play a round of Rock, Paper, Scissors
function playRound(playerChoice) {
    // console.log(playerChoice);

    let randomIndex = Math.floor(Math.random() * choices.length);
    var computerChoice = choices[randomIndex];
    // console.log(computerChoice);

    if(playerChoice == computerChoice) {
        console.log("It was a tie");
        return;
    };

    if(playerChoice == 'Rock') {
        if(computerChoice == 'Scissors') {
            playerScore++;
            console.log('Player Won');
        } else if(computerChoice == 'Paper') {
            computerScore++;
            console.log('Computer Won');
    } else if(playerChoice == 'Paper') {
        if(computerChoice == 'Rock') {
            playerScore++;
            console.log('Player Won');
        } else if(computerChoice == 'Scissors') {
            computerScore++;
            console.log('Computer Won');
        }
    } else if(playerChoice == 'Scissors') {
        if(computerChoice == 'Paper') {
            playerScore++;
            console.log('Player Won');
        } else if(computerChoice == 'Rock') {
            computerScore++;
            console.log('Computer Won');
        }

    playerScoreText.innerHTML = playerScore;
    computerScoreText.innerHTML = computerScore;

if(playerScore == winningScore || computerScore == winningScore){
    gameOver(playerScore, computerScore);
    resultText(playerScoreText, computerScoreText);
}

//Update the text between the scores with the result of the round and with what each player played
function resultText() {
    playerScoreText = 0;
    computerScoreText = 0;
}


//Reset scores and text elements to 0
function resetGame() {
    playerScore = 0;
    computerScore = 0;

    playerScoreText.innerHTML = 0;
    computerScoreText.innerHTML = 0;
}


//Alert the player whether they won or not after someone reaches 10 points
            function gameOver(playerScore, computerScore) {
            if(playerScore > computerScore) {
                    alert("Dearest human, you have won the game and bested the computers. Play again?");
                } else {
                    alert("Our deepest condolences, but you did not win this round. Would you like to try again?");
                }
            }
        }
    }
}