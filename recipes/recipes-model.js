const db = require('../data/db-config');

module.exports ={
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove
}

function find(){
    return db ("recipes")
}

function findById(id){
    return db("recipes")
    .where({id})
    .first()
}

function findSteps(id){
    return db ("steps as s")
    .join ("recipe as r", "r.id", "s.recipe_id")
    .select(
        "r.name",
        "s.id as step_id",
        "s.step_number",
        "s.instructions"
    )
    .where({id})
    .orderBy("s.step_number")
}

