const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../model/video');

const db = "mongodb+srv://sachu:sachu123@cluster-base.bonoc.mongodb.net/videoplayer?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
},
    () => console.log("Connected to db"));

router.get('/videos', (req, res) => {
    console.log('Get request for all videos');
    Video.find({})
        .exec((err, videos) => {
            if (err) {
                console.log("Error retrieving videos");
            } else {
                res.json(videos);
            }
        });
});

router.get('/videos/:id', (req, res) => {
    console.log('Get request for a single video');
    Video.findById(req.params.id)
        .exec((err, video) => {
            if (err) {
                console.log("Error retrieving video");
            } else {
                res.json(video);
            }
        });
});

router.post('/video', (req, res) => {
    console.log('Post a video');
    var newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;
    newVideo.save((err, insertedVideo) => {
        if (err) {
            console.log("Error saving video");
        } else {
            res.json(insertedVideo);
        }
    });
});

router.put('/video/:id', (req, res) => {
    console.log('Updating a video');
    Video.findByIdAndUpdate(req.params.id,
        {
            $set: { title: req.body.title, url: req.body.url, description: req.body.description }
        },
        {
            new: true
        },
        (err, updatedVideo) => {
            if (err) {
                res.send("Error updating video");
            } else {
                res.json(updatedVideo);
            }
        }

    );

});

router.delete('/video/:id', (req, res) => {
    console.log('Deleting a video');
    Video.findByIdAndRemove(req.params.id, (err, deletedVideo) => {
        if (err) {
            res.send("Error deleting video");
        } else {
            res.json(deletedVideo);
        }
    });
});



module.exports = router;