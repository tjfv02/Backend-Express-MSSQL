// ingresar datos
// verificar datos
    // Datos verificados
        //verificar status
            // iniciar sesion

    // Error
        //intentos +1
        //intentos > 3?
                //Usuario bloqueado
const bcrypt = require('bcryptjs');
import { getConnection, sql } from "../database/connection";

export const login = async (req, res) => {
    const { username, password } = req.body;
    console.log(username);
    console.log(password);

    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("username", username)
            .query('SELECT * FROM USERS WHERE username = @username');
        console.log(result);
        let usuario = result.recordset[0];

        console.log('Objeto Usuario Obtenido');

        // El usuario Existe?
        if (!Object.entries(usuario).length === 0) {
            console.log('El usuario no existe');
            return res
                .status(400)
                .json({ errors: [{ msg: 'El Usuario no existe' }]});
            
        }

        console.log('Si existe el usuario');

        //validar status
        if (usuario.status === 1) {
            //Password match
            console.log('Usuario ACTIVO');
            const  isMatch = await bcrypt.compare(password, usuario.password);
            console.log('Pass verificada');
            

            if(!isMatch){
                console.log('No coincide ');
                usuario.attempts = usuario.attempts + 1;
                console.log(`Intentos: ${usuario.attempts}`);

                await getConnection();
                console.log('CONEXION REALIZADA');
                await pool.request()
                        .input("idUser", usuario.idUser)
                        .input("attempts", usuario.attempts)
                        .query('UPDATE USERS SET attempts = @attempts WHERE idUser = @idUser')
                console.log('Datos actualizados');
                

                if (usuario.attempts > 3) {
                    console.log('Tiene más de 3 intentos');
                    usuario.status = 0;

                    await getConnection();
                    console.log('CONEXION REALIZADA');
                    await pool.request()
                        .input("idUser", usuario.idUser)
                        .input("status", usuario.status)
                        .query('UPDATE USERS SET status = @status WHERE idUser = @idUser')
                        console.log('Datos actualizados');


                    return res
                        .status(400)
                        .json({ errors: [{ msg: 'Usuario Bloqueado, consulte a un Administrador', intentos: usuario.attempts, login : "false"}]});
                }

                return res
                    .status(400)
                    .json({ errors: [{ msg: 'Credenciales inválidas', intentos: usuario.attempts, login : "false"}]});
            }

            console.log('USUARIO CORRECTO');
            console.log(usuario);

            res.json({login : "true"});
            
        }else{
            console.log('Usuario INACTIVO');
            return res
                .status(400)
                .json({ errors: [{ msg: 'Usuario Bloqueado, consulte a un Administrador'}]});
        }




            

    } catch (error) {
        
    }
}