'use strict';

var rightAnswer = 0;

var userName = prompt('Hi there, what\'s your name?');
//console.log('User\'s name: ' + userName);
alert('Hi ' + userName + '! I\'m going to ask you a few questions. Give it your best guess and then I\'ll let you know the answer.');

var question01 = prompt('Do I have children?');
if (question01.toLowerCase() === 'no' || question01.toLowerCase() === 'n') {
//console.log('Correct! I do not have any kids, but am a proud aunt!');
  alert('Correct! I do not have any kids, but am a proud aunt!');
  rightAnswer++;
} else {
//console.log('Good guess, but I actually do not have any children. I am a proud aunt!');
  alert('Good guess, but I actually do not have any children. I am a proud aunt!');
}

var question02 = prompt('Is my favorite outdoor activity running?');
if (question02.toLowerCase() === 'no' || question02.toLowerCase() === 'n') {
//console.log('Correct! Running is NOT my jam. I LOVE hiking though and I\'ll wave to the hardcore trail runners as they pass me by.');
  alert('Correct! Running is NOT my jam. I LOVE hiking though and I\'ll wave to the hardcore trail runners as they pass me by.');
  rightAnswer++;
} else {
//console.log('Good guess, but running is NOT my jam. I LOVE hiking though and I\'ll wave to the hardcore trail runners as they pass me by.');
  alert('Good guess, but running is NOT my jam. I LOVE hiking though and I\'ll wave to the hardcore trail runners as they pass me by.');
}

var question03 = prompt('Is my primary goal in life to work hard in order to spoil my future dog?');
if (question03.toLowerCase() === 'yes' || question03.toLowerCase() === 'y') {
//console.log('Correct! I love dogs (and most all other animals) and can\'t wait to have one or more to spoil.');
  alert('Correct! I love dogs (and most all other animals) and can\'t wait to have one or more to spoil.');
  rightAnswer++;
} else {
//console.log('Good guess, but I love dogs (and most all other animals) and can\'t wait to have one or more to spoil.');
  alert('Good guess, but I love dogs (and most all other animals) and can\'t wait to have one or more to spoil.');
}

var question04 = prompt('Do I like cilantro?');
if (question04.toLowerCase() === 'no' || question04.toLowerCase() === 'n') {
//console.log('Correct! Cilantro tastes like soap to me (apparently this is a genetic thing). Bummer since it\'s common in so many great dishes.');
  alert('Correct! Cilantro tastes like soap to me (apparently this is a genetic thing). Bummer since it\'s common in so many great dishes.');
  rightAnswer++;
} else {
//console.log('Good guess, but cilantro tastes like soap to me (apparently this is a genetic thing). Bummer since it\'s common in so many great dishes.');
  alert('Good guess, but cilantro tastes like soap to me (apparently this is a genetic thing). Bummer since it\'s common in so many great dishes.');
}

var question05 = prompt('Is my current favorite TV series Mr. Robot?');
if (question05.toLowerCase() === 'yes' || question05.toLowerCase() === 'y') {
//console.log('Correct! Mr. Robot is an awesome show. Why aren\'t you watching it right now?');
  alert('Correct! Mr. Robot is an awesome show. Why aren\'t you watching it right now?');
  rightAnswer++;
} else {
//console.log('Good guess, but Mr. Robot is an awesome show. Why aren\'t you watching it right now?');
  alert('Good guess, but Mr. Robot is an awesome show. Why aren\'t you watching it right now?');
}

alert('Thanks, ' + userName + ', for learning more about me!');

//the number the user needs to guess to be correct
var correctNum = 17;
//the number the user guessed
var numGuess = parseInt(prompt('I\'m thinking of a number between 1 and 20. Try guessing what it is:'));
console.log(numGuess);
//"i" stands for the user's current try number
var i = 0;
for (i = 0; i < 3; i++) {
  if (numGuess < correctNum) {
    numGuess = parseInt(prompt('Your guess is too low. Try again:'));
    console.log(numGuess);
  } else if (numGuess > correctNum) {
    numGuess = parseInt(prompt('Your guess is too high. Try again:'));
    console.log(numGuess);
  } else if (numGuess === 17) {
    alert('You guessed right!');
    console.log(numGuess);
    rightAnswer++;
    break;
    //if someone enters something other than a number
  } else {
    numGuess = parseInt(prompt('Please enter a number:'));
    console.log(numGuess);
  }
}

alert('The secret number is 17');

// Quiz Part 07 - Guessing My Fav Animals
var myFavAnimals = ['cows', 'pigs', 'dogs', 'hedgehogs', 'rockchucks'];
// changed the returned value of the following variable to lowercase in order to match array values above
var animalGuess = (prompt('Try guessing my favorite animals. Write your guess in plural format (e.g. "squirrels" which are awesome tree-friends, but not on my list for this game)')).toLowerCase();
// console.log(animalGuess);
// "i" stands for the user's current try number
for (i = 0; i < 5; i++) {
  // I found the "includes" method shown below at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
  if (!myFavAnimals.includes(animalGuess)) {
    animalGuess = prompt('This is not one of my favorite animals. Try guessing again:');
  // console.log(animalGuess);
  } else {
    animalGuess = prompt('Nice! This is on of my fav animals. Try guessing another one:');
    // console.log(animalGuess);
    rightAnswer++;
  }
}
alert ('My favorite animals are cows, pigs, dogs, hedgehogs, and rockchucks.')

alert('Thanks for taking my quiz! Nice job, ' + userName + ', you got ' + rightAnswer + ' questions correct!');
