import passport from 'passport';
import local from 'passport-local';
import userService from '../models/Users.model.js';
import { createHash, validatePassword } from '../utils.js';

const LocalStrategy = local.Strategy;
const initializePassport = () => {
    passport.use('register', new LocalStrategy({
        usernameField: 'email',
        passReqToCallback: true,
    }, async (req, username, password, done) => {
        const { first_name, last_name, email, age } = req.body;
        try {
            let user = await userService.findOne({ email: username });
            if (user) return done(null, false);
            const newUser = {
                first_name,
                last_name,
                email,
                age,
                password: createHash(password),
            }
            user = await userService.create(newUser);
            return done(null, user);
        } catch (error) {
            return done({ message: "Error creating user" });
        }
    }));

    passport.use('login', new LocalStrategy({ usernameField: 'email' }, async (username, password, done) => {
        try {
            const user = await userService.findOne({ email: username });
            if (!user) return done(null, false, { message: "User not found" });
            if (!validatePassword(user, password)) return done(null, false);
            return done(null, user);
        } catch (error) {
            return done({ message: "Error logging in" });
        }
    }));

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser(async (_id, done) => {
        try {
            const user = await userService.findOne({ _id });
            return done(null, user);
        } catch {
            return done({ message: "Error deserializing user" });
        }
    });
};

export default initializePassport;