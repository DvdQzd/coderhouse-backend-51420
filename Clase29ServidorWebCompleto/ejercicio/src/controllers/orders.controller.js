import Order from '../daos/order.dao.js';

const order = new Order();

export const getOrders = async (req, res) => {
    const result = await order.getOrders();
    if(!result) res.status(500).send({status: 'error', error: 'Something went wrong'});
    res.send({status: 'success', result });
};

export const getOrderById = async (req, res) => {
    const result = await order.getOrderById(req.params.id);
    if(!result) res.status(404).send({status: 'error', error: 'Order not found'});
    res.send({status: 'success', result });
}

export const createOrder = async (req, res) => {
    const result = await order.saveOrder(req.body);
    if(!result) res.status(500).send({status: 'error', error: 'Something went wrong'});
    res.send({status: 'success', result });
};

export const resolveOrder = async (req, res) => {
    const result = await order.updateOrder(req.params.id, { resolved: true });
    if(!result) res.status(500).send({status: 'error', error: 'Something went wrong'});
    res.send({status: 'success', result });
};