import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    pic: {
        type: String,
        required: true,
    },
    userID: {
        type: mongoose.Scheam.Type.objectId,
        ref: user,
    },
    content: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['draft', 'published'],
        default: 'draft'
    },
    views: {
        type: Number,
        default: 0
    },
    tags: [{
        type: String
    }]
})

const postModel = mongoose.model('post', postSchema)