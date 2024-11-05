const dbType = process.env["DB_TYPE "] || "mysql";

let pool;

if(dbType === "mysql") {
    const mysql = require('mysql2/promise');
    pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
    });
}else if(dbType === "postgres") {
    const { Pool } = require('pg');
    pool = new Pool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
    });
}else{
    throw new Error("Unsupported DB_TYPE. Please use \"mysql\" or \"postgres\".");
}