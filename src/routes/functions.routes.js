import { Router } from "express";
import { getFunctions, postNewFunction, getFunction, deleteFunction, updateFunction } from "../controllers/functions.controller";

const funtionRouter = Router();

funtionRouter.get('/functions', getFunctions);

funtionRouter.post('/functions', postNewFunction);

funtionRouter.delete('/functions/:idFunction', deleteFunction);

funtionRouter.put('/functions/:idFunction', updateFunction);

funtionRouter.get('/functions/:idFunction', getFunction);

export default funtionRouter;