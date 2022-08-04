import { Router } from "express";
import { getAssignedRol, getFunctionsRol, getFunctionsRolUser, getUsersWithoutRol, updateUser } from "../controllers/reports.controllers";

const { validateIdFunction, validateIdRol, validateIdUser } = require("../validators/reports")
const reportsRouter = Router();

reportsRouter.get('/reports/user_rol/:idRol', validateIdRol, getAssignedRol);

reportsRouter.get('/reports/functions_rol/:idRol', validateIdRol, getFunctionsRol);

reportsRouter.get('/reports/functions_rol_user/:idUser', validateIdUser, getFunctionsRolUser);

reportsRouter.get('/reports/users_no_rol',  getUsersWithoutRol);

export default reportsRouter;