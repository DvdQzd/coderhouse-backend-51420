import User from '../daos/user.dao.js';

const user = new User();

export const getUsers = (req, res) => {
    const result = user.getUsers();
    if(!result) res.status(500).send({status: 'error', error: 'Something went wrong'});
    res.send({status: 'success', result });
};

export const getUserById = (req, res) => {
    const result = user.getUserById(req.params.id);
    if(!result) res.status(404).send({status: 'error', error: 'User not found'});
    res.send({status: 'success', result });
};

export const saveUser = (req, res) => {
    const result = user.saveUser(req.body);
    if(!result) res.status(500).send({status: 'error', error: 'Something went wrong'});
    res.send({status: 'success', result });
};