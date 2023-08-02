import ToysDao from "../daos/toys.dao.js";

export class ToysService {
    constructor() {
        this.dao = new ToysDao();
    }

    getAll() {
        return this.dao.getAll();
    }

    getById(id) {
        return this.dao.getById(id);
    }

    create(toy) {
        return this.dao.create(toy);
    }

    update(id, toy) {

        // validate if toy exists
        const toyFound = this.dao.getById(id);
        if (!toyFound) {
            return null;
        } else {
            // validate if toy has sales
            if (toyFound.sales.length > 0) {
                return false;
            }
        }
        // update toy
        return this.dao.update(id, toy);
    }

    delete(id) {

        // validate if toy exists
        const toy = this.dao.getById(id);
        if (!toy) {
            return null;
        } else {
            // validate if toy has sales
            if (toy.sales.length > 0) {
                return false;
            }
        }

        // delete toy
        return this.dao.delete(id);
    }
}   