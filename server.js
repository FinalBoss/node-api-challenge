const express = require("express");

const server = express();

const projectModel = require('./data/helpers/projectModel');
const actionModel = require('./data/helpers/actionModel');


server.use(express.json());


server.use()

server.get("/", (req, res) => {
    res.send(`
    <p>Hello World</p>
    `);
})





module.exports = server;