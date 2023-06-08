class Student {
    constructor(name = 'Guest') {
        this.name = name;
        this.geekPoints = 100;
        console.log(this);
    }
}

// let student101 = new Student('Krish');
// let student102 = new Student();

// student101.name = 'Krish';
// student102.name = 'Sathish';

// console.log(student101);
// console.log(student102);

module.exports = Student;