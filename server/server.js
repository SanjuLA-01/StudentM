const express = require ("express");
const mongoose = require ("mongoose");
const bodyparser = require ("body-parser");
const dotenv = require ("dotenv");
const cors = require ("cors");
const app= express();
require ("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use (cors());
app.use (bodyparser.json ());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {

});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB Connected')
})

const studentRouter= require("./routes/students.js");

app.use ("/student",studentRouter);

app.listen (PORT, () => {
    console.log ('Server is up running on port: ' +PORT);
})