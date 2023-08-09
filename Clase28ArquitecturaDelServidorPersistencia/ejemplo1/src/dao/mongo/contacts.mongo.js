import contactsModel from "../models/Contacts";

export default class Contacts {

    constructor() {}

    get = async () => {
        const contacts = await contactsModel.find();
        return contacts;
    }
}
