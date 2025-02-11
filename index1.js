const { createServer } = require('http');
const { calc } = require('./calc');

const server = createServer();

server.on('request', (req, res) => {

    const [, operation, a, b] = req.url.split('/')
    const result = calc(operation, Number(a), Number(b));

    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end(result + '');

});

server.listen(3000, 'localhost');
