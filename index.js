//taking conf from .env file
require("dotenv").config();
//reading database connection strong from .env file
const mongoString = process.env.DATABASE_URL;

//instaling important modules
const express = require("express");
const mongoose = require("mongoose");

//connecting database to server via mongoose
mongoose.connect(mongoString);
const database = mongoose.connection;

//console logging error if connection fails
database.on("error", (error) => {
    console.log(error);
});

//console logging msg if connection succeeded
database.once("connected", () => {
    console.log("-----Database Connected!-----");
});

//creating shortcut to refer
const app = express();

//making express know what kind of data will he read
app.use(express.json());

//importing routes
const routes = require("./routes/routes");
app.use("/api", routes);

//setting up server port
app.listen(3000, () => {
    console.log("-----Server is running-----");
});
