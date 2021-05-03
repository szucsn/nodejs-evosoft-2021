// ES5: object literal, object constructor
var user = {};
var user2 = new Object();

// ES5: object property initializer
var getUser = function (name, age) {
    return {
        name: name,
        age: age,
    };
}

// ES6: object property initializer
const getUser2 = (name, age) => {
    return {
        name,
        age,
    };
}

console.log(getUser2('Piroska', 18));

// ES5: computed property name
var employee = {
    id: 101,
    name: 'Amit',
};

const key = 'name';
const department = 'dep_name';
// employee.key = 'Timnat';
employee[key] = 'Timnat';
console.log(employee);

// ES6: computed property name
const employee2 = {
    id: 102,
    name: 'Amit',
    [department]: 'Sales',
};

console.log(employee);
console.log(employee2);

// ES5: object method
var employee3 = {
    id: 101,
    name: 'Amit',
    getName: function () { return this.name; }
};

console.log(employee3.getName());

// ES6: object method
const employee4 = {
    id: 101,
    name: 'Amit',
    getName() {
        return this.name;
    }
};

console.log(employee4.getName());

// ES5: merge two objects
const car = {
    type: '',
    year: 2018,
    price: 0,
    notice: 'nice car',
};
const serverResponse = {
    type: 'VW Jetta',
    year: 2019,
    price: 15000,
    color: 'red',
};

const finalCar = Object.assign(car, serverResponse);
console.log(finalCar);
console.log(car);

// ES5 cloning
const newCar = Object.assign({}, car);
newCar.type = 'Renault';
console.log(car.type);

// ES6 cloning
const car5 = { ...car };

// ES6: merge two objects
const car3 = { ...car, ...serverResponse };
console.log(car3);

// ES6: destructuring
const { type, year } = car3;
console.log(type, year);
const { type: carType } = car3;
console.log(carType);

const { type: type2, ...args } = car;
console.log(args);

// ES6: object setters and getters
const language = {
    set log(name) {
        this.savedLog.push(name);
    },
    get log() {
        return this.savedLog;
    },
    savedLog: [],
};
language.log = 'en';
language.log = 'hu';
language.log = 'de';
console.log(language.log);