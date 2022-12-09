const asyncHandler = require('express-async-handler')
const db = require('../Config/ConfigDb')
const Categorie = require('../Models/CategorieModel');


// method : post
// url : /api/categories/add
// access : private
const addCategorie = asyncHandler( async(req,res)=>{
    const {categorie} = req.body;
    if(categorie){
        try {
            const newCategorie = await Categorie.create({categorie })
            res.status(200).send({message:"add categorie success"})
        } catch (error) {
            res.status(400)
            throw new Error(error)
        }
    }else{
        res.status(400)
        throw new Error("Please add a text field")
    }
})



// method : put
// url : /api/categories/update/:id
// access : private
const updateCategorie = asyncHandler( async(req,res)=>{
    const id =  req.params.id;
    const {categorie} = req.body;
    if(categorie){
        try {
            const newCategorie = await Categorie.update({categorie},{where:{id}})
            res.status(200).send({message:"update categorie success"})
        } catch (error) {
            res.status(400)
            throw new Error(error)
        }
    }else{
        res.status(400)
        throw new Error("Please add a text field")
    }
})


// method : delete
// url : /api/categories/delete/:id
// access : private
const DeleteCategorie = asyncHandler( async(req,res)=>{
    const id =  req.params.id;
    try {
        const deleteCategorie = await Categorie.destroy({where:{id}})
        res.status(200).send({message:"delete categorie success"})
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})



// method : get
// url : /api/categories/getAll
// access : private

const GetAllCategorie = asyncHandler( async(req,res)=>{
    try {
        const allCategorie = await Categorie.findAll()
        res.status(200).send(allCategorie)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

module.exports = {addCategorie, updateCategorie, DeleteCategorie, GetAllCategorie}


