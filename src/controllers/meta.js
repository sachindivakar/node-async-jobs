const {meta} = require("../services")
const {setErrorResponse,setSuccessResponse} = require("../helpers")

module.exports = {
   createMetaEntry: async (req,res)=> {
     try{
        const request = req.body
        const result = await meta.createMetaEntry(request)
        return setSuccessResponse(res,result)
     }catch(e){
        console.error(e)
        return setErrorResponse(res,e)
     }
   }, 
   createMetaEntryUsingWorkerThread: async (req,res)=> {
      try{
         const request = req.body
         const result = await meta.createMetaEntry(request)
         await meta.createMetaEntryUsingWorkerThread()
         return setSuccessResponse(res,result)
      }catch(e){
         console.error(e)
         return setErrorResponse(res,e)
      }
    },
   getMetaById: async (req,res)=> {
    try{
       const {id} = req.params
       const result = await meta.getMetaById(id)
       return setSuccessResponse(res,result)
    }catch(e){
       return setErrorResponse(res,e)
    }
  },
   getAllMeta: (_req,res)=> {
    try{
       const result = meta.getAllMeta()

       return setSuccessResponse(res,result)
    }catch(e){
       return setErrorResponse(res,e)
    }
  }
}