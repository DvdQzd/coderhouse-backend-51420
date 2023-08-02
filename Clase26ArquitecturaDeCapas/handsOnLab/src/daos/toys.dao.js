export default class ToysDao {
    constructor() {
        this.toys = [];
    }

    getAll() {
        return this.toys;
    }

    getById(id) {
        return this.toys.find(toy => toy.id === id);
    }

    create(toy) {
        this.toys.push(toy);
    }

    update(id, toy) {
        const index = this.toys.findIndex(toy => toy.id === id);
        this.toys[index] = toy;
    }

    delete(id) {
        const index = this.toys.findIndex(toy => toy.id === id);
        this.toys.splice(index, 1);
    }
}