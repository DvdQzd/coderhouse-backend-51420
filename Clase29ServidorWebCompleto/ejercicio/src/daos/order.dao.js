import orderModel from "./models/order.model.js";

export default class Order {
    getOrders = async () => {
        try {
            const orders = await orderModel.find();
            return orders;
        } catch (error) {
            console.log(error)
            return null;
        }
    }

    getOrderById = async (id) => {
        try {
            const order = await orderModel.findById(id);
            return order;
        } catch (error) {
            console.log(error)
            return null;
        }
    }

    saveOrder = async (order) => {
        try {
            const newOrder = await orderModel.create(order);
            return newOrder;
        } catch (error) {
            console.log(error)
            return null;
        }
    }

    updateOrder = async (id, order) => {
        try {
            const result = await orderModel.updateOne({ _id: id }, order);
            return result;
        } catch (error) {
            console.log(error)
            return null;
        }
    }
}