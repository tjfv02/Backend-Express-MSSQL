import { Router } from "express";
import { getRoles, postNewRol, getRol, deleteRol, updateRol } from "../controllers/roles.controller";

const rolRouter = Router();

rolRouter.get('/roles', getRoles);

rolRouter.post('/roles', postNewRol);

rolRouter.delete('/roles/:idRol', deleteRol);

rolRouter.put('/roles/:idRol', updateRol);

rolRouter.get('/roles/:idRol', getRol);

export default rolRouter;