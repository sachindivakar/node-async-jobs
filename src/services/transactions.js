const { stat } = require("knex/lib/migrations/util/fs");
const {meta,transactions, stats} = require("../clients")

module.exports = {
    generateRuleMetrics: async ()=>{
        try{
            const pendingReq = await meta.queryMetaByStatus('PENDING');

            if (!pendingReq.length){
            console.log( {
                message:"NO_PENDING_REQUEST"
            }
         
            )
            return   
            
         }
         const {id,request} = pendingReq[0]
         console.log("Res",request)
      
         
         await meta.updateMetaStatusById(id,"IN_PROGRESS")
         const {value : amount,cond} = request?.[0] || {}
         const statsRes = await transactions.getTransactionStats(amount,cond)
         const {total,sub_total} = statsRes?.[0] || {}
         await stats.createStatsForMetaEntry({request_id:id,sub_total,total_transactions:total})
         await meta.updateMetaStatusById(id,"FINISHED")

        }catch(e){
            console.log(e)
        }
    //  stats.createStatsForMetaEntry({requestId:stats})
     

  }
}