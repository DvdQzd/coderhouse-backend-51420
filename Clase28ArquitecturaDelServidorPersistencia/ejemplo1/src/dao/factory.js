import ContactsMongo from './mongo/contacts.mongo.js';
import ContactsMemory from './memory/contacts.memory.js';

export default class ContactsDaoFactory {
    constructor() {}

    static getDao() {
        const dao = process.env.PERSISTENSE || 'mongo';
        switch (dao) {
            case 'mongo':
                return new ContactsMongo();
            case 'memory':
                return new ContactsMemory();
            default:
                return new ContactsMongo();
        }
    }
}