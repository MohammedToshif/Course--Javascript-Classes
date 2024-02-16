class Person {
    // Parent  and Child class
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    describe() {
        console.log(`I am ${this.name} and I am ${this.age} years old`);
    }
}

class Programmer extends Person {
    constructor(_name, _age, _yearOfExperience) {
        super(_name, _age);

        // Custom behaviour
        this.yearOfExperience = _yearOfExperience;
    }

    code() {
        console.log(`${this.name} is coding`);
    }
}

// let person1 = new Person('Jeff', 45);
// let programmer1 = new Programmer('Dom', 56, 12);

// person1.code(); // Error person1 is not defined 
// programmer1.code();
// programmer1.describe();

// console.log(person1)
// console.log(programmer1)


const programmers = [
    new Programmer("Dom", 56, 12),
    new Programmer("Jaff", 24, 4)
];

function developSoftware(programmers) {
    // DevelopSoftware

    for (let programmer of programmers) {
        programmer.code();
    }
}

developSoftware(programmers);