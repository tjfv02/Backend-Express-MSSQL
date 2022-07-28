const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');

const validatePostRol = [ 
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

module.exports = { validatePostRol, validateIdRol }