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

module.exports = router;