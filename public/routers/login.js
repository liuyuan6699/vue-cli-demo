const connection = require('../chart')
const jwtUtil = require('../utils/jwt')

module.exports = login = (req, res)=> {
    console.log(req.body)
    let sqlStr = "select * from user where username=? and password=?"
    connection.query(sqlStr, [req.body.username, req.body.password], (error, results)=> {
        if(error) return console.log(error)
        results = JSON.stringify(results)
        results = JSON.parse(results)
        console.log(results)
        if (results.length == 0) {
            return res.json({err_code: 403, message: "您输入的账号信息不存在！"})
        }
        if(req.body.username === results[0].username && req.body.password === results[0].password) {
            let _id = results[0].id
            let jwt = new jwtUtil(_id);
            let token = jwt.generateToken()
            res.json({err_code: 200, message: "登录成功！", token})
        } else {
            res.json({err_code: 403, message: "账号或密码错误！"})
        }
    })
}