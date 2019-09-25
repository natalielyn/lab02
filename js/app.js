'use strict';

// var userName = prompt('Hi there, what\'s your name?');
// //console.log('User\'s name: ' + userName);
// alert('Hi ' + userName + '! I\'m going to ask you a few questions. Give it your best guess and then I\'ll let you know the answer.');

// var question01 = prompt('Do I have children?');
// if (question01.toLowerCase() === 'no' || question01.toLowerCase() === 'n') {
// //console.log('Correct! I do not have any kids, but am a proud aunt!');
//   alert('Correct! I do not have any kids, but am a proud aunt!');
// } else {
// //console.log('Good guess, but I actually do not have any children. I am a proud aunt!');
//   alert('Good guess, but I actually do not have any children. I am a proud aunt!');
// }

// var question02 = prompt('Is my favorite outdoor activity running?');
// if (question02.toLowerCase() === 'no' || question02.toLowerCase() === 'n') {
// //console.log('Correct! Running is NOT my jam. I LOVE hiking though and I\'ll wave to the hardcore trail runners as they pass me by.');
//   alert('Correct! Running is NOT my jam. I LOVE hiking though and I\'ll wave to the hardcore trail runners as they pass me by.');
// } else {
// //console.log('Good guess, but running is NOT my jam. I LOVE hiking though and I\'ll wave to the hardcore trail runners as they pass me by.');
//   alert('Good guess, but running is NOT my jam. I LOVE hiking though and I\'ll wave to the hardcore trail runners as they pass me by.');
// }

// var question03 = prompt('Is my primary goal in life to work hard in order to spoil my future dog?');
// if (question03.toLowerCase() === 'yes' || question03.toLowerCase() === 'y') {
// //console.log('Correct! I love dogs (and most all other animals) and can\'t wait to have one or more to spoil.');
//   alert('Correct! I love dogs (and most all other animals) and can\'t wait to have one or more to spoil.');
// } else {
// //console.log('Good guess, but I love dogs (and most all other animals) and can\'t wait to have one or more to spoil.');
//   alert('Good guess, but I love dogs (and most all other animals) and can\'t wait to have one or more to spoil.');
// }

// var question04 = prompt('Do I like cilantro?');
// if (question04.toLowerCase() === 'no' || question04.toLowerCase() === 'n') {
// //console.log('Correct! Cilantro tastes like soap to me (apparently this is a genetic thing). Bummer since it\'s common in so many great dishes.');
//   alert('Correct! Cilantro tastes like soap to me (apparently this is a genetic thing). Bummer since it\'s common in so many great dishes.');
// } else {
// //console.log('Good guess, but cilantro tastes like soap to me (apparently this is a genetic thing). Bummer since it\'s common in so many great dishes.');
//   alert('Good guess, but cilantro tastes like soap to me (apparently this is a genetic thing). Bummer since it\'s common in so many great dishes.');
// }

// var question05 = prompt('Is my current favorite TV series Mr. Robot?');
// if (question05.toLowerCase() === 'yes' || question05.toLowerCase() === 'y') {
// //console.log('Correct! Mr. Robot is an awesome show. Why aren\'t you watching it right now?');
//   alert('Correct! Mr. Robot is an awesome show. Why aren\'t you watching it right now?');
// } else {
// //console.log('Good guess, but Mr. Robot is an awesome show. Why aren\'t you watching it right now?');
//   alert('Good guess, but Mr. Robot is an awesome show. Why aren\'t you watching it right now?');
// }

// alert('Thanks, ' + userName + ', for learning more about me!');


//the number the user needs to guess to be correct
var correctNum = 17;
//the number the user guessed
var numGuess = parseInt(prompt('I\'m thinking of a number between 1 and 20. Try guessing what it is:'));
console.log(numGuess);
//try counter
var tryCounter = 0;

do {
  if (numGuess < correctNum) {
    numGuess = parseInt(prompt('Your guess is too low. Try again:'));
    console.log(numGuess);
  } else if (numGuess > correctNum) {
    numGuess = parseInt(prompt('Your guess is too high. Try again:'));
    console.log(numGuess);
  } else {
    alert('You guessed right!');
  }
  tryCounter++;
} while (tryCounter < 3);

//need to tell user correct answer if they didn't guess it 

// * Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// * Indicates through an alert if the guess is “too high” or “too low”.
// * It should give the user exactly four opportunities to get the correct answer.
// * After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.
