import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({

    comment: {
        type: String,
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: user
    },
    postID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: post
    }
    
})

const commentModel = mongoose.model('comment', commentSchema)