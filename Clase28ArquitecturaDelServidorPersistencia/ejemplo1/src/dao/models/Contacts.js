import mongoose from 'mongoose';

const collection = 'Contacts';

const schema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
})

const contactModel = mongoose.model(collection,schema);

export default contactModel;