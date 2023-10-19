const { Schema, model } = require('mongoose')
const commentSchema = require('./Comment')
const tagSchema = require('./Tag')
const likeSchema = require('./Like')

const postSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
      maxlength: 1000,
      minlength: 1
    },
    image: {
      type: String,
      required: true,
      maxlength: 200
    },
    username: {
      type: String,
      required: true,
      maxlength: 50
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    comments: [commentSchema],
    tags: [tagSchema],
    likes: [likeSchema]
  },
  {
    toJSON: {
        getters: true,
    },
    id: false
  }
)

postSchema.virtual('likeCount').get(function () {
  return this.likes.length
})

const Post = model('Post', postSchema)

module.exports = Post