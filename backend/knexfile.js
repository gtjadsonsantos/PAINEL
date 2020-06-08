// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : '0.0.0.0',
      user : 'root',
      password : 'root',
      database : 'test',
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
