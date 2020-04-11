const express = require('express');
const db = require('../data/db');

const router = express.Router();

// POST request making post
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

// POST request with ID
router.post('/:id/comments',(req, res)=>{
    const id = req.params.id;
    console.log(req.params.id)

    if(!req.body.text){
        return res.status(400).json({
            errorMessage: 'Please provide text for the comment'
        })
    }
        db.findById(id)
        .then(post =>{
            console.log(post)
            if(!post){
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

module.exports = router;