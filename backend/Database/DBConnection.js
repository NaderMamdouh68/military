import Mysql from "mysql";
import util from "util";
import dotenv from 'dotenv';


dotenv.config({ path: './.env'});


const db = Mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT,
});

const query = util.promisify(db.query).bind(db);


db.connect((err) => {
    if (err) {
        console.error("Error connecting to DB: " + err.stack);
        return;
    }
    console.log("Connected to DB Successfully");
});


export default query