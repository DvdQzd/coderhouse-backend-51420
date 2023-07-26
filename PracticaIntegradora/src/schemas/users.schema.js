import mongoose from "mongoose"

export const usersCollection = "Users"

const usersSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    birth_date: {
        type: Date,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Carts",
        required: false,
    },
    role: {
        type: String,
        default: "user"
    }
})

const usersModel = mongoose.model(usersCollection, usersSchema);
export default usersModel;
