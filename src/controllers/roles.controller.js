import { getConnection, sql } from "../database/connection";

export const getRoles = async (req, res) => {
    const pool = await getConnection();
    const result = await pool
        .request()
        .query(
            'SELECT * FROM ROLES'
        );

    res.json(result.recordset);
}

export const postNewRol = async (req, res) => {
    const {name, description} = req.body;
    console.log(req.body);

    const pool = await getConnection();
    const result = await pool.request()
            .input("name", sql.VarChar, name)
            .input("description", sql.VarChar, description)

            .query('INSERT INTO ROLES (name, description, date_created, date_update, status) VALUES (@name, @description, GETDATE(), null, 1)')
    res.json(`Rol: *${name}* creado con éxito`);
    res.json({name, description});
}

export const getRol = async (req, res) => {
    const {idRol} = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("idRol", idRol)
        .query('SELECT * FROM ROLES WHERE idRol = @idRol');
    console.log(result);
    res.send(result.recordset[0]);
}

export const deleteRol = async (req, res) => {
    const {idRol} = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("idRol", idRol)
        .query('DELETE FROM ROLES WHERE idRol = @idRol');
    console.log('Rol Eliminado');
    res.send(result);
}

export const updateRol = async (req, res) => {
    const {idRol} = req.params;
    const {name, description, date_update, status} = req.body;

    const pool = await getConnection();
    await pool.request()
            .input("idRol", idRol)
            .input("name", sql.VarChar, name)
            .input("description", sql.VarChar, description)
            .input("date_update", date_update)
            .input("status", status)
            .query('UPDATE ROLES SET name = @name, description = @description, date_update = GETDATE(), status = @status WHERE idRol = @idRol');
    res.json({name, description, date_update, status});
    
}
