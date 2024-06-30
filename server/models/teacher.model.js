const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
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
        salary: {
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

const teacher = mongoose.model("teachers", teacherSchema)
module.exports = teacher