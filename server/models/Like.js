const { Schema } = require('mongoose')

const likeSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        maxlength: 50
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = likeSchema