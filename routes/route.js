const express = require('express');
const router = express.Router();

const Video = require('../models/videos');

router.get('/videos', (req, res, next)=>{
    //res.send('Retreive the videos list');
    Video.find(function(err, videos) {
        res.json(videos);
    })
});

router.post('/video', (req, res, next)=>{
    let newVideo = new Video({
        name: req.body.name,
        url: req.body.url
    });
    newVideo.save((err, video)=>{
        if(err)
        {
            res.json({msg: 'failed to add video'});
        }
        else{
            res.json({msg: 'video added'});
        }
    })
    //res.send('Post a video');
});

module.exports = router;