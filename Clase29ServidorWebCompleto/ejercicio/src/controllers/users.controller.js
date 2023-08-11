export const getUsers = (req, res) => {
    res.send({status: 'success', result: 'getUsers'});
};

export const getUserById = (req, res) => {
    res.send({status: 'success', result: 'getUserById'});
};

export const saveUser = (req, res) => {
    res.send({status: 'success', result: 'saveUser'});
};