'use strict';

var userName = prompt('Hi there, what\'s your name?');
//console.log('User\'s name: ' + userName);
alert('Hi ' + userName + '! I\'m going to ask you a few questions. Give it your best guess and then I\'ll let you know the answer.');

var question01 = prompt('Do I have children?');
if (question01.toLowerCase() === 'no' || question01.toLowerCase() === 'n') {
//console.log('Correct! I do not have any kids, but am a proud aunt!');
  alert('Correct! I do not have any kids, but am a proud aunt!');
} else {
//console.log('Good guess, but I actually do not have any children. I am a proud aunt!');
  alert('Good guess, but I actually do not have any children. I am a proud aunt!');
}

var question02 = prompt('question02');
if (question02.toLowerCase() === 'no' || question02.toLowerCase() === 'n') {
//console.log('insertalert');
  alert('Correct! __________');
} else {
//console.log('insertalert');
  alert('Good guess, but ___________');
}

var question03 = prompt('question03');
if (question03.toLowerCase() === 'no' || question03.toLowerCase() === 'n') {
//console.log('insertalert');
  alert('Correct! __________');
} else {
//console.log('insertalert');
  alert('Good guess, but ___________');
}

var question04 = prompt('question04');
if (question04.toLowerCase() === 'no' || question04.toLowerCase() === 'n') {
//console.log('insertalert');
  alert('Correct! __________');
} else {
//console.log('insertalert');
  alert('Good guess, but ___________');
}

var question05 = prompt('question05');
if (question05.toLowerCase() === 'no' || question05.toLowerCase() === 'n') {
//console.log('insertalert');
  alert('Correct! __________');
} else {
//console.log('insertalert');
  alert('Good guess, but ___________');
}

alert('Thanks, ' + userName + ', for learning more about me!');