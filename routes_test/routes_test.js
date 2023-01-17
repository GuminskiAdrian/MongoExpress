const express = require('express');
const router = express.Router();
const post = require('../models/posts');

router.get("/", (req, res) => {
    res.send("We are on posts my man");
});

router.post('/', (req, res) => {
    console.log(req.body);
});

module.exports = router;