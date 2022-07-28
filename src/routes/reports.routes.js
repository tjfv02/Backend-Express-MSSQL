import { Router } from "express";
import { getAssignedRol, getFunctionsRol, getFunctionsRolUser, getUsersWithoutRol, updateUser } from "../controllers/reports.controllers";

const reportsRouter = Router();

reportsRouter.get('/reports/user_rol/:idRol', getAssignedRol);

reportsRouter.get('/reports/functions_rol/:idRol', getFunctionsRol);

reportsRouter.get('/reports/functions_rol_user/:idUser', getFunctionsRolUser);

reportsRouter.get('/reports/users_no_rol', getUsersWithoutRol);

export default reportsRouter;