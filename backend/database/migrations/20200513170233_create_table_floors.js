exports.up = function(knex) {
  return knex.schema.createTable('Floors', function(table){
      table.increments('FloorID')
      table.integer('NumberFloor').notNullable()
  })
};

exports.down = function(knex) {
return knex.schema.dropTable('Floors')
};