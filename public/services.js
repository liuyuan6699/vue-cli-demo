const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// const router = require('./router')
const userRouter = require('./routers/user')

app.use('/user', userRouter)

app.listen(4000, function() {
    console.log("http://127.0.0.1:4000 is running")
})