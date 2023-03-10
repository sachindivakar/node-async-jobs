const Queue = require('bull');

const {transactions} = require("../services")
const {meta} = require("../services")
const {setErrorResponse,setSuccessResponse} = require("../helpers")

const statsQ = new Queue('stats', process.env.REDIS_URL || 'redis://127.0.0.1:6379');

statsQ.process((require("os").cpus().length -1),__dirname + '/../polling-job/processor.js');
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
         meta.createMetaEntryUsingWorkerThread()
         return setSuccessResponse(res,result)
      }catch(e){
         console.error(e)
         return setErrorResponse(res,e)
      }
    },  
     createMetaEntryUsingQ: async (req,res)=> {
      try{
         const request = req.body
         const result = await meta.createMetaEntry(request)
         console.log(result)

         const job = await statsQ.add({ id: result[0].id,request: result[0].request });
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