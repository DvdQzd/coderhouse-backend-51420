import usersModel from "../schemas/users.schema.js";

export default class UsersManager {
    usersModel;

    constructor() {
        this.usersModel = usersModel;
    }

    async getAllUsers() {
        try {
            const users = await this.usersModel.find({});

            return users;
        } catch (error) {
            console.log(
                "🚀 ~ file: users.manager.js:18 ~ UsersManager ~ getAllUsers ~ error:",
                error
            );
        }
    }

    async getUserByEmail(email) {
        try {
            const userData = await this.usersModel.findOne({ email });

            return userData;
        } catch (error) {
            console.log(
                "🚀 ~ file: users.manager.js:30 ~ UsersManager ~ getUserByEmail ~ error:",
                error
            );
        }
    }

    async getUserById(id) {
        try {
            const userData = await this.usersModel.findOne({ _id: id });

            return userData;
        } catch (error) {
            console.log(
                "🚀 ~ file: users.manager.js:30 ~ UsersManager ~ getUserById ~ error:",
                error
            );
        }
    }

    async toggleUserRole(user) {
        try {
            const newRole = user.role === "premium" ? "user" : "premium";
            return await user.updateOne({ role: newRole });
        } catch (error) {
            console.log(
                "🚀 ~ file: users.manager.js:44 ~ UsersManager ~ toggleUserRole ~ error:",
                error
            );
        }
    }

    async setLastConnection(user) {
        try {
            return await user.updateOne({ last_connection: new Date() });
        } catch (error) {
            console.log(
                "🚀 ~ file: users.manager.js:44 ~ UsersManager ~ toggleUserRole ~ error:",
                error
            );
        }
    }
}
