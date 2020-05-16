
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Users').del()
    .then(function () {
      // Inserts seed entries
      return knex('Users').insert([
        {UserID: 1, UserName: 'admin',UserPassword:'admin',UserType:'admin'},
        {UserID: 2, UserName: 'portaria',UserPassword:'portaria',UserType:'comum'},

      ]);
    });
};
