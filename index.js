const express = require("express");

const router = require("./server.js");


const PORT = 5000;
router.listen(PORT, () => {
    console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`);
});