import { getConnection, sql } from "../database/connection";

export const getUsers = async (req, res) => {
    const pool = await getConnection();
    const result = await pool
                        .request()
                        .query(
                            'SELECT * FROM USERS'
                        );

    console.log(result);
    res.json(result.recordset);
}

export const postNewUser = async (req, res) => {
    const {username, fistName, lastName} = req.body;
    console.log(req.body);

    const pool = await getConnection();
    const result = await pool.request()
            .input("username", sql.VarChar, username)
            .input("fistName", sql.VarChar, fistName)
            .input("lastName", sql.VarChar, lastName)

            .query('INSERT INTO USERS (username, fistName, lastName, date_created, date_update, status) VALUES (@username, @fistName, @lastName, GETDATE(), null, 1)')
    res.json(`Usuario: *${username}* creado con éxito`);
}

export const getUser = async (req, res) => {
    const {idUser} = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("idUser", idUser)
        .query('SELECT * FROM USERS WHERE idUser = @idUser');
    console.log(result);
    res.send(result.recordset[0]);
}

export const deleteUser = async (req, res) => {
    const {idUser} = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("idUser", idUser)
        .query('DELETE FROM USERS WHERE idUser = @idUser');
    console.log('Usuarios Eliminado');
    res.send(result);
}

export const updateUser = async (req, res) => {
    const {idUser} = req.params;
    const {username, fistName, lastName, date_update, status} = req.body;

    const pool = await getConnection();
    await pool.request()
            .input("idUser", idUser)
            .input("username", sql.VarChar, username)
            .input("fistName", sql.VarChar, fistName)
            .input("lastName", sql.VarChar, lastName)
            .input("date_update", date_update)
            .input("status", status)
            .query('UPDATE USERS SET username = @username, fistName = @fistName, lastName = @lastName, date_update = GETDATE(), status = @status WHERE idUser = @idUser');
    res.json({username, fistName, lastName, date_update, status});
    
}
