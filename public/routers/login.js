const connection = require('../chart')

module.exports = login = (req, res)=> {
    console.log(req.body)
    let sqlStr = "select * from user where username=? and password=?"
    connection.query(sqlStr, [req.body.username, req.body.password], (error, results)=> {
        if(error) return console.log(error)
        res.json({err_code: 0, message: "登录成功！"})
    })
}