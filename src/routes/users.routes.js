import { Router } from "express";
import { getUsers, postNewUser, getUser, deleteUser, updateUser } from "../controllers/users.controller";

const {validatePostUser, validateIdUser} = require('../validators/users');

const userRouter = Router();

userRouter.get('/users', getUsers);

userRouter.post('/users', validatePostUser, postNewUser);

userRouter.delete('/users/:idUser', validateIdUser, deleteUser);

userRouter.put('/users/:idUser', validateIdUser, updateUser);

userRouter.get('/users/:idUser', validateIdUser, getUser);

export default userRouter;