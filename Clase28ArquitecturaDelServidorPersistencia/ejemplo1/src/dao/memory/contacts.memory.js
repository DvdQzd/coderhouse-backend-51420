export default class Contacts {
    constructor() {
        this.contacts = [];
    }

    get = async () => {
        return this.contacts;
    }

    getById = async (id) => {
        return this.contacts.find(contact => contact.id === id);
    }

    create = async (contact) => {
        this.contacts.push(contact);
    }

    update = async (id, contact) => {
        const index = this.contacts.findIndex(contact => contact.id === id);
        this.contacts[index] = contact;
    }

    delete = async (id) => {
        const index = this.contacts.findIndex(contact => contact.id === id);
        this.contacts.splice(index, 1);
    }
}