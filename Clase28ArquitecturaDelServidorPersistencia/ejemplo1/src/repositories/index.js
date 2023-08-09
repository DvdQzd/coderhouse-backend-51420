import Contacts from '../dao/factory.js';
import ContactsRepository from './Contacts.repository';

const contacts = Contacts.getDao();
export const contactsRepository = new ContactsRepository(contacts);
