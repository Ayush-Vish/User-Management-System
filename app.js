// dotenv is used to load enviroment Variables from .env file
require('dotenv').config()
// requiring express package
const express = require('express')
const app= express()
// cors is mechanism by which resources are shared across different servers.
const cors = require('cors')
// Connecting to DB
const connectToDB = require('./config/db.js')
// Express middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
// Initialising to db 
connectToDB()
// UserRoutes strores all the routes 
const userRoutes = require('./routes/routes.js')
//  app.use puts the specified middleware functions at the specified path
app.use('/',userRoutes)
// Exporting app 
module.exports = app;