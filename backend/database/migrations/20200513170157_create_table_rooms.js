exports.up = function(knex) {
  return knex.schema.createTable('Rooms', function(table){
      table.increments('RoomID')
      table.integer('FloorID').notNullable()
      table.string('NumberRoom').notNullable()
      table.string('NameImage').notNullable()
      table.foreign('FloorID').references('Floor.FloorID')
  })
};

exports.down = function(knex) {
return knex.schema.dropTable('Rooms')
};