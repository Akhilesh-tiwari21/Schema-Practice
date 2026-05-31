import mongoose from 'mongoose'

const transctionSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['income', 'expend'],
        default: '',
        lowercase: true
    },
    amount: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        default: ''
    },
    merchant: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String
    },
    userId: {
        type: mongoose.Schema.Type.ObjectId,
        ref: 'user',
    }
})