import { getConnection, sql } from "../database/connection";

export const getRolFunctions = async (req, res) => {
    const pool = await getConnection();
    const result = await pool
        .request()
        .query('SELECT * FROM ROLES_FUNCTIONS');
    res.json(result.recordset);
}

export const postNewRolFunction = async (req, res) => {
    const {idRol, idFunction} = req.body;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("idRol", idRol)
        .input("idFunction", idFunction)
        .query('INSERT INTO ROLES_FUNCTIONS (idRol, idFunction, date_created, date_update, status) VALUES (@idRol, @idFunction, GETDATE(), null, 1)');
        res.json({idRol, idFunction});
}

export const getRolFunction = async (req, res) => {
    const {idRolFunction} = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("idRolFunction", idRolFunction)
        .query('SELECT * FROM ROLES_FUNCTIONS WHERE idRolFunction = @idRolFunction');
    console.log(result);
    res.send(result.recordset[0]);
}

export const deleteRolFunction = async (req, res) => {
    const {idRolFunction} = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("idRolFunction", idRolFunction)
        .query('DELETE FROM ROLES_FUNCTIONS WHERE idRolFunction = @idRolFunction');
    console.log('Relación Eliminada');
    res.send(result);
}

export const updateRolFunction = async (req, res) => {
    const {idRolFunction} = req.params;
    const {idRol, idFunction, date_update, status} = req.body;

    const pool = await getConnection();
    await pool.request()
            .input("idRolFunction", idRolFunction)
            .input("idRol", idRol)
            .input("idFunction", idFunction)
            .input("date_update", date_update)
            .input("status", status)
            .query('UPDATE ROLES_FUNCTIONS SET idRol = @idRol, idFunction = @idFunction, date_update = GETDATE(), status = @status WHERE idRolFunction = @idRolFunction');
    res.json({idRol, idFunction, date_update, status});
    
}