const express = require("express");
const Class = require("../Models/classes.model");
const router = express.Router();
router.post("/class", async (req, res) => {
    try {
        const classes = await Class.create(req.body);
        return res.status(201).send(classes);
    } catch (e) {
        return res.send(500).send(e.message);
    }
});
module.exports = router;