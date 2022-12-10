const asyncHandler = require('express-async-handler');
const ProduitSchema = require('../Models/ProduitModel');

const express = require('express');
const fs = require('fs')


// method : post
// url : /api/produit
// access : public
// add produit
const addProduit = asyncHandler(async (req, res) => {

    // function uploade les images 
    console.log(Object.keys(req.files))
    Object.keys(req.files).map( key => 
        fs.writeFile(`./images/${req.files[key].name}`, req.files[key].data, ()=>{
            console.log(`${req.files[key].name} written Successfully`);
        })
    )
    
    
    const {  title, description, price, oldprice, quantite, promotion,categoreId } = req.body
    // console.log(title)
    // console.log(req.files.image);

    // condition add les inputs
    // if(!image || !title || !description || !price|| !oldprice|| !quantite || !promotion){
    //     res.status(400)
    //     throw new Error("Please add a text field")
    // }

    try{
    // function create newproduit
        await ProduitSchema.create({
        // image :`${req.files[key].name}`,
        
        title,
        description,
        price,
        oldprice,
        quantite,
        promotion,
        categoreId
    })
    
    res.status(200).send('Add produit success')
    }catch(error){
        res.status(400)
        throw new Error(error)
    }
})


// method : put
// url : /api/produit
// access : public
// update produit
const updateProduit = asyncHandler(async (req, res) => {
    const {title, description, price, oldprice, quantite, promotion } = req.body
    const id =  req.params.id;

    try {
        // functin update produit
        const updateproduit = await ProduitSchema.findOne({where:{id:id}})

        if(updateProduit){
            updateproduit.title = title
            updateproduit.description = description
            updateproduit.price = price
            updateproduit.oldprice = oldprice
            updateproduit.quantite = quantite
            updateproduit.promotion = promotion
            updateproduit.save()
            
            res.status(200).send('update produit success')
        }
    } catch (error) {
            res.status(400)
            throw new Error(error)
        }
})


// method : delete
// url : /api/produit
// access : public
// delete produit
const deleteProduit = asyncHandler(async (req, res) => {
    const id = req.params.id

    try{
        const deleteProduit = await ProduitSchema.destroy({where:{id}})
        res.status(200).send({message:"delete produit success"})
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
    
})


// method : get
// url : /api/produit
// access : public
// get one produit
const getOneProduit = asyncHandler(async (req, res) => {
    const id = req.params.id

    try{
        const OneProduit = await ProduitSchema.findOne({where:{id}})
        res.status(200).send({OneProduit})
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
    
})


// method : get
// url : /api/produit
// access : public
// get all produit
const getAllProduit = asyncHandler(async (req, res) => {

    try{
        const AllProduit = await ProduitSchema.findAll()
        res.status(200).send({AllProduit})
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
    
})

module.exports  = {addProduit,updateProduit,deleteProduit,getOneProduit,getAllProduit}