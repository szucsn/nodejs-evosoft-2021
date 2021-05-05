const { createReadStream } = require('fs');
const { join } = require('path');

const htmlResponse = (res, file, statusCode = 200) => {
    const filePath = join(__dirname, '..', 'views', `${file}.html`);
    res.writeHead(statusCode, { 'Content-Type': 'text/html' });
    createReadStream(filePath).pipe(res);
};

module.exports = htmlResponse;