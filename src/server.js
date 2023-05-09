require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')

const app = express()    

const port = process.env.PORT || 8080
const hostname = process.env.HOST_NAME

//config view engine
configViewEngine(app)

//khai bao routes
app.use('/', webRoutes)

 //simple query

 connection.query(
  'select * from Users u ',
  function (err, results, fields) {
    console.log(">>> RESULTS: " + JSON.stringify(results));
    // console.log(">>> FIELDS: " + JSON.stringify(fields));

  }
)

//app run
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

})