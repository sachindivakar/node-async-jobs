const {transactions} = require("../services")

module.exports =  function (input) {
    const {id,request} = input.data
    console.log("QUEUE GOT INVOKED",input.data)
   return  transactions.generateRuleMetricsForQ({id,request}).then((res)=>{
        return Promise.resolve(true);
     })

  }