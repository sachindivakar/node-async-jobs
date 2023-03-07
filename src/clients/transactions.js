const knex = require('../db')


const operationMap = {
    le: '<',
    gt: '>',
    le: '<=',
    ge: '>=',
    eq: '=',
    ne: '!='
 }


module.exports = {
   getTransactionStats: async (amount,op)=>{
        try{
           const  result = await knex.raw(`select count(*) total, count(case when  (data->>'amount')::numeric ${operationMap[op]} ?  then 0 end) sub_total from public."Transactions"`,[amount])
           return result
        }
        catch(e){
            console.log("Failed to Get Meta entry",e)
            throw({
                 message: "GET_TRANSACTION_STATS_FAILED",
                 status: 500
             })
        } 
    }


}