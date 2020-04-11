const express = require('express');

const server= express();
server.use(express.json());


server.listen(3333, () => {
console.log('listening on port 3333')
});