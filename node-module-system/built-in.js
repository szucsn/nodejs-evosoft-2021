const fs = require('fs');
const path = require('path');
const http = require('http');

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

console.time('Writing');
fs.writeFile(path.join(__dirname, 'data', 'users.json'), JSON.stringify(users, null, 4), 'utf8', (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('Write successful')
    console.timeEnd('Writing');
});