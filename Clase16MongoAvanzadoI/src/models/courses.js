import mongoose from 'mongoose';

const collection = 'Courses';

const schema = new mongoose.Schema({
    title: String,
    description: String,
})

const coursesModel = mongoose.model(collection, schema);
export default coursesModel;