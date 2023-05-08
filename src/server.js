require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')

const app = express()    
const port = process.env.PORT || 8080
const hostname = process.env.HOST_NAME

//config view engine
configViewEngine(app)

//khai bao routes
app.use('/', webRoutes)

//app run
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

})