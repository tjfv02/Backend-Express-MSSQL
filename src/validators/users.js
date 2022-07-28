const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');

const validatePostUser = [ //! postNewUser username, fistname, lastname
    check('username','el nombre de usuario es requerido')
        .exists()
        .not()
        .isEmpty(), 
    check('fistName', 'El nombre es requerido')
        .exists()
        .not()
        .isEmpty(),
    check('lastName', 'El apellido es requerido')
        .exists()
        .not()
        .isEmpty(),
    (req, res, next) => {
        validateResult(req, res, next);
    }
]

const validateIdUser = [ 
    check('idUser','el id del usuario es inválido')
        .exists()
        .isNumeric()
        .not()
        .isEmpty(), 
    (req, res, next) => {
        validateResult(req, res, next);
    }
]

module.exports = { validatePostUser, validateIdUser }