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

// var firstName = 'John';
// var age = 28;

// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'Teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old '
//     + job + '. Is he married? ' + isMarried);

// Variable mutation
// age = 'twenty eight';
// job = 'driver';

// alert(firstName + ' is a ' + age + ' year old '
//     + job + '. Is he married? ' + isMarried);

// var lastName = prompt('What is his last name?');
// console.log(firstName + ' ' + lastName);

/***************** 
* Basic Operators
*/

// var year, yearJohn, yearMark;
// year = 2020;
// ageJohn = 28;
// ageMark = 33;

// // Math Operators
// yearJohn = year - ageJohn;
// yearMark = year - ageMark;
// console.log(yearJohn);


// // Logical Operators
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);

// // Typeof Operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);



/********************
* Operator precedence
*/

var now = 2018;
var yearJohn = 2001;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var x, y;
x = y = (3 + 5) * 3;

x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);