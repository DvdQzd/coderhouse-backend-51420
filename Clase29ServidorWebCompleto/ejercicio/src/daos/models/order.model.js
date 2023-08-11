import mongoose from "mongoose";

const collection = "orders";

const orderSchema = new mongoose.Schema({
    number: { type: Number, required: true },
    business: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "business",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    products: [],
    totalProducts: { type: Number, required: true },
});

const orderModel = mongoose.model(collection, orderSchema);

export default orderModel;