const scores = JSON.parse(localStorage.getItem('scores')) || {
    wins: 0,
    losses: 0,
    draws: 0
    };

    displayResultData();
    let intervalId;
    let isautoPlaying = false;

function playGame(playerHand) {
    playComputerMove() 
    Outcome = '';
    if(playerHand === 'Paper') {

    if ( computerHandPlay === 'Rock') {
    Outcome = 'You Win!'
    }
    else if ( computerHandPlay === 'Paper') {
    Outcome = 'Tie!'
    }
    else if ( computerHandPlay === 'Scissor') {
    Outcome = 'You Lose!'
    }

    } else if(playerHand === 'Scissor') {
    if ( computerHandPlay === 'Rock') {
    Outcome = 'You Lose!'
    }
    else if ( computerHandPlay === 'Paper') {
    Outcome = 'You Win!'
    }
    else if ( computerHandPlay === 'Scissor') {
    Outcome = 'Tie!'
    }

    } else if(playerHand === 'Rock') {

    if ( computerHandPlay === 'Rock') {
    Outcome = 'Tie!'
    }
    else if ( computerHandPlay === 'Paper') {
    Outcome = 'You Lose!'
    }
    else if ( computerHandPlay === 'Scissor') {
    Outcome = 'You Win!'
    }           
    }

    if(Outcome === 'Tie!'){
    scores.draws +=1
    } else  if(Outcome === 'You Lose!'){
    scores.losses += 1
    } else if(Outcome === 'You Win!'){
    scores.wins += 1
    }
    localStorage.setItem('scores', JSON.stringify(scores))

    displayResultData();

    document.querySelector('.gameResult').innerHTML = Outcome;

    document.querySelector('.playersHandPlayed')
    .innerHTML = `You <image class="hand-img" src="RPS holder/${playerHand}-emoji.png"></image>
    <image class="hand-img" src="RPS holder/${computerHandPlay}-emoji.png"></image> Computer`;
};


function playComputerMove() {
        const randomize = Math.random();
        computerHandPlay = ''

        if (randomize >= 0 && randomize < 1 / 3) {
        computerHandPlay = 'Rock'
        }
        else if(randomize >= 1 / 3 && randomize < 2 / 3) {
        computerHandPlay = 'Paper'
        } 
        else if(randomize >= 2 / 3 && randomize < 1) {
        computerHandPlay = 'Scissor'
        }
        return computerHandPlay
    };
   
function Autoplay(){     
        //!isautoPlaying is the same as isautoPlaying === false 
                 if(!isautoPlaying){ 
                    intervalId = setInterval(
                        function(){
                            const playerHand = playComputerMove();
                            playGame(playerHand);
                         }, 1000
                    )
                    console.log(intervalId)
                    isautoPlaying = true;
                    document.querySelector('.auto-btn-js').innerHTML = 'Stop Play'
                } else{
                    clearInterval(intervalId)
                    isautoPlaying = false;
                     document.querySelector('.auto-btn-js').innerHTML = 'Auto Play'
                }
             };

function displayResultData(){
                document.querySelector('.resultScores').innerHTML = `
                Wins: ${scores.wins},  Losses: ${scores.losses},  Draws: ${scores.draws}`;  
                };
       
                document.querySelector('.autoBtn').addEventListener('click', function(){
                    Autoplay();
                });