const express = require("express");

const Teacher = require("../Models/teachers.model");
const router = express.Router();
router.post("/teacher", async(req, res)=> {
    try{
        const teacher = await Teacher.create(req.body);
        return res.status(201).send(teacher);
    }catch(e) {
        console.log(e.message);
    }
});
router.get("/teachersDetails", async (req, res) => {
    try {
        const teacher = await Teacher.find().populate({path: "class"}).lean().exec();
        return res.status(200).send(teacher);
    } catch (e){
        return res.status(500).send(e.message);
    }
})

module.exports = router;
