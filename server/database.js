const env = require('dotenv').config();
const bluebirdPromise = require('bluebird');
const initOptions = { promiseLib: bluebirdPromise };
const pgp = require('pg-promise')(initOptions);
const url = process.env.LOCALHOST_URL;

const db = {
    // Lets define a getAll method on our db object
    getAll: (table) => {
        return db.conn.any(`SELECT * FROM ${table}`);
    }
};

//connection to the pg-promise database through url listed in our .env file
db.conn = pgp(url);

module.exports = db;

// CREATE TABLE high_scores (
//  id serial PRIMARY KEY,
//  username VARCHAR (50) NOT NULL,
//  targetWord VARCHAR (50) NOT NULL,
//  score INTEGER NOT NULL
// );
