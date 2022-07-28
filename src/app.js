import  express  from "express";
import config from "./config";
import funtionRouter from "./routes/functions.routes";
import rolRouter from "./routes/roles.routes";
import rol_functionRouter from "./routes/rol_function.routes";
import usersRoutes from "./routes/users.routes";
import user_rolRouter from "./routes/user_roles.routes";
import reportsRouter from "./routes/reports.routes";

const app = express();

//settings
app.set('port', config.port);

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //Para recibir datos de forms html

app.use(usersRoutes); //
app.use(rolRouter); //
app.use(funtionRouter); //
app.use(user_rolRouter); //
app.use(rol_functionRouter); //
app.use(reportsRouter); //

export default app;