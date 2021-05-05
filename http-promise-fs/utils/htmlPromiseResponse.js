const { createReadStream } = require('fs');
const { readFile } = require('fs').promises;
const { join } = require('path');

// Promise
// const htmlResponse = (res, file, statusCode = 200) => {
//     const filePath = join(__dirname, '..', 'views', `${file}.html`);
//     readFile(filePath, 'utf-8').then(
//         (content) => {
//             res.writeHead(statusCode, { 'Content-Type': 'text/html' });
//             res.write(content);
//             res.end();
//         },
//         (err) => {
//             console.error(err);
//             res.writeHead(500, { 'Content-Type': 'text/html' });
//             res.write(`<h1>Server Error</h1>`);
//             res.end();
//         });
// };

// async-await
const htmlResponse = async (res, file, statusCode = 200) => {
    const filePath = join(__dirname, '..', 'views', `${file}.html`);
    try {
        const content = await readFile(filePath, 'utf-8')
        res.writeHead(statusCode, { 'Content-Type': 'text/html' });
        res.write(content);
    } catch (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.write(`<h1>Server Error</h1>`);
    }
    res.end();
};

module.exports = htmlResponse;