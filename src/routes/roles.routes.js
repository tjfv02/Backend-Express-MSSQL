import { Router } from "express";
import { getRoles, postNewRol, getRol, deleteRol, updateRol } from "../controllers/roles.controller";

const { validatePostRol, validateIdRol } = require('../validators/roles');
const rolRouter = Router();

rolRouter.get('/roles', getRoles);

rolRouter.post('/roles', validatePostRol, postNewRol);

rolRouter.delete('/roles/:idRol', validateIdRol, deleteRol);

rolRouter.put('/roles/:idRol', validateIdRol, updateRol);

rolRouter.get('/roles/:idRol', validateIdRol, getRol);

export default rolRouter;