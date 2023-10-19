const { Schema, model } = require('mongoose')

const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return re.test(email)
};

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            maxlength: 50
        },
        avatar: {
            type: String,
            maxlength: 200
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: [validateEmail, 'Please fill a valid email address']
        },
        password: {
            type: String,
            required: true
        },
        posts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Post'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            getters: true,
        },
        id: false
    }
)

userSchema.virtual('friendCount').get(function () {
    return this.friends.length
})

userSchema.virtual('postCount').get(function () {
    return this.posts.length
})

const User = model('User', userSchema)

module.exports = User