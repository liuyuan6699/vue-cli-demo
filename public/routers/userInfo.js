const express = require('express')
const app = express();
const connection = require('../chart')

module.exports = getUserInfo = (req, res)=> {
    let sqlStr = "select * from user where isdel=0";
    connection.query(sqlStr, (error, results)=> {
        if(error) return console.log(error);
        res.send(results)
    })
}