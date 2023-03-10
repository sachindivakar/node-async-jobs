const router  =  require("express").Router()

const {meta} = require("../controllers")


router.post("/",meta.createMetaEntry)
router.post("/worker-thread",meta.createMetaEntryUsingWorkerThread)
router.post("/job-queue",meta.createMetaEntryUsingQ)
router.get("/:id",meta.getMetaById)
router.get("/",meta.getAllMeta)



module.exports = {metaRouter: router}