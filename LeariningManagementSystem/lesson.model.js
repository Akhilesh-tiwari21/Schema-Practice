import mongoose from 'mongoose';

const lessonSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 100
    },
    videoUrl: {
        type: String,
        required: true,
        trim: true
    },
    duration: {
        type: Number,
        required: true,
        min: [1, 'Duration must be greater than 0']
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'course',
        required: true
    },
    order: {
        type: Number,
        required: true,
        min: 1
    },
    isPreview: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

const lesson = mongoose.model('lesson', lessonSchema);
