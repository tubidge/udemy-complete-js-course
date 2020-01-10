/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Score keeping
var scores, activePlayer, roundScore, dice, prevRoll;

init();

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    prevRoll = 0;
    dice = 0;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#current-0').textContent = roundScore;
    document.querySelector('#current-1').textContent = roundScore;
    document.querySelector('#score-0').textContent = scores[activePlayer];
    document.querySelector('#score-1').textContent = scores[activePlayer];
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('.winner-text').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
};

// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// var x = document.querySelector('#score-0').textContent;
// console.log(x);



document.querySelector('.btn-roll').addEventListener('click', function () {
    // console.log('Roll button was pressed!');

    // NEW: Check for a current dice value. If present, assign it to prevRoll.
    if (dice != 0) {
        prevRoll = dice;
    };
    console.log('Previous Roll: ' + prevRoll);

    // 1. Generate random number.
    dice = Math.floor(Math.random() * 6) + 1;
    // console.log('Dice roll: ' + dice);

    // 2. Display result.
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';


    // 3. Update round score if roll !== 1.
    // NEW: Remove player score if two 6s are rolled in a row.
    if (dice === 1) {
        nextPlayer();
    } else if (dice === 6 && prevRoll === 6) {
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        document.getElementById('current-' + activePlayer).textContent = '0';
        nextPlayer();
    } else {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    // 1. Add current score to player's global score.
    scores[activePlayer] += roundScore;

    // 2. Update UI.
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //3. Check if we have a winner.
    if (scores[activePlayer] >= 20) {
        console.log('We have a winner!');
        document.querySelector('.btn-roll').style.display = 'none';
        document.querySelector('.btn-hold').style.display = 'none';
        document.querySelector('.winner-text').style.display = 'block';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        nextPlayer();
    }
});

function nextPlayer() {
    roundScore = 0;
    dice = 0;
    document.getElementById('current-' + activePlayer).textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
};

document.querySelector('.btn-new').addEventListener('click', init);



/*************
 * Coding Challenge 6
 Change the game to follow these rules:

 1. A player loses their TOTAL score if they roll two 6s in a row. After this happens,
    it's the other player's turn.

 2. Add an input field to ask the players what score they want to play to.

 3. Add a second dice to the game. Same rules apply, if one 1 is rolled the turn is over,
    if two 6s are rolled score is wiped and the turn is over.
 */




//  WHERE I LEFT OFF:

// Cannot get prevRoll to reset to 0 when nextPlayer function triggers. 
// We don't want the previous player's roll to hang around.