const express = require("express");
const { Model } = require("mongoose");
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
        title: req.body.title,
        description: req.body.description,
        date: Date.now()
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
        console.log("posted");
    } catch (err) {
        console.log(err)
        console.log(req.title);
        console.log(req.description);
    }
});

router.delete("/", async (req, res) => {
    try {
        const id = req.params.id;
        Post.findByIdAndDelete(id);
        console.log('hej');
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
