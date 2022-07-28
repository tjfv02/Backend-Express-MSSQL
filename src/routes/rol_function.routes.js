import { Router } from "express";
import { getRolFunctions, postNewRolFunction, getRolFunction, deleteRolFunction, updateRolFunction } from "../controllers/rol_functions.controllers";

const rol_functionRouter = Router();

rol_functionRouter.get('/rol_function', getRolFunctions);

rol_functionRouter.post('/rol_function', postNewRolFunction);

rol_functionRouter.delete('/rol_function/:idRolFunction', deleteRolFunction);

rol_functionRouter.put('/rol_function/:idRolFunction', updateRolFunction);

rol_functionRouter.get('/rol_function/:idRolFunction', getRolFunction);

export default rol_functionRouter;