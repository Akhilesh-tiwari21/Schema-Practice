import mongoose from 'mongoose';

const enrollmentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'course'
    },
    progress: {
        type: Number,
        min: 0,
        max: 100,
        default: 0
    },
    paymentAmount: {
        type: Number,
        required: true,
        min: 0
    },
    enrollmentStatus: {
        type: String,
        enum: ['active', 'completed', 'cancelled'],
        default: 'active'
    }
});

const enrollment = mongoose.model('enrollment', enrollmentSchema);
