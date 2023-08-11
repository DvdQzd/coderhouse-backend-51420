import Business from "../daos/business.dao.js";

const business = new Business();

export const getBusiness = async (req, res) => {
    const result = await business.getBusiness();
    if(!result) res.status(500).send({status: 'error', error: 'Something went wrong'});
    res.send({status: 'success', result });
};

export const getBusinessById = async (req, res) => {
    const result = await business.getBusinessById(req.params.id);
    if(!result) res.status(404).send({status: 'error', error: 'Business not found'});
    res.send({status: 'success', result });
};

export const createBusiness = async (req, res) => {
    const result = await business.saveBusiness(req.body);
    if(!result) res.status(500).send({status: 'error', error: 'Something went wrong'});
    res.send({status: 'success', result });
};

export const addProduct = async (req, res) => {
    const business = await business.getBusinessById(req.params.id);
    if(!business) res.status(404).send({status: 'error', error: 'Business not found'});
    business.products.push(req.body);
    const result = await business.updateBusiness(req.params.id, business);
    if(!result) res.status(500).send({status: 'error', error: 'Something went wrong'});
    res.send({status: 'success', result });
};