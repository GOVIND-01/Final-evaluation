const mongoose = require("mongoose");
const TeacherSchema = new mongoose.Schema(
    {
        name :{ type: String, required: true },
        gender: { type: String, required: true },
        age: { type: Number, required: true },
        class: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"class",
            required: true,
        }
    }, {
        versionKey: false,
        timestamps: true,
    }
);
const Teacher = mongoose.model("teachers", TeacherSchema);
module.exports = Teacher;