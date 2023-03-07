
module.exports = {
    setSuccessResponse:(res,result)=>{

        return res.status(200).json({
            status:'Ok',
           ...( result && { result } )
        })
    },
    setErrorResponse:(res,{message,status})=>{

        return res.status(status).json({
            status:'NOk',
       //     ...( message && { message } )
        })
    }
}