import { Router } from "express";
import { getUsersRoles, postNewUsersRoles, getUserRol, deleteUserRol, updateUserRol } from "../controllers/user_roles.controller";

const user_rolRouter = Router();

user_rolRouter.get('/user_rol', getUsersRoles);

user_rolRouter.post('/user_rol', postNewUsersRoles);

user_rolRouter.delete('/user_rol/:idUserRol', deleteUserRol);

user_rolRouter.put('/user_rol/:idUserRol', updateUserRol);

user_rolRouter.get('/user_rol/:idUserRol', getUserRol);

export default user_rolRouter;