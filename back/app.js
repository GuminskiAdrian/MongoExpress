require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const postsRoute = require("./routes_test/posts");
const testRoute = require("./routes_test/test1");

mongoose.set("strictQuery", true);
const mongoString = process.env.DATABASE_URL;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, DELETE, OPTIONS, PATCH');
    res.setHeader('Access-Control-Allow-headers', 'Content-Type');
    next();
});

app.use("/posts", postsRoute);
app.use("/test", testRoute);

mongoose.connect(mongoString, () => {
    console.log("Connected to db");
});

app.listen(3000, () => {
    console.log("Server is running");
});