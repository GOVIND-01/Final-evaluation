const express = require("express");
const mongoose = require("mongoose");
app.listen(5005, async ()=> {
    try {
        await connect();
        console.log("Linsting on port no 5005");
    }
    catch (e) {
        console.log(e.message);
    }
}) 