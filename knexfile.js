// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

    development: {
      client: 'pg',
      connection: {
        host: process.env.DB_HOST || 'localhost',
        database:  process.env.DB_NAME || 'transactions',
        user:     process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'newpassword',
      },
      migrations: {
        directory: './src/db/migrations'
      },
      seeds: {
        directory: './src/db/seeders'
    }
  },
  production: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      database:  process.env.DB_NAME || 'transactions',
      user:     process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'newpassword',
    },
    migrations: {
      directory: './src/db/migrations'
    },
    seeds: {
      directory: './src/db/seeders'
  }
}
};
