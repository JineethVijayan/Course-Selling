import mongoose, { Types } from "mongoose";


const instructorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        enum: ["instructor", "admin"]
    },
    hashPassword: {
        type: String,
        required: true,
        minLength: 6,
    },
    course: [{ type: mongoose.Types.ObjectId, ref: "Course" }]
},
    { timestamps: true }
)

const Instructor = mongoose.model("Instructor", instructorSchema);

export default Instructor