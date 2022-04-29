import mysql from 'mysql';
import { DB } from '../env';

let connection = mysql.createPool(
    {
        host: DB.host,
        user: DB.user,
        password: DB.password,
        database: DB.database
});

export { connection }; 