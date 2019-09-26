'use strict';

var userName = prompt('Hi there, what\'s your name?');
alert('Hi ' + userName + '! I\'m going to ask you a few questions. Give it your best guess and then I\'ll let you know the answer.');
var rightAnswer = 0;

//Question 01
var question01 = prompt('Do I have children?');
if (question01.toLowerCase() === 'no' || question01.toLowerCase() === 'n') {
  alert('Correct! I do not have any kids, but am a proud aunt!');
  rightAnswer++;
} else {
  alert('Good guess, but I actually do not have any children. I am a proud aunt!');
}

//Question 02
var question02 = prompt('Is my favorite outdoor activity running?');
if (question02.toLowerCase() === 'no' || question02.toLowerCase() === 'n') {
  alert('Correct! Running is NOT my jam. I LOVE hiking though and I\'ll wave to the hardcore trail runners as they pass me by.');
  rightAnswer++;
} else {
  alert('Good guess, but running is NOT my jam. I LOVE hiking though and I\'ll wave to the hardcore trail runners as they pass me by.');
}

//Question 03
var question03 = prompt('Is my primary goal in life to work hard in order to spoil my future dog?');
if (question03.toLowerCase() === 'yes' || question03.toLowerCase() === 'y') {
  alert('Correct! I love dogs (and most all other animals) and can\'t wait to have one or more to spoil.');
  rightAnswer++;
} else {
  alert('Good guess, but I love dogs (and most all other animals) and can\'t wait to have one or more to spoil.');
}

//Question 04
var question04 = prompt('Do I like cilantro?');
if (question04.toLowerCase() === 'no' || question04.toLowerCase() === 'n') {
  alert('Correct! Cilantro tastes like soap to me (apparently this is a genetic thing). Bummer since it\'s common in so many great dishes.');
  rightAnswer++;
} else {
  alert('Good guess, but cilantro tastes like soap to me (apparently this is a genetic thing). Bummer since it\'s common in so many great dishes.');
}

//Question 05
var question05 = prompt('Is my current favorite TV series Mr. Robot?');
if (question05.toLowerCase() === 'yes' || question05.toLowerCase() === 'y') {
  alert('Correct! Mr. Robot is an awesome show. Why aren\'t you watching it right now?');
  rightAnswer++;
} else {
  alert('Good guess, but Mr. Robot is an awesome show. Why aren\'t you watching it right now?');
}

//Question 06 - Guessing a number
var correctNum = 17;
var numGuess = parseInt(prompt('I\'m thinking of a number between 1 and 20. Try guessing what it is:'));
var i = 0;
for (i = 0; i < 3; i++) {
  if (numGuess < correctNum) {
    numGuess = parseInt(prompt('Your guess is too low. Try again:'));
  } else if (numGuess > correctNum) {
    numGuess = parseInt(prompt('Your guess is too high. Try again:'));
  } else if (numGuess === 17) {
    alert('You guessed right!');
    rightAnswer++;
    break;
  } else {
    numGuess = parseInt(prompt('Please enter a number:'));
  }
}

alert('The secret number is 17');

// Question 07 - Guessing my favorite animals
var myFavAnimals = ['cows', 'pigs', 'dogs', 'hedgehogs', 'rockchucks'];
var animalGuess = (prompt('Try guessing my favorite animals. Write your guess in plural format (e.g. "squirrels" which are our awesome tree-neighbors, but not on my list for this game).')).toLowerCase();
for (i = 0; i < 5; i++) {
  if (!myFavAnimals.includes(animalGuess)) {
    animalGuess = prompt('This is not one of my favorite animals. Try guessing again:');
  } else {
    animalGuess = prompt('Nice! This is on of my fav animals. Try guessing another one:');
    rightAnswer++;
  }
}
alert ('My favorite animals are cows, pigs, dogs, hedgehogs, and rockchucks.');

alert('Nice job, ' + userName + ', you got ' + rightAnswer + ' questions right! Thanks for taking my quiz!');
