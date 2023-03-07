const {transactions} = require("../services")
const cron = require('node-cron');

class JobScheduler {
   
    start(){
        cron.schedule('* * * * *', async () =>  {
           console.log("starting process")
           await transactions.generateRuleMetrics()
            console.log('will execute every minute until stopped');
          });
          
    }
}


module.exports = {
    scheduler: new JobScheduler()
}