import passport from 'passport';
import jwt from 'passport-jwt';
import userModel from '../schemas/users.schema.js';
import { default as token } from 'jsonwebtoken';
import local from 'passport-local';
import { createHash, validatePassword } from '../utils/utils.js';

const JWTStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;
const LocalStrategy = local.Strategy;
const PRIVATE_KEY = "CoderKeyFeliz";

export const generateToken = user => token.sign({ user }, PRIVATE_KEY, { expiresIn: '1d' })

const initializePassport = () => {
    passport.use('current', new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
        secretOrKey: PRIVATE_KEY
    }, async (jwt_payload, done) => {
        try {
            return done(null, jwt_payload);
        } catch (error) {
            done(error);
        }
    }
    ));

    passport.use('login', new LocalStrategy({ usernameField: 'email' }, async (username, password, done) => {
        try {
            const user = await userModel.findOne({ email: username });
            if (!user) return done(null, false, { message: "User not found" });
            if (!validatePassword(user, password)) return done(null, false);
            const { password: pass, ...userNoPass } = user._doc;
            const jwt = generateToken(userNoPass);
            return done(null, jwt);
        } catch (error) {
            return done({ message: "Error logging in" });
        }
    }));

    passport.use('register', new LocalStrategy({
        usernameField: 'email',
        passReqToCallback: true,
    }, async (req, username, password, done) => {
        const { first_name, last_name, email, birth_date, role } = req.body;
        try {
            let user = await userModel.findOne({ email: username });
            console.log({user})
            if (user) return done(null, false, { message: "User already exists" });
            const newUser = {
                first_name,
                last_name,
                email,
                birth_date,
                password: createHash(password),
                role,
            }
            user = await userModel.create(newUser);
            return done(null, user);
        } catch (error) {
            return done({ message: "Error creating user" });
        }
    }));
};

const cookieExtractor = (req) => {
    let token = null;
    if (req && req.cookies) {
        return token = req?.cookies['coderCookieToken'];
    }
    return token;
};

export default initializePassport;