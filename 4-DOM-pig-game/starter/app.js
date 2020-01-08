/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Score keeping
var scores = [0, 0];
var roundScore = 0;
var activePlayer = 0;

var dice = Math.floor(Math.random() * 6) + 1;
console.log('Dice roll: ' + dice);

document.querySelector('#score-0').textContent = dice;
document.getElementById('score-1').textContent = dice;