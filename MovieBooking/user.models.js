import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
        lowercase: true
    },
    phone: {
        countryCode: {
            type: String,
            default: ""
        },
        number: {
            type: String,
            required: true,
            unique: true
        }
    },
    password: {
        type: String,
        required: true,
    }
});

const user = mongoose.model('user', userSchema);