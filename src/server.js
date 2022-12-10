//const express = require('express')
import express from 'express'
import configViewEngine from './configs/viewEngine'

import * as dotenv from 'dotenv'
dotenv.config()

import initWebRoute from './route/web'
import connection from './configs/connectDB';




const app = express()
const port = process.env.PORT || 3000;

//set up views engine
configViewEngine(app);

//init web route
initWebRoute(app)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})