const express = require("express");
const router = express.Router();
const Post = require("../models/Posts");

router.get("/", async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post("/", async (req, res) => {
    const post = new Post({
        title: req.title,
        description: req.description,
        date: Date.now(),
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
        console.log("posted");
    } catch (err) {
        // res.json({ message: err });
        console.log(err)
        console.log(req.title);
        console.log(req.description);
    }
});

module.exports = router;
