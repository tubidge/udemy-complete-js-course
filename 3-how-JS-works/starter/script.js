///////////////////////////////////////
// Lecture: Hoisting

// // Function declaration works:
// calcAge(1984);

// function calcAge(year) {
//     console.log(2020 - year);
// };

// // Function expression does not:
// retirement(2000);

// var retirement = function (year) {
//     console.log(65 - (2020 - year));
// };

// retirement(1988);


// // Variables:
// console.log(age);
// var age = 23;
// console.log(age);

// function foo() {
//     var age = 65;
//     console.log(age);
// };

// foo();
// console.log(age);






///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword


// function calcAge(year) {
//     console.log(2020 - year);
//     console.log(this);
// }

// calcAge(1988);


var john = {
    name: 'john',
    yearOfBirth: 1990,
    calcAge: function () {
        console.log(this);
        console.log(2020 - this.yearOfBirth);
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
};

john.calcAge();

var mike = {
    name: 'mike',
    yearOfBirth: 1984,
}

mike.calcAge = john.calcAge;

mike.calcAge();