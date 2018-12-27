const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwtUtil = require('./utils/jwt')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use((req, res, next)=> {
    if (req.url != '/user/login' && req.url != '/user/register') {
        let token = req.headers.token;
        console.log(token)
        let jwt = new jwtUtil(token)
        let result = jwt.verifyToken();
        console.log(result)
        if (result == 'err') {
            res.send({status: 403, msg: '登录已过期,请重新登录'});
        } else {
            next()
        }
    } else {
        next()
    }
})

// const router = require('./router')
const userRouter = require('./routers/user')

app.use('/user', userRouter)

app.listen(4000, function() {
    console.log("http://127.0.0.1:4000 is running")
})