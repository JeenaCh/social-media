const express = require('express');
const Post = require('../models/post');
const router = express.Router();

router.get('/',(req, res) => {
    try {
        const posts = Post.getPosts();
        res.send(posts);
    } catch (err) {
        res.status(401).send({message: error.message});
    }
})

.post('/createPost', async (req, res) => {
    try {
        await Post.createPost(req.body)
    } catch(err) {
        res.status(401).send({message: err.message})
    }
})

.delete('/deletePost', async (req,res) => {
    try {
        await Post.deletePost(req.body)
    } catch(err) {
        res.status(401).send({message: err.message})
    }
})
module.exports = router;

