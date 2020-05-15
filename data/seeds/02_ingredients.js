
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient: 'Pasta'},
        {id: 2, ingredient: 'Meat'},
        {id: 3, ingredient: 'flour'}
      ]);
    });
};
