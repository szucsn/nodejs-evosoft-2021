// arrays
const nums = [1, 2, 4, 7, 3];

console.log(nums.length);

nums[0] = 9;

// push, pop
console.log(nums.push(33));
console.log(nums.pop());

// unshift, shift
console.log(nums.unshift(100));
console.log(nums.shift());

// sort
console.log(nums.sort());

// filter: returns a new array
console.log(nums.filter(num => num > 5));

// map
console.log(nums.map(num => num * 2));

// sort users array
const users = [
    {
        id: 1,
        name: 'Zoltán',
        email: 'zoltán@gmail.com'
    },
    {
        id: 2,
        name: 'Ádám',
        email: 'zoltán@gmail.com'
    },
    {
        id: 3,
        name: 'Géza',
        email: 'zoltán@gmail.com'
    },
    {
        id: 4,
        name: 'Alfréd',
        email: 'zoltán@hotmail.com'
    },
];
users.sort((a, b) => a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase()));
console.log(users);

const filterFn = phrase => {
    return item => {
        const base = Object.values(item).join('').toLowerCase();
        return base.includes(phrase);
    }
};
console.log(users.filter(filterFn('géza')));

const binded = function (item) {
    const base = Object.values(item).join('').toLowerCase();
    return base.includes(this.phrase);
};

const bUsers = users.filter(binded.bind({ phrase: 'hotmail' }));
console.log(bUsers);