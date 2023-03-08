

const {meta} = require("../clients")
const processRequest = require("../polling-job/worker")

module.exports = {
   createMetaEntry: (req)=> meta.createMetaEntry(req),
   createMetaEntryUsingWorkerThread: async (req)=> {
      if (processRequest){
        await processRequest()
      }
   }
   ,  
   getMetaById: (id)=> meta.getMetaById(id)
   ,
   getAllMeta: ()=>meta.getAllMeta()
}