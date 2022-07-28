import { getConnection, sql } from "../database/connection";


export const getFunctions = async (req, res) => {
    const pool = await getConnection();
    const result = await pool
        .request()
        .query('SELECT * FROM FUNCTIONS');
    res.json(result.recordset);
}

export const postNewFunction = async (req, res) => {
    const {name, description} = req.body;
    

    const pool = await getConnection();
    const result = await pool

        .request()
        .input("name", name)
        .input("description", description)
        .query('INSERT INTO FUNCTIONS (name, description, date_created, date_update, status) VALUES (@name, @description, GETDATE(), null, 1)')
        res.json(`Función: *${name}* creada con éxito`);
        res.json({name, description});
}

export const getFunction = async (req, res) => {
    const {idFunction} = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("idFunction", idFunction)
        .query('SELECT * FROM FUNCTIONS WHERE idFunction = @idFunction');
    console.log(result);
    res.send(result.recordset[0]);
}

export const deleteFunction = async (req, res) => {
    const {idFunction} = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("idFunction", idFunction)
        .query('DELETE FROM FUNCTIONS WHERE idFunction = @idFunction');
    console.log('Función Eliminada');
    res.send(result);
}

export const updateFunction = async (req, res) => {
    const {idFunction} = req.params;
    const {name, description, date_update, status} = req.body;

    const pool = await getConnection();
    await pool.request()
            .input("idFunction", idFunction)
            .input("name", sql.VarChar, name)
            .input("description", sql.VarChar, description)
            .input("date_update", date_update)
            .input("status", status)
            .query('UPDATE FUNCTIONS SET name = @name, description = @description, date_update = GETDATE(), status = @status WHERE idFunction = @idFunction');
    res.json({name, description, date_update, status});
    
}