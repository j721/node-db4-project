
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe: 'pizza', instructions: "make pizza"},
        { recipe: 'ice cream', instructions: "make ice cream"},
        { recipe: 'smoothie', instructions:"make smoothie"}
      ]);
    });
};
