'use strict';

var userName = prompt('Hi there, what\'s your name?');
console.log('User\'s name: ' + userName);
alert('Hi ' + userName + '! I\'m going to ask you a few questions. Give it your best guess and then I\'ll let you know the answer.');

var children = prompt('Do I have children?');

if (children.toLowerCase() === 'no' || children.toLowerCase() === 'n') {
  alert('Correct! I do not have any kids, but am a proud aunt!');
} else {
  alert('Good guess, but I actually do not have any children. I am a proud aunt!');
}

alert('Thanks, ' + userName + ', for learning more about me!');

// quizzes the user on fun facts gives the user some basic information about who you are and where you came from

// * Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input so that it can be validated (hint: look into the .toUpperCase() or .toLowerCase() functions). Be sure to let the user know if they answered the question correctly by alerting them with a response.
// * Add console.log() messages within your app to notify the user if they are correct. Before submitting, comment out (don’t delete) your console.log() messages and replace them with the alerts() to to complete the project.

// As a user, I would like a personalized welcome message so that I feel like I am interacting with the site owner.
// * Ask the user their name through a prompt()
// * Display that name back to the user through a custom greeting welcoming them to your site.
// * Display the user’s name back to them in your final message to the user. -->

// var userName = prompt('Please give me your name');
// // alert('Hello ' + userName + 'how are you doing today?')

// // var favColor = prompt('What is your favorite color');
// // alert(userName + ' I see your favorite color is ' + favColor);

// // var favSport = prompt('What is your favoriate sport?');
// // alert('Wow, my favorite sport is ' + favSport + ' as well. It was very nice to meet you!');

// var loveDogs = prompt('Hey ' + userName + ' do you like dogs?');

// if (loveDogs.toLowerCase() === 'yes') {
//     alert('great!');
// } else {
//     alert('oh ,that\'s too bad');
// }