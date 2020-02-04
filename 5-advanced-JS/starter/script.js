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


// function interviewQuestion(job) {
//     var questions = {
//         designer: ', can you please explain what UX design is?',
//         teacher: ', what subject do you teach?',
//         other: ', what do you do?'
//     };
//     return function (name) {
//         if (job === 'designer') {
//             console.log(name + questions.designer);
//         } else if (job === 'teacher') {
//             console.log(name + questions.teacher);
//         } else {
//             console.log('Hello ' + name + questions.other);
//         }
//     }
// };


// var designerQuestion = interviewQuestion('designer');
// designerQuestion('Phil');

// interviewQuestion('teacher')('John');
// interviewQuestion('baller')('Lenny');


// // BIND, CALL, and APPLY

// var john = {
//     name: 'John',
//     age: 32,
//     job: 'teacher',
//     presentation: function (style, timeOfDay) {
//         if (style === 'formal') {
//             console.log('Hello sir, my name is ' + this.name + '. Lovely ' + timeOfDay + ', isn\'t it?');
//         } else if (style === 'friendly') {
//             console.log('Yo guys! I\'m ' + this.name + '. What are you doing this ' + timeOfDay + '?');
//         }
//     }
// }

// var emily = {
//     name: 'Emily',
//     age: 35,
//     job: 'designer'
// };

// john.presentation('formal', 'morning');
// john.presentation('friendly', 'afternoon');

// // Call method
// john.presentation.call(emily, 'friendly', 'evening');

// // Apply method
// // john.presentation.apply(emily, ['formal', 'afternoon']);

// // Bind method
// var johnFriendly = john.presentation.bind(john, 'friendly');
// johnFriendly('night');

// var emilyFormal = john.presentation.bind(emily, 'formal');
// emilyFormal('afternoon');


// // Rewrite calculate age function with bind:

// var years = [1988, 1985, 1995, 2003, 2009];


// function arrayCalc(array, func) {
//     var result = [];
//     for (i = 0; i < array.length; i++) {
//         result.push(func(array[i]));
//     }
//     return result;
// };

// function calcAge(yob) {
//     return 2020 - yob;
// };

// function isFullAge(limit, age) {
//     return age >= limit;
// };

// var ages = arrayCalc(years, calcAge);
// console.log(ages);

// var fullAgesJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(fullAgesJapan);



/////////////////////////////
// CODING CHALLENGE #7

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


(function () {
    // Create the structure of a question
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
        this.display = function () {
            console.log(this.question);
            for (i = 0; i < this.answers.length; i++) {
                console.log(answers[i]);
            }
        }
    };

    // Construct new questions
    var quest1 = new Question('Where is Phil going to get a job?', ['A: Google', 'B: Adobe', 'C: Jiffy Lube'], ['B', 'b']);
    var quest2 = new Question('What day of the week is Valentine\'s Day this year?', ['A: Monday', 'B: Friday', 'C: Saturday'], ['B', 'b']);
    var quest3 = new Question('Who was Phil\'s #1 artist of 2019?', ['A: Opiuo', 'B: CBDB', 'C: Griz'], ['C', 'c']);
    var quest4 = new Question('Who is going to win the Super Bowl?', ['A: 49ers', 'B: Chiefs'], ['A', 'a']);

    // Put questions in an array
    var questions = [quest1, quest2, quest3, quest4];
    var randomQuestion;



    // var randomQuestion = questions[Math.round(Math.random() * 3)];

    // randomQuestion.display();
    // var input = prompt('Please enter your answer:');
    // checkAnswer(input, randomQuestion);

    // Function to select a random question, then run it's display method 
    function nextQuestion(callback) {
        randomQuestion = questions[Math.round(Math.random() * 3)];
        randomQuestion.display();
        callback(randomQuestion, checkAnswer);
    };

    console.log('before');
    nextQuestion(promptAnswer);

    // Function to prompt the user for an answer, then call a function to check it
    function promptAnswer(randomQuestion, callback) {
        var input = prompt('Please enter your answer:');
        console.log(input);
        callback(input, randomQuestion)
    };


    // Function to check the user's answer
    function checkAnswer(answer, randomQuestion) {
        if (answer === randomQuestion.correct[0] || answer === randomQuestion.correct[1]) {
            console.log('That\'s correct!');
        } else {
            console.log('Sorry, wrong answer!');
        };
        console.log('---------- Next Question ----------');
        nextQuestion(promptAnswer);
    };
})();



/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/