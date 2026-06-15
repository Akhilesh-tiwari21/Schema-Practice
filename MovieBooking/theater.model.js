import mongoose from 'mongoose';

const theaterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    screens: [{
        name: String,
        totalSeats: Number
    }]
});

const theater = mongoose.model('theater', theaterSchema);