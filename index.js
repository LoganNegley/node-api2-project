const express = require('express');
const cors = require('cors');
const postsRouter = require('./routes/posts-router');

const server= express();
server.use(express.json());
server.use(cors());
server.use('/api/posts', postsRouter);


server.listen(4000, () => {
console.log('listening on port 4000')
});