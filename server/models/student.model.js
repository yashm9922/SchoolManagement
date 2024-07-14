const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, , "Please enter the student name"]
        },
        gender: {
            type: String,
            required: true,
        },
        dob: {
            type: Date,
        },
        contact: {
            type: Number,
            required: true,
        },
        feesPaid: {
            type: Number,
            required: true,
        },

        classname: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

const student = mongoose.model("students", StudentSchema)
//students will be the collection ^ name in mongoDB database

module.exports = student