const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');

const validatePostFunction = [ 
    check('name','el nombre de la función es requerido')
        .exists()
        .not()
        .isEmpty(), 
    check('description', 'La descripción es requerida')
        .exists()
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

module.exports = { validatePostFunction, validateIdFunction }