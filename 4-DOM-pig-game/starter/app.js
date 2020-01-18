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

// Initialization function to reset scores, rolls, and UI
function init() {

    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    prevRoll = [0, 0];
    dice = [0, 0];
    winScore = parseInt(prompt('What score would you like to play to?'));

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
    document.querySelector('.winning-score').textContent = 'Winning Score:  ' + winScore;
    if (isNaN(winScore)) {
        alert('Input must be a number.');
        init();
    } else {
        return;
    }
};

// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// var x = document.querySelector('#score-0').textContent;
// console.log(x);


// Roll button functionality
document.querySelector('.btn-roll').addEventListener('click', function () {
    // console.log('Roll button was pressed!');

    // NEW: Storing previous dice values to prevRoll variable.
    prevRoll[0] = dice[0];
    prevRoll[1] = dice[1];

    // 1. Generate two random numbers, assign to dice array.
    function rand() {
        return Math.floor(Math.random() * 6) + 1;
    };
    dice[0] = rand();
    dice[1] = rand();
    console.log('Dice roll: ' + dice);
    console.log('Previous Roll: ' + prevRoll);


    // 2. Display result to each die.
    var diceDOM1 = document.querySelector('#dice1');
    var diceDOM2 = document.querySelector('#dice2');

    diceDOM1.style.display = 'block';
    diceDOM2.style.display = 'block';
    diceDOM1.src = 'dice-' + dice[0] + '.png';
    diceDOM2.src = 'dice-' + dice[1] + '.png';


    // 3. Remove round score and switch players if either die = 1.
    //    If two 6s are rolled in a row on either die, or if two 6s are rolled together,
    //    remove round and player score then switch players.
    //    Otherwise, update round score.
    // NEW: Remove player score if two 6s are rolled in a row.

    if (dice[0] === 6 && dice[1] === 6) {
        console.log('Double 6s! You lost your score.');
        scores[activePlayer] = 0;
        roundScore = 0;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        document.getElementById('current-' + activePlayer).textContent = roundScore;
        nextPlayer();
    } else if (dice[1] === 6 && prevRoll[1] === 6) {
        console.log('Two 6s in a row! You lost your score.');
        scores[activePlayer] = 0;
        roundScore = 0;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        document.getElementById('current-' + activePlayer).textContent = roundScore;
        nextPlayer();
    } else if (dice[0] === 6 && prevRoll[0] === 6) {
        console.log('Two 6s in a row! You lost your score.');
        scores[activePlayer] = 0;
        roundScore = 0;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        document.getElementById('current-' + activePlayer).textContent = roundScore;
        nextPlayer();
    } else if (dice[0] === 1 || dice[1] === 1) {
        nextPlayer();
    }
    else {
        // Create round score by adding both dice.
        var rollScore = dice[0] + dice[1];
        roundScore += rollScore;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    }
});

// Hold button functionality
document.querySelector('.btn-hold').addEventListener('click', function () {
    // 1. Add current score to player's global score.
    scores[activePlayer] += roundScore;

    // 2. Update UI.
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //3. Check if we have a winner.
    if (scores[activePlayer] >= winScore) {
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
    dice = [0, 0];
    document.getElementById('current-' + activePlayer).textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    console.log('----------- Next player! ------------');
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


//  Left off at: 
// Finished challenges, but change score input to html element.
