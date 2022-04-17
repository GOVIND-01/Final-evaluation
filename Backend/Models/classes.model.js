const mongoose = require("mongoose");
const classschema = new mongoose.Schema(
    {
        grade :{ type: Number, required: true },
        section: { type: String, required: true },
        subject: { type: String, required: true },
        
    }, {
        versionKey: false,
        timestamps: true,
    }
);
const classs = mongoose.model("class", classschema);
module.exports = classs;