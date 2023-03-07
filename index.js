
const express = require('express');
const app = express()
const {scheduler} = require("./src/polling-job")

const {baseRouter} = require("./src/routes")
const knex = require('./src/db/index.js')
require('dotenv').config()


knex.migrate.latest()
  .then(async function() {
    scheduler.start()
    app.use(express.json())

    app.use('/', baseRouter)
    
    app.use((err,_req,_res,next)=>{
       console.error(err)
       next()
    })
    
    
    app.listen(process.env.PORT || 4000,()=>{
        console.log("Server started running")
    })
  })


