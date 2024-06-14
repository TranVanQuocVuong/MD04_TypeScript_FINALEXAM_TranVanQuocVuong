import mysql, { PoolOptions } from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const test:PoolOptions = {
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    port: Number(process.env.DB_PORT) ,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
}

const pool = mysql.createPool(test);

export default pool;