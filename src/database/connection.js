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

export async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings);
        return pool
        
    } catch (error) {
        console.error(error)
    }
}

export {sql};

