const { createServer } = require('http');
const { readFile } = require('fs').promises;

const server = createServer();
let counter = 1;

server.on('request', async (req, res) => {

    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end(counter++ + '');
    }
});

server.listen(3000, 'localhost');
