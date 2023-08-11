import mongoose from "mongoose";

const collection = "users";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String },
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "orders",
        },
    ],
});

const userModel = mongoose.model(collection, userSchema);

export default userModel;