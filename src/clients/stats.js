const knex = require('../db')


module.exports = {
   createStatsForMetaEntry: async ({request_id,sub_total,total_transactions})=>{
        try{
           const  result = await knex('stats').insert({
                request_id,
                sub_total,
                total_transactions
            }).returning('*')
          return result
        }
        catch(e){
            console.log("Failed to create Meta stats entry", e)
            throw({
                message: "CREATE_META_STATS_FAILED",
                status: 500
            })
        } 
    }
}