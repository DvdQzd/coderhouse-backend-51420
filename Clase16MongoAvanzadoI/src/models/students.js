import mongoose from 'mongoose';

const collection = 'Students';

const schema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        index: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true
    },
    courses: {
        type: [
            {
                course: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Courses',
                }
            }
        ],
        default: []
    }
})

// schema.pre('find', function () {
//     this.populate('courses.course');
// });

schema.pre('findOne', function () {
    this.populate('courses.course');
});

const studentsModel = mongoose.model(collection, schema);
export default studentsModel;