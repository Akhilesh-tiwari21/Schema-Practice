import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    seats: {
        type: Number,
        required: true
    },
    ticketPrice: {
        type: Number,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    movieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'movie'
    },
    theaterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'theater'
    },
    bookingStatus: {
        type: status,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    }
});

const booking = mongoose.model('booking', bookingSchema);