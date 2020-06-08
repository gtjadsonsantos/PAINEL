// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: `${__dirname}/database/database.db`
    },
    useNullAsDefault: true,
    migrations:{
      tableName: 'knex_migrations',
      directory:`${__dirname}/database/migrations`
    },
    seeds:{
      directory:`${__dirname}/database/seeds`
    }
  },
};
