exports.up = function(knex) {
  return knex.schema.createTable('Users', function(table){
      table.increments('UserID')
      table.string('UserName').notNullable()
      table.string('UserPassword').notNullable()
      table.string('UserType').notNullable()
  })
};

exports.down = function(knex) {
return knex.schema.dropTable('Users')
};