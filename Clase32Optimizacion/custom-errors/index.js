import EErrors from "./enum.js";
export default (error, req, res, next) => {
    console.log('usando middleware de errores')
    console.log(error.cause);
    switch (error.code) {
        case EErrors.INVALID_TYPES_ERROR:
            res.send({status: 'error', error: error.message});
            break;
        default:
            res.send({status: 'error', error: 'Internal Server Error'});
    }
};