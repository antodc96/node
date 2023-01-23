const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.url, request.method);

    if (request.url.includes('/contacto')) {
        response.end('Contacto');
    } else {
        response.end('Hola desde Node.js');
    }
});

const puerto = 3000;

server.listen(puerto, () => {
    console.log(`http://localhost:${puerto}`);
    // console.log('http://localhost:' + puerto);
})