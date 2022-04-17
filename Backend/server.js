const express = require("express");
const mongoose = require("mongoose");
const connect = require("./Configs/db");
const app = express();
require('dotenv').config();
const port = process.env.PATH || 5005;
const classController = require("./Controller/classController");
const teacherController = require("./Controller/teacherController");


app.use(express.json());
app.use("/", teacherController);
app.use("/", classController);

app.listen(port, async ()=> {
    try {
        await connect();
        console.log("Linsting on port no 5005");
    }
    catch (e) {
        console.log(e.message);
    }
}) 