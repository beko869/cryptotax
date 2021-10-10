import dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql';
import util from 'util';

export const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
  
db.connect( (error) => {
    if( error ){
        throw error
    } else {
        console.log( 'Connected to Database.' );
    }
});

//make a promise from query function
export const query = util.promisify(db.query).bind(db);
  