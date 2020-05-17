
exports.seed = function (knex) {
  return knex('Floors').del()
    .then(function () {
      return knex('Floors').insert([
  
      ]);
    });
};

// Example { FloorID: 1, NumberFloor: 1, RoomID: 1 },