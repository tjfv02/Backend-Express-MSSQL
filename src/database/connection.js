import sql from "mssql";

const dbSettings = {
    user: "tjfv02",
    password: "passw0rd",
    server:"localhost",
    database: "traineeBDG",
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings);
        const result = await pool.request().query("SELECT * FROM ROLES")
        console.log(result);
        return pool
        
    } catch (error) {
        console.error(error)
    }
}

getConnection();

