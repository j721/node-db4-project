
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient: 'Pasta', quantity: "1", recipe_id: "1"},
        {id: 2, ingredient: 'Meat', quantity: "1", recipe_id:"2"},
        {id: 3, ingredient: 'flour', quantity: "2", recipe_id: "1"}
      ]);
    });
};
