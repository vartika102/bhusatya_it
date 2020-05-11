const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

const Video = module.exports = mongoose.model('Video', videoSchema);