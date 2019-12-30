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

// var now = 2018;
// var yearJohn = 2001;
// var fullAge = 18;

// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// var x, y;
// x = y = (3 + 5) * 3;

// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x--;
// console.log(x);



/*******************
 * Coding Challenge 1
*/

// var markMass, johnMass, markHeight, johnHeight;
// markMass = 90;
// markHeight = 1.8;
// johnMass = 100;
// johnHeight = 1.9;

// var markBMI, johnBMI;
// // markBMI = markMass / (markHeight * markHeight);
// // johnBMI = johnMass / (johnHeight * johnHeight);
// markBMI = calcBMI(markMass, markHeight);
// johnBMI = calcBMI(johnMass, johnHeight);

// console.log(markBMI, johnBMI);


// function calcBMI(mass, height) {
//     height *= height;
//     return mass / (height);
// };



// /************************
//  * If / Else Statements
//  */

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' is single and ready to mingle!');
// };


// var isMarried = true;
// if (isMarried) {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' is single and ready to mingle!');
// };

// // Coding challenge 1 redo

// var markMass, johnMass, markHeight, johnHeight;
// markMass = 90;
// markHeight = 1.8;
// johnMass = 100;
// johnHeight = 1.9;

// var markBMI, johnBMI;
// // markBMI = markMass / (markHeight * markHeight);
// // johnBMI = johnMass / (johnHeight * johnHeight);
// markBMI = calcBMI(markMass, markHeight);
// johnBMI = calcBMI(johnMass, johnHeight);

// function calcBMI(mass, height) {
//     height *= height;
//     return mass / (height);
// };
// // console.log(markBMI, johnBMI);

// if (markBMI > johnBMI) {
//     console.log('Mark\'s BMI is higher than John\'s.');
// } else {
//     console.log('John\'s BMI is higher than Mark\'s.');
// };


// /********************
//  * Boolean Logic
//  */

// var firstName = 'John';
// var age = prompt('How old is John?');

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man.')
// } else {
//     console.log(firstName + ' is a man.');
// };



/********************************************
 * Ternary Operator and Switch Statements
 */

var firstName = 'John';
var age = 29;

// age >= 18 ? console.log(firstName + ' drinks beer.')
//     : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(firstName + ' drinks ' + drink);


/***************************
 * Switch statement
 */

// var job = 'instructor';
// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches children how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives for Uber.');
//         break;
//     case 'desiigner':
//         console.log(firstName + ' is a shitty rapper.');
//         break;
//     default:
//         console.log(firstName + ' does something else.');
// };

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man.')
// } else {
//     console.log(firstName + ' is a man.');
// };

// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager.');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man.');
//         break;
//     default:
//         console.log(firstName + ' is a man.');
// };


/************************
 * Truth and Falsy
 */

// var height;
// height = 23;

// if (height || height === 0) {
//     console.log('Variable has been defined.');
// } else {
//     console.log('Variable has NOT been defined.');
// }


// // Equality operators

// if (height == '23') {
//     console.log('The == operator does type coercion.');
// }


// var team1 = 'Bulls';
// var team2 = 'Jazz';
// var team3 = 'Suns';

// var team1Scores = [12, 80, 76];
// var team2Scores = [12, 80, 76];
// var team3Scores = [12, 80, 76];

// function calcAvg(teamName, arr) {
//     var avg = (arr[0] + arr[1] + arr[2]) / arr.length;
//     console.log(teamName + ' Average: ' + avg);
//     return avg;
// };

// var team1Avg = calcAvg(team1, team1Scores);
// var team2Avg = calcAvg(team2, team2Scores);
// var team3Avg = calcAvg(team3, team3Scores);

// // switch (true) {
// //     case team1Avg > team2Avg:
// //         console.log(team1 + ' wins with the highest average score!');
// //         break;
// //     case team1Avg === team2Avg:
// //         console.log(team1 + ' & ' + team2 + ' have tied!')
// //         break;
// //     default:
// //         console.log(team2 + ' wins with the highest average score!');
// // }   

// // team1Avg > team2Avg ? console.log(team1 + ' win with the highest average score!')
// //     : console.log(team2 + ' win with the highest average score!');

// if (team1Avg === team2Avg && team1Avg === team3Avg) {
//     console.log(team1 + ', ' + team2 + ', & ' + team3 + ' have tied!');
// } else if (team1Avg > team2Avg && team1Avg > team3Avg) {
//     console.log(team1 + ' win with the highest average score!');
// } else if (team2Avg > team1Avg && team2Avg > team3Avg) {
//     console.log(team2 + ' win with the highest average score!');
// } else {
//     console.log(team3 + ' win with the highest average score!');
// };



