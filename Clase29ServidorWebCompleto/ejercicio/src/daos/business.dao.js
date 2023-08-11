import businessModel from "./models/business.model.js";

export default class Business {
    getBusiness = async () => {
        try {
            const business = await businessModel.find();
            return business;
        } catch (error) {
            console.log(error)
            return null;
        }
    }

    getBusinessById = async (id) => {
        try {
            const business = await businessModel.findById(id);
            return business;
        } catch (error) {
            console.log(error)
            return null;
        }
    }

    saveBusiness = async (business) => {
        try {
            const newBusiness = await businessModel.create(business);
            return newBusiness;
        } catch (error) {
            console.log(error)
            return null;
        }
    }

    updateBusiness = async (id, business) => {
        try {
            const result = await businessModel.updateOne({ _id: id }, business);
            return result;
        } catch (error) {
            console.log(error)
            return null;
        }
    }
}