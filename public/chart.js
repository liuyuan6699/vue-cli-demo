const express = require('express');
const app = express();


const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'mydb_12'
})

module.exports = connection

