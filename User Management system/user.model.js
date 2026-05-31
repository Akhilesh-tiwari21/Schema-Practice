import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: true,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minLength: [8, 'password must be minimum 8 character'],
        maxLength: [16, 'password must be maximum 16 character'],
        trim: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    profilepic: {
        type: String,
        default: ''
    }
})

export const userModel = mongoose.model('user', userSchema);

