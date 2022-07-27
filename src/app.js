import  express  from "express";
import config from "./config";
import rolRouter from "./routes/roles.routes";
import usersRoutes from "./routes/users.routes";

const app = express();

//settings
app.set('port', config.port);

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //Para recibir datos de forms html
app.use(usersRoutes); //
app.use(rolRouter); //

export default app;