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
      for (let i = 0;i<1_00_00_00;i++){
          ts.push({
            data: JSON.stringify({
              amount: Math.floor(Math.random() * (100000 - 0 + 1)),
              date: new Date(new Date().getTime() - (Math.floor(Math.random() * (30 - 1 + 1)) * 100000000 )),
              email: faker.internet.email()
        })
          })
      }
      return ts
  }
  const count = process.env.NODE_ENV === 'production' ? 1 : 100
  for (let j = 0;j<count;j++){
    console.time(`SEED_GENERATION_TIME_TRANSACTIONS BATCH ${j} `)
    const transactions = generateTransactionData()

     for (let i = 0;i<transactions.length;i=i+1000){
      const batch = transactions.slice(i,i+ 1000)
      await knex('Transactions').insert(batch);
     }
    console.timeEnd(`SEED_INSERTION_TIME_TRANSACTIONS  ${j}`)
  }  
};
