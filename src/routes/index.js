const {metaRouter} = require("./meta")

const baseRouter = require("express").Router()

baseRouter.use("/meta",metaRouter)

module.exports = {
    baseRouter
}