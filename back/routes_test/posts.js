const express = require("express");
const router = express.Router();
const Post = require("../models/Posts");

router.get("/", async (req, res) => {
    try {
        const posts = await Post.find().limit(5);
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post("/", async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        date: Date.now(),
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
        console.log("posted");
    } catch (err) {
        // res.json({ message: err });
        console.log(err)
        console.log(`res.body -> ${res.body}`);
        console.log(err._id);
        console.log(err.title);
        console.log(err.description);
        console.log(req.body);
    }
});

module.exports = router;
