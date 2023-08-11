import mongoose from "mongoose";

const collection = "business";

const businessSchema = new mongoose.Schema({
    name: { type: String, required: true },
    products: [],
});

const businessModel = mongoose.model(collection, businessSchema);

export default businessModel;