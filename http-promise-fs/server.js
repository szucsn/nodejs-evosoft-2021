const http = require('http');
const SiteRouter = require('./router/site.router');

const port = 8080;

http.createServer((req, res) => {
    SiteRouter[req.url] ? SiteRouter[req.url](res) : SiteRouter['/404'](res);
}).listen(port);

console.log(`Server is running at http://localhost:${port}`);