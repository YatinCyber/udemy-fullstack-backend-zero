const express = require('express')
const {getHomePage, getABC} = require('../controllers/homeController')
const rounter = express.Router()

//routes default
rounter.get('/', getHomePage)
//routes /abc
rounter.get('/abc', getABC )

module.exports = rounter 

//../controllers/homeController