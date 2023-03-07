const router  =  require("express").Router()

const {meta} = require("../controllers")


router.post("/",meta.createMetaEntry)
router.get("/:id",meta.getMetaById)
router.get("/",meta.getAllMeta)



module.exports = {metaRouter: router}