import { Router } from "express";
import { getFunctions, postNewFunction, getFunction, deleteFunction, updateFunction } from "../controllers/functions.controller";

const { validatePostFunction, validateIdFunction } = require('../validators/functions');

const funtionRouter = Router();

funtionRouter.get('/functions', getFunctions);

funtionRouter.post('/functions', validatePostFunction, postNewFunction);

funtionRouter.delete('/functions/:idFunction', validateIdFunction, deleteFunction);

funtionRouter.put('/functions/:idFunction', validateIdFunction, updateFunction);

funtionRouter.get('/functions/:idFunction', validateIdFunction, getFunction);

export default funtionRouter;