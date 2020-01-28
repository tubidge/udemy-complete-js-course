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



// Objects vs. Primitives

// Primitives
var a = 432;
var b = a;
a = 32;
console.log(a, b);

// Objects
var obj1 = {
    name: 'name1',
    age: 90
};

var obj2 = obj1;
obj1.age = 30;
obj2.age = 50;
console.log(obj1);
console.log(obj2);

// Functions
var age = 28;
var phil = {
    name: 'Phil',
    city: 'Bluffdale'
};
console.log(age, phil);

function change(a, b) {
    a = 31;
    b.city = 'Lehi'
};

change(age, phil);

console.log(age, phil);
