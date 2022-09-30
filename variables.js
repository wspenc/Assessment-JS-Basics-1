//////////////////PROBLEM 1////////////////////
/* Create a variable called 'myName' with a value that is your name as a string. */

//CODE HERE 
let myName = "Will";
//////////////////PROBLEM 2////////////////////
/* Create a variable called 'faveNum' with a value that is your favorite number. */

//CODE HERE
let faveNum = 12;
//////////////////PROBLEM 3////////////////////
/* Create a variable called 'lovesCode' and assign it a boolean value. */

//CODE HERE
//used the true boolean, since it is a boolean (data type) quotes are not needed.
let lovesCode = true;
//////////////////PROBLEM 4////////////////////
/*
  Write an if-statement that checks if the faveNum variable is 
  equal to 13. If it is, console.log('lucky 13!'). 
  If it's not, console.log('not lucky 13').
*/

//CODE HERE
//used strict eqauls to see if faveNum would log the true or false statement
if (faveNum === 13){
  console.log('Lucky 13');
}
console.log('Not lucky 13');
//////////////////PROBLEM 5////////////////////
/*
  Write a for loop that prints out your faveNum 5 times.
*/

//CODE HERE
//made it less than five so that way it would only loop through it the required ammount
for(let i = 0; i < 5; i++){
  console.log(faveNum);
}
