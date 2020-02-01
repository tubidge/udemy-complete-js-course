// // Function Constructor

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'Teacher'
// };

// var Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// };

// Person.prototype.calcAge = function () {
//     console.log(this.name + ' ' + this.lastName + ' Age: ' + (2020 - this.yearOfBirth));
// };

// Person.prototype.lastName = 'Smith';

// var mark = new Person('Mark', 1988, 'Fighter');


// var jane = new Person('Jane', 1969, 'Artist');
// var phil = new Person('Phil', 1909, 'Retired');

// mark.calcAge();
// jane.calcAge();
// phil.calcAge();




// // Object.create Method

// var personProto = {
//     calcAge: function () {
//         console.log(2020 - this.yearOfBirth);

//     }
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1988;
// john.job = 'teacher';


// var jane = Object.create(personProto, {
//     name: { value: 'Jane' },
//     yearOfBirth: { value: 1969 },
//     job: { value: 'Artist' }
// });

// console.log(john.calcAge());



// // Objects vs. Primitives

// // Primitives
// var a = 432;
// var b = a;
// a = 32;
// console.log(a, b);

// // Objects
// var obj1 = {
//     name: 'name1',
//     age: 90
// };

// var obj2 = obj1;
// obj1.age = 30;
// obj2.age = 50;
// console.log(obj1);
// console.log(obj2);

// // Functions
// var age = 28;
// var phil = {
//     name: 'Phil',
//     city: 'Bluffdale'
// };
// console.log(age, phil);

// function change(a, b) {
//     a = 31;
//     b.city = 'Lehi'
// };

// change(age, phil);

// console.log(age, phil);


// // First Class Functions
// // Passing Functions as Arguments

// var years = [1988, 1985, 1995, 1960, 1958];

// function calcAge(yob) {
//     return 2020 - yob;
// };

// function isFullAge(age) {
//     return age >= 21;
// };

// function maxHeartRate(age) {
//     if (age >= 18 && age <= 81) {
//         return Math.round(206.9 - (age * 0.67))
//     } else {
//         return -1;
//     };
// };

// function arrayCalc(array, func) {
//     var result = [];
//     for (i = 0; i < array.length; i++) {
//         result.push(func(array[i]));
//     }
//     return result;
// };

// var ages = arrayCalc(years, calcAge);
// console.log(ages);

// var fullAges = arrayCalc(ages, isFullAge);
// console.log(fullAges);

// var heartRates = arrayCalc(ages, maxHeartRate);
// console.log(heartRates);

// // Functions Returning Functions

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function (name) {
//             console.log(name + ', can you please explain what UX design is?')
//         }
//     } else if (job === 'teacher') {
//         return function (name) {
//             console.log(name + ', what subject do you teach?')
//         }
//     } else {
//         return function (name) {
//             console.log('Hello ' + name + ', what do you do?')
//         }
//     }
// };

// var teacherQuestion = interviewQuestion('contortionist');
// teacherQuestion('Phil');

// var designerQuestion = interviewQuestion('designer');
// designerQuestion('Paul');

// // OR

// interviewQuestion('teacher')('Mark');



// // IIFE - Immediately Invoked Function Expressions

// // Normal function
// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// };
// game();

// // IIFE
// (function () {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();
// // console.log(score);

// (function (goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(3);



// // CLOSURES

// function retirement(retirementAge) {
//     var text = ' years until retirement.';
//     return function (yearOfBirth) {
//         var age = 2020 - yearOfBirth;
//         console.log((retirementAge - age) + text);
//     }
// }

// var usaRetirment = retirement(66);
// usaRetirment(1988);
// var swedenRetirement = retirement(65);
// swedenRetirement(1960);



// CODING CHALLENGE: Rewrite the Job Interview function using closures.

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function (name) {
//             console.log(name + ', can you please explain what UX design is?')
//         }
//     } else if (job === 'teacher') {
//         return function (name) {
//             console.log(name + ', what subject do you teach?')
//         }
//     } else {
//         return function (name) {
//             console.log('Hello ' + name + ', what do you do?')
//         }
//     }
// };

// var teacherQuestion = interviewQuestion('teacher');
// teacherQuestion('Phil');


// -----------------------


function interviewQuestion(job) {
    var questions = {
        designer: ', can you please explain what UX design is?',
        teacher: ', what subject do you teach?',
        other: ', what do you do?'
    };
    return function (name) {
        if (job === 'designer') {
            console.log(name + questions.designer);
        } else if (job === 'teacher') {
            console.log(name + questions.teacher);
        } else {
            console.log('Hello ' + name + questions.other);
        }
    }
};


var designerQuestion = interviewQuestion('designer');
designerQuestion('Phil');