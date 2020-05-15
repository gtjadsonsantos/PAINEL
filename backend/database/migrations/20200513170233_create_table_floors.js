exports.up = function(knex) {
  return knex.schema.createTable('Floors', function(table){
      table.increments('FloorID')
      table.string('NumberFloor').notNullable()
      table.integer('RoomID').notNullable()
      table.foreign('RoomID').references('Rooms.RoomID')

  })
};

exports.down = function(knex) {
return knex.schema.dropTable('Floors')
};