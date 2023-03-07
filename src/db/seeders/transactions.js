const { faker } = require('@faker-js/faker');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Transactions').del()


  const generateTransactionData = ()=>{
      let ts = []
      for (let i = 0;i<1_00_00_000;i++){
          ts.push({
            data: JSON.stringify({
              amount: Math.floor(Math.random() * (10000 - 0 + 1)),
              date: new Date(new Date().getTime() - (Math.floor(Math.random() * (30 - 1 + 1)) * 100000000 )),
              email: faker.internet.email()
        })
          })
      }
      return ts
  }

  for (let j = 0;j<10;j++){
    console.time(`SEED_GENERATION_TIME_TRANSACTIONS BATCH ${j} `)
    const transactions = generateTransactionData()
    console.timeEnd(`SEED_GENERATION_TIME_TRANSACTIONS  ${j}`)
    console.time(`SEED_INSERTION_TIME_TRANSACTIONS  ${j}`)
     for (let i = 0;i<transactions.length;i=i+1000){
      const batch = transactions.slice(i,i+ 1000)
      await knex('Transactions').insert(batch);
     }
    console.timeEnd(`SEED_INSERTION_TIME_TRANSACTIONS  ${j}`)
  }  
};
