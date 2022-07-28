const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');

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

const validateIdRol = [ 
    check('idRol','el id del Rol es inválido')
        .exists()
        .isNumeric()
        .not()
        .isEmpty(), 
    (req, res, next) => {
        validateResult(req, res, next);
    }
]

const validateIdFunction = [ 
    check('idFunction','el id de la función es inválido')
        .exists()
        .isNumeric()
        .not()
        .isEmpty(), 
    (req, res, next) => {
        validateResult(req, res, next);
    }
]

module.exports = { validateIdFunction, validateIdRol, validateIdUser }