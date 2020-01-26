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

var mark = new Person('Mark', 1988, 'Fighter');