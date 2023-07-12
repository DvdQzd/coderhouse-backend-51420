import {fileURLToPath} from 'url';
import { dirname } from 'path';
import bcrypt from 'bcrypt';

export const createHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10)); // hash

export const isValidPassword = (user, password) => bcrypt.compareSync(password, user.password); // true/false

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;