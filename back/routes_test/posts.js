const { json } = require("body-parser");
const express = require("express");
const { Model, default: mongoose } = require("mongoose");
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
    } catch (err) {
        console.log(err)
    }
});

router.delete("/", async (req, res) => {
    try {
        const id = { "_id": "ObjectId('63c97b9790606d4d1442b437')"};
        const del = await Post.deleteOne(id);
        res.json(del);
        console.log('deleted');
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
