const { Pool } = require('pg')
require('dotenv').config({
    path: '../.env'
});


const {HOST,USER,DATABASE,PASSWORD,PORT_DB} = process.env

const pool = new Pool({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
    port: PORT_DB
});

module.exports = pool;