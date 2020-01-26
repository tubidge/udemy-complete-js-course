// Function Constructor

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'Teacher'
};

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calcAge = function () {
    console.log(this.name + ' ' + this.lastName + ' Age: ' + (2020 - this.yearOfBirth));
};

Person.prototype.lastName = 'Smith';

var mark = new Person('Mark', 1988, 'Fighter');


var jane = new Person('Jane', 1969, 'Artist');
var phil = new Person('Phil', 1909, 'Retired');

mark.calcAge();
jane.calcAge();
phil.calcAge();