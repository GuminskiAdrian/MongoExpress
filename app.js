require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const postsRoute = require('./routes_test/posts');
const testRoute = require('./routes_test/test1');

mongoose.set('strictQuery', true);
const mongoString = process.env.DATABASE_URL;

app.use(bodyParser.json());

app.use('/posts', postsRoute);
app.use('/test', testRoute);

// //middleware
// app.use("/posts", () => {
//     console.log("This is a middleware running");
// });

mongoose.connect(mongoString, () => {
    console.log('Connected to db');
})

app.listen(3000, () => {
    console.log('Server is running');
});
