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
        DOB: {
            type: Date,
            default: Date.now()
        },
        contact: {
            type: Number,
            required: true,
            default: 0
        },
        fees_paid: {
            type: Number,
            required: true,
            default: 0
        },

        class: {
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