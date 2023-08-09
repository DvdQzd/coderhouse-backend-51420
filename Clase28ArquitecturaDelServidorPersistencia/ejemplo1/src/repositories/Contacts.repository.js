import ContactDTO from "../dto/contact.dto";

export default class ContactsRepository {

    constructor(dao) {
        this.dao = dao;
    }

    getContacts = async () => {
        const contacts = await this.dao.get();
        return contacts;
    }

    createContact = async (contact) => {
        const contactToInsert = new ContactDTO(contact);
        const result = await this.dao.create(contactToInsert);
        return result;
    }

    getById = async (id) => {
        const contact = await this.dao.getById(id);
        return contact;
    }

    createContact = async (contact) => {
        await this.dao.create(contact);
    }

    updateContact = async (id, contact) => {
        await this.dao.update(id, contact);
    }

    deleteContact = async (id) => {
        await this.dao.delete(id);
    }
}