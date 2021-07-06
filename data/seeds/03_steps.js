
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { step_number: 1, instructions: "cook pastas", recipe_id: 1},
        { step_number: 2, instructions: "add pasta sauce", recipe_id: 1},
        {step_number: 3, instructions: "plate pasta and enjoy", recipe_id: 1}
      ]);
    });
};