/*************************************
 * Function Statements and Expressions
 */

// //  Function Declaration
// function wdyd(job, firstName) {}

// //  Function Expression
// var wdyd = function (job, firstName) {
//     switch (job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code.';
//         case 'driver':
//             return firstName + ' drives for Lyft.';
//         case 'designer':
//             return firstName + ' designs websites.';
//         default:
//             return firstName + ' does something else.';
//     };
// };

// console.log(wdyd('designer', 'John'));
// console.log(wdyd('driver', 'Keith'));
// console.log(wdyd('drug dealer', 'Mary'));



// /*********************
//  * Arrays
//  */

// var names = ['Will', 'Jane', 'Oliver'];
// var years = new Array(1990, 1995, 2005);

// console.log(names[0]);

// names[1] = 'Phil';
// names[names.length] = 'Sara';
// names.push('Jane');
// console.log(names);

// names.unshift('Taylor');
// console.log(names);

// names.pop();
// console.log(names);

// console.log(names.indexOf('Phil'));

// var isPresent = names.indexOf('Sara') === -1 ? 'Sara isn\'t here.' : 'Sara is here.';

// console.log(isPresent);


/*******************************
 * Coding Challenge 3
 */

/*
Bills: $124, $48, $268
Tip amounts: 20% if under $50, 15% if $50 - $200, 10% if over $200
Return and array with each tip amount,
and another array with the tip plus bill amounts.
*/

// var billAmts = [124, 48, 268]
// var tipAmts = [];
// var totals = [];

// function calcTip(bill) {
//     switch (true) {
//         case bill < 50:
//             return tipAmts.push(bill * 0.2);
//         case bill > 200:
//             return tipAmts.push(bill * 0.1);
//         default:
//             return tipAmts.push(bill * 0.15);
//     };
// };

// calcTip(billAmts[0]);
// calcTip(billAmts[1]);
// calcTip(billAmts[2]);
// console.log(tipAmts);

// function calcTotal(bill, tip) {
//     totals.push(bill + tip);
// };

// calcTotal(billAmts[0], tipAmts[0]);
// calcTotal(billAmts[1], tipAmts[1]);
// calcTotal(billAmts[2], tipAmts[2]);
// console.log(totals);

// Now dry it up

// function calcTotal(bill) {
//     var tip;
//     switch (true) {
//         case bill < 50:
//             tip = bill * 0.2;
//             tipAmts.push(tip);
//             return totals.push(bill + tip);
//         case bill > 200:
//             tip = bill * 0.1;
//             tipAmts.push(tip);
//             return totals.push(bill + tip);
//         default:
//             tip = bill * 0.15;
//             tipAmts.push(tip);
//             return totals.push(bill + tip);
//     };
// };

// calcTotal(billAmts[0]);
// calcTotal(billAmts[1]);
// calcTotal(billAmts[2]);
// console.log(tipAmts, totals);


/************************
 * Objects and Properties
 */

// //  Object Literal
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: '1990',
//     family: ['Mom', 'Dad', 'Sis'],
//     job: 'Developer',
//     isMarried: false,
// };

// console.log(john['birthYear'], john.lastName);

// // new object syntax
// var jane = new Object();
// jane.name = 'Jane';
// jane.birthYear = 2000;
// jane.lastName = 'Smith';
// console.log(jane);

/*****************************
 * Objects and Methods
 */

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: '1990',
//     family: ['Mom', 'Dad', 'Sis'],
//     job: 'Developer',
//     isMarried: false,
//     calcAge: function () {
//         this.age = 2018 - this.birthYear;
//     }
// };

// john.calcAge();
// console.log(john);



/**********************
 * Coding Challenge 4
 */

var john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 90,
    height: 2,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
    }
};

var mark = {
    firstName: 'Mark',
    lastName: 'Hernandez',
    mass: 90,
    height: 2,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
    }
};

john.calcBMI();
mark.calcBMI();

if (john.bmi > mark.bmi) {
    console.log(john.firstName + ' has a higher BMI.');
} else if (john.bmi < mark.bmi) {
    console.log(mark.firstName + ' has a higher BMI.');
} else {
    console.log(john.firstName + ' & ' + mark.firstName + ' have the same BMI.')
};