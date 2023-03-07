const {meta} = require("../clients")


module.exports = {
   createMetaEntry: (req)=> meta.createMetaEntry(req),
   createMetaEntryUsingWorkerThread: (req)=> meta.createMetaEntry(req)
   ,  
   getMetaById: (id)=> meta.getMetaById(id)
   ,
   getAllMeta: ()=>meta.getAllMeta()
}