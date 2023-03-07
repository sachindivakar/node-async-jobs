const knex = require('../db')




module.exports = {
   createMetaEntry: async (req)=>{
        try{
           const  result = await knex('Meta').insert({
                request: JSON.stringify(req),
                status: 'PENDING'
            }).returning('*')
          return result
        }
        catch(e){
            console.log("Failed to create Meta entry", e)
            throw({
                message: "CREATE_META_FAILED",
                status: 500
            })
        } 
    }
   ,  
   getMetaById: async (id)=>{
    try{
     const result = await knex('Meta').where({id}) 
       return result
    }
    catch(e){
        console.log("Failed to Get Meta entry",e)
       throw({
            message: "GET_META_BY_ID_FAILED",
            status: 500
        })
    } 

   },

   getAllMeta: ()=>{
    try{
    return knex('Meta')
    }
    catch(e){
        console.log("Failed to Get Meta list")
        throw({
            message: "GET_META_LIST",
            status: 500
        })
    } 

   },
   updateMetaStatusById: async (id,status) =>{
    try{
        const result = await knex('Meta').where({ id })
        .update({ 
          status
        },['*'])
        return result
        }
        catch(e){
            console.log("Failed to Update Meta status")
            throw({
                message: "UPDATE_META_STATUS_FAILED",
                status: 500
            })
        } 
   },
   queryMetaByStatus: async (status = "PENDING") =>{
    try{
        const result =  await  knex('Meta').where({ status })
        return result
        }
        catch(e){
            console.log("Failed to Get Meta by status")
            throw({
                message: "UPDATE_META_STATUS_FAILED",
                status: 500
            })
        } 
   }
}