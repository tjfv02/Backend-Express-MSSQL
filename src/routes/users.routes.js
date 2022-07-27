import { Router } from "express";
import { getUsers, postNewUser, getUser, deleteUser, updateUser } from "../controllers/users.controller";

const userRouter = Router();

userRouter.get('/users', getUsers);

userRouter.post('/users', postNewUser);

userRouter.delete('/users/:idUser', deleteUser);

userRouter.put('/users/:idUser', updateUser);

userRouter.get('/users/:idUser', getUser);

export default userRouter;