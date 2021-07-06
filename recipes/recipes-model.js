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

// function find(){
//     return db ("recipes")
// }


function find(){
    return db.select ("*")
    .from("recipes")
}

function findById(id){
    return db.select ('*')
    .from("recipes")
    .where({id})
   
}

function findSteps(id){
    return db ("steps")
    .join ("recipes", "recipes.id", "steps.recipe_id")
    .select(
        "recipes.recipe",
        "steps.id",
        "steps.step_number",
        "steps.instructions"
    )
    .where({"steps.recipe_id": id})
    .orderBy("steps.step_number")
}

function add(recipe){
    return db("recipes")
    .insert(recipe)
    .then(ids=>{
        return findById(ids[0])
    })
}

function addStep(step, id){
    const newStep = {...step, recipe_id: id}
    return db("steps")
    .insert(addedStep)
    .then(()=>{
        return findSteps(id)
    })
}

function update (changes, id){
    return db("recipes")
    .where({id})
    .update(changes)
}

function remove(id){
    return db ("recipes")
    .where({id})
    .del()
}

