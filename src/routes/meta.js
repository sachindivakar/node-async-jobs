const router  =  require("express").Router()

const {meta} = require("../controllers")


router.post("/",meta.createMetaEntry)
router.post("/worker-thread",meta.createMetaEntryUsingWorkerThread)
router.get("/:id",meta.getMetaById)
router.get("/",meta.getAllMeta)



module.exports = {metaRouter: router}