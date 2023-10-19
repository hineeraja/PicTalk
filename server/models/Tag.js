const { Schema, Types } = require('mongoose')

const tagSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        maxlength: 75
    }
})

module.exports = tagSchema