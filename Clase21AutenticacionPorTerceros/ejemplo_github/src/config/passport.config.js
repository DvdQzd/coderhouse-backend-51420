import passport from 'passport';
import userService from '../models/Users.model.js';
import GitHubStrategy from 'passport-github2';

const initializePassport = () => {
    passport.use('github', new GitHubStrategy({
        clientID: '',
        clientSecret: '',
        callbackURL: 'http://localhost:8080/api/sessions/githubcallback'
    }, async (accessToken, refreshToken, profile, done) => {
        try {
            console.log({ profile })
            let user = await userService.findOne({ email: profile._json.email });
            if (user) return done(null, user);
            const newUser = {
                first_name: profile._json.name,
                last_name: '',
                email: profile._json.email,
                age: 18,
                password: '',
            }
            user = await userService.create(newUser);
            return done(null, user);
        } catch (error) {
            return done({ message: 'Error creating user' });
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