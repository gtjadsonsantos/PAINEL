exports.up = function(knex) {
  return knex.schema.createTable('Rooms', function(table){
      table.increments('RoomID')
      table.string('NumberRoom').notNullable()
      table.string('NameImage').notNullable()
  })
};

exports.down = function(knex) {
return knex.schema.dropTable('Rooms')
};