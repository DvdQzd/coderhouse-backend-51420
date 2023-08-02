import { ToysService } from "../services/toys.service.js";

const toysService = new ToysService();

export const getAllToys = (req, res) => {
    res.send(toysService.getAll());
};

export const getToyById = (req, res) => {
    res.send(toysService.getById(req.params.id));
};

export const createToy = (req, res) => {
    const lastId = toysService.getAll().length;
    req.body.id = lastId + 1;
    res.send(toysService.create(req.body));
};

export const updateToy = (req, res) => {
    res.send(toysService.update(req.params.id, req.body));
};

export const deleteToy = (req, res) => {
    res.send(toysService.delete(req.params.id));
};