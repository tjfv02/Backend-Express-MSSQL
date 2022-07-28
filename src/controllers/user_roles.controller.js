import { getConnection, sql } from "../database/connection";

export const getUsersRoles = async (req, res) => {
    const pool = await getConnection();
    const result = await pool
        .request()
        .query('SELECT * FROM USER_ROLES');
    res.json(result.recordset);
}

export const postNewUsersRoles = async (req, res) => {
    const {idUser, idRol} = req.body;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("idUser", idUser)
        .input("idRol", idRol)
        .query('INSERT INTO USER_ROLES (idUser, idRol, date_created, date_update, status) VALUES (@idUser, @idRol, GETDATE(), null, 1)')
        res.json({idUser, idRol});
}

export const getUserRol = async (req, res) => {
    const {idUserRol} = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("idUserRol", idUserRol)
        .query('SELECT * FROM USER_ROLES WHERE idUserRol = @idUserRol');
    console.log(result);
    res.send(result.recordset[0]);
}

export const deleteUserRol = async (req, res) => {
    const {idUserRol} = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("idUserRol", idUserRol)
        .query('DELETE FROM USER_ROLES WHERE idUserRol = @idUserRol');
    console.log('Relación Eliminada');
    res.send(result);
}

export const updateUserRol = async (req, res) => {
    const {idUserRol} = req.params;
    const {idUser, idRol, date_update, status} = req.body;

    const pool = await getConnection();
    await pool.request()
            .input("idUserRol", idUserRol)
            .input("idUser", idUser)
            .input("idRol", idRol)
            .input("date_update", date_update)
            .input("status", status)
            .query('UPDATE USER_ROLES SET idUser = @idUser, idRol = @idRol, date_update = GETDATE(), status = @status WHERE idUserRol = @idUserRol');
    res.json({idUser, idRol, date_update, status});
    
}