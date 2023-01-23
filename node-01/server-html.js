const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile(__dirname + '/index.html', (err, html) => {
        if (err) {
            res.writeHead(500);
            // res.write(err.message);
            // console.log(err);
            res.write('No se encontro el archivo.');
        } else {
            // res.writeHead(200, {'Content-Type':'text/html'})
            // res.write(html);

            res.writeHead(200, {'Content-Type':'application/json'})
			res.write(JSON.stringify({email: 'x@x.com', name: 'Juan'}))
        }

        res.end();
    })
});

const puerto = 3000;

server.listen(puerto, () => {
    console.log(`http://localhost:${puerto}`);
    // console.log('http://localhost:' + puerto);
})