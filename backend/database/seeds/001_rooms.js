exports.seed = function (knex) {
  return knex('Rooms').del()
    .then(function () {
      return knex('Rooms').insert([
        
      ]);
    });
};

// Exemple  { RoomID: 1, NumberRoom: "101", NameImage: "white.png" },