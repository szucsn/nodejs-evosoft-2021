import _ from 'lodash-es';

// const _ = require('lodash');

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

const sorted = _.sortBy(users, ['name', 'email']);
console.log(sorted);

const u2 = _.cloneDeep(users);
u2[0].name = 'Gábor';
console.log(users);