const {
    Worker, isMainThread, parentPort, workerData,
  } = require('node:worker_threads');
  
 const {transactions}  = require("../services")
  if (isMainThread) {
    module.exports = function processRequest() {
      return new Promise((resolve, reject) => {
        const worker = new Worker(__filename, {
          workerData: "Worker thread invoked",
        });
        worker.on('message', (message)=>{
            console.info(message)
            resolve()
        });
        worker.on('error', reject);
        worker.on('exit', (code) => {
          if (code !== 0)
            reject(new Error(`Worker stopped with exit code ${code}`));
        });
      });
    };
  } else {
    (async ()=>{
        await transactions.generateRuleMetrics()
        parentPort.postMessage("Succeeded")
        process.exit(0)
    })()
  }