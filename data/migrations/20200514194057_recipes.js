
exports.up = function(knex) {
    return knex.schema.createTable("recipes", tbl=>{
        tbl.increments()
        tbl.string("recipe-name", 256).notNullable().index();
        tbl.string("instructions", 255).notNullable();
    })
  
    .createTable("ingredients",tbl=>{
        tbl.increments();
        tbl.string("ingredient-name").notNullable().unique().index()
        tbl.float("quantity").notNullable();
        tbl.integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("recipes")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE")
    })
    .createTable('steps', tbl=>{
        tbl.increments();
        tbl.integer("step_number").unsigned().notNullable()
        tbl.string("instructions").notNullable()
        tbl.integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("recipes")
          .onDelete("RESTRICT") //maybe switch to cascade
          .onUpdate("CASCADE")
  
    })
  
  
  };//end of exports.up
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
  };
  