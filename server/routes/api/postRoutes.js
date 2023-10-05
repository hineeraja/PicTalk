const router = require('express').Router()

const {
    getAllPosts,
    getOnePost,
    getPostsFromUser,
    createPost,
    updatePost,
    deletePost,
    getComments,
    addComment,
    removeComment
} = require('../../controllers/postController')

router.route('/').get(getAllPosts).post(createPost)
router.route('/:postId').get(getOnePost).put(updatePost).delete(deletePost)
router.route('/:username/posts').get(getPostsFromUser)
router.route('/:postId/comments').get(getComments).post(addComment)
router.route('/:postId/comments/:commentId').delete(removeComment)

module.exports = router