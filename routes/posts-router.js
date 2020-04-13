const express = require('express');
const db = require('../data/db');

const router = express.Router();

// POST request to add post
router.post('/', (req, res) => {

    if(!req.body.title || !req.body.contents){
        return res.status(400).json({
            errorMessage: 'Please provide title and contents for the post'
        })
    } 
        db.insert(req.body)
            .then( (post) => {
                res.status(201).json(post)
            })
            .catch(error => {
                console.log(error, 'error added post')
                res.status(500).json({
                    errorMessage: 'Error adding post'
                })
        })
});

// POST to add comment to post with ID
router.post('/:id/comments',(req, res)=>{
    const id = req.params.id;

    if(!req.body.text){
        return res.status(400).json({
            errorMessage: 'Please provide text for the comment'
        })
    }
        db.findById(id)
        .then(post =>{
            console.log(post)
            if(post.length === 0){
         return res.status(404).json({
            message:'The post with the specified ID does not exist'
            })
        }else{
            const newComment = {
                text: req.body.text,
                post_id: id
            }
           db.insertComment(newComment)
            .then(comment =>{
                res.status(200).json(comment)
        })
        .catch(error =>{
            res.status(500).json({
                error: 'There was an error while saving the comment to the database'
            })
            console.log(error, 'error creating new comment')
        })
    }
     
    })
});

// GET request to get all posts
router.get('/', (req, res) =>{
    db.find()
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            res.status(500).json({
            error:'The posts information could not be retieved'
        })
    })
});

// Get request to get post with specific Id
router.get('/:id', (req, res) => {

    db.findById(req.params.id)
        .then(post =>{
            if(post.length === 0){
                   res.status(404).json({
                    message:'The post with the specific ID does not exist'
                })
                
            } else{
              res.status(200).json(post)
            }
        })
      .catch(error =>{
            res.status(500).json({
                error: 'The post information could not be retreived'
            })
        })
});

// GET request of comments of post by id
router.get('/:id/comments', (req, res) => {
    db.findPostComments(req.params.id)
        .then(comments => {
            console.log(comments)
            if(comments.length === 0){
               res.status(404).json({
                    message: 'The post with the specific ID does not exist'
                })
            }else{
                 res.status(200).json(comments)
            }
        })
        .catch(error =>{
            console.log(error, 'error retrieving comments')
            res.status(500).json({
                error: 'The comments information could not be retrieved'
            })
        })
}) 

// DELETE request for a post with that ID
router.delete('/:id', (req, res) => {

    db.remove(req.params.id)
        .then(post =>{
            if(!post){
                res.status(404).json({
                    message: 'The post with the specific ID does not exist'
                })
            } else{
                res.status(200).json(post)
            }
        })
        .catch(error =>{
            console.log(error, 'There was a problem deleting post')
            res.status(500).json({
                error: "The post could not be deleted"
            })
        })
})

// PUT request to update post
router.put('/:id', (req, res) =>{

    db.update(req.params.id, {
        title: req.body.title,
        contents: req.body.contents
    } )
        .then(post => {
            console.log(post)
            if(!post){
               return res.status(404).json({
                    message: 'The post with the specific ID does not exist'
                })
            }

            if(!req.body.title || !req.body.contents){
                res.status(400).json({
                    errorMessage: 'Please provide title and contents for the post'
                })
            } else{
                res.status(200).json(post)
            }
        })
        .catch(error =>{
            console.log(error, 'error updating post')
            res.status(500).json({
                error: 'The post information could not be modified'
            })
        })
})

module.exports = router;