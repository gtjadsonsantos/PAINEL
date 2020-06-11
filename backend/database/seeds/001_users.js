
exports.seed = function(knex) {
  return knex('Users').del()
    .then(function () {
      return knex('Users').insert([
        {UserID: 1, UserName: 'admin',UserPassword:'admin',UserType:'admin'},
        {UserID: 2, UserName: 'portaria',UserPassword:'portaria',UserType:'comum'},

      ]);
    });
};

// Example {UserID: 1, UserName: 'admin',UserPassword:'admin',UserType:'admin'},
