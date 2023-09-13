import {fileURLToPath} from 'url';
import { dirname } from 'path';
import bcrypt from 'bcrypt';
import { default as jwt } from 'jsonwebtoken';

const PRIVATE_KEY = "CoderKeyFeliz";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
export const validatePassword = (user, password) => bcrypt.compareSync(password, user.password);
export const createHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

export const validarToken = (req, res, next) => {
    try {
        const token = req.params.token;
        jwt.verify(token, PRIVATE_KEY);
        const data = jwt.decode(token);
        req.email = data.email;
        next();
    } catch (e) {
        res.send(`Hubo un error al intentar recuperar password: ${e.message}`)
    }
    
}

export default __dirname;