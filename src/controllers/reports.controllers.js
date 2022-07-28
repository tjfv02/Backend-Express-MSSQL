import { getConnection, sql } from "../database/connection";

export const getAssignedRol = async (req, res) => {
    const {idRol} = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("idRol", idRol)
        .query("EXEC sp_nombreCompletoRol @idRol")
    console.log(idRol);
    res.send(result.recordset);
}

export const getFunctionsRol = async (req, res) => {
    const {idRol} = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("idRol", idRol)
        .query("EXEC sp_funcionesRol @idRol")
    console.log(idRol);
    res.send(result.recordset);
}

export const getFunctionsRolUser = async (req, res) => {
    const {idUser} = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("idUser", idUser)
        .query("EXEC sp_funcionesRolUsuario @idUser")
    console.log(idUser);
    res.send(result.recordset);
}

export const getUsersWithoutRol = async (req, res) => {
    const {fechaInicio, fechaFin} = req.body;
    console.log(req.body);

    const pool = await getConnection();
    const result = await pool.request()
            .input("fechaInicio", fechaInicio)
            .input("fechaFin", fechaFin)
            .query('EXEC sp_usuariosSinRol @fechaInicio, @fechaFin');
    res.send(result.recordset);
}