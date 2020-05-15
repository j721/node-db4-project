const express = require('express');
const Recipes = require('./recipes-model.js');

const router = require('express').Router();

router.get('/', (req,res)=>{
    Recipes.find()
    .then(recipes=>{
        res.status(200).json(recipes)
    })
    .catch(err=>{
        res.status(500).json({message: error.message})
    })
})

router.get('/:id', (req,res)=>{
    // const {id } = req.params.id;
    Recipes.findById(req.params.id)
    .then(recipe=>{
        res.status(200).json({data:recipe})
    })
    .catch(err=>{
        res.status(500).json({message: "sorry an error", err})
    })
})

router.get('/:id/instructions', (req,res)=>{
    // const { id } = req.params.id;
    Recipes.findSteps(req.params.id)
    .then(steps=>{
        if (steps.length){
            res.status(200).json(steps)
        }else{
            res.status(404).json({message: "steps not found"})
        }
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message: err.message})
    })
})

router.post('/', (req,res)=>{
    const body = req.body;
    Recipes.add(newRecipe)
    .then(recipe=>{
        res.status(201).json(recipe)
    })
    .catch(err=>{
        res.status(500).json({message: err.message})
    })
})

// recipe.post('/:id/instructions', (req,res)=>{
//     const newStep = req.body;
//     const { id } = req.params.id

//     Recipes.findById(id)
//     .then(recipe=>{
//         if(recipe){
//             Recipes.addStep(newStep, id)
//             .then(step=>{
//                 res.status(201).json(step)
//             })
//         }else{
//             res.status(404).json({message: "recipe not found"})
//         }
//     })
//     .catch(err=>{
//         res.status(500).json({message: error.message})
//     })
// })

router.put('/:id', (req,res)=>{
    const { id } = req.params.id
    const changes = req.body

    recipes.findById(id)
    .then(recipe=>{
        if(recipe){
            Recipes.update(changes, id)
            .then(updated=>{
                res.status(200).json(updated)
            })
        }else{
            res.status(404).json({message: error.message})
        }
    })
    .catch(err=>{
        res.status(500).json({message: error.message})
    })
})

router.delete('/:id', (req,res)=>{
    const { id } = req.params.id;

    Recipes.remove(id)
    .then(deleted=>{
        res.status(200).json(deleted)
    })
    .catch(err=>{
        res.status(500).json({message: error.message})
    })
})

module.exports = router; 