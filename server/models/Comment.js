const { Schema, Types } = require('mongoose')

const commentSchema = new Schema({
    content: {
        type: String,
        required: true,
        maxlength: 500
    },
    username: {
        type: String,
        required: true,
        maxlength: 50
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = commentSchema