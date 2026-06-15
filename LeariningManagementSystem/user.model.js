import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 4
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,'Please provide a valid email.']
    },

    password: {
        type: String,
        required: true,
        minlength: 8,
        select: false
    },

    role: {
        type:String,
        required: true,
        trim: true,
        enum: ['student', 'admin', 'instructor'],
        default: 'student'
    },

    profileImage: {
        type: String,
        default: ''
    },

    education: {
        type: String,
        required: function () {
            return this.role === 'student';
        }
    },

    bio: {
        type: String,
        required: function () {
            return this.role === 'instructor';
        }
    },

    experience: {
        type: Number,
        required: function () {
            return this.role === 'instructor';
        }
    },

    adminCode: {
        type: String,
        required: function () {
            return this.role === 'admin';
        }
    }
}, {timeStamp: true});

const user = mongoose.model('user', userSchema);