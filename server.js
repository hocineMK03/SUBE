const express=require('express')
const app=express()
const bodyparser=require('body-parser')
const cookieparser=require('cookie-parser')
const cors = require('cors');
const dotenv=require('dotenv')
dotenv.config()
const port=process.env.PORT || 5000

app.use(cors)
app.use(bodyparser.json())
app.use(cookieparser())


//route exemple
const testroute=require('./src/routes/testRoute')
app.use('/test',testroute)

const server=app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})


