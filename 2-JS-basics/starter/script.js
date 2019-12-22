/*******************
* Variables and Data Types
*******************/

// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;

// var job;
// console.log(job);

// job = 'Teacher';
// console.log(job);

// // Variable naming rules
// var _3years = 3;
// var johnMark = 'John and Mark';
// var if = 23;


/*******************
* Variables Mutation and Type Coercion
*******************/

var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old '
    + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old '
    + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);

/***************** 
* Basic Operators
*/

var year = 2020;
var yearJohn = year - 28;
var yearMark = year - 33;
console.log(yearJohn);