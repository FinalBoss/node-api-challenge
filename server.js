const express = require("express");
const server = express();
const projectRouter = require('./project/project');
const actionRouter = require('./action/action');



server.use(express.json());

server.use('/api/action', actionRouter);
server.use('/api/project', projectRouter);

server.get("/", (req, res) => {
    res.send(`
    <p>Hello World</p>
    `);
})





module.exports = server;