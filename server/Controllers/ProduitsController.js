const asyncHandler = require('express-async-handler');
const ProduitSchema = require('../Models/ProduitModel');

// method : post
// url : /api/produit
// access : public
// add produit
const addProduit = asyncHandler(async (req, res) => {
    console.log("body",req.body)
    console.log("req.files",req.files)

    const { image,title, description, price, oldprice, quantite, promotion,categorie } = req.body
    // console.log(title)
    // console.log(req.files.image);

    // condition add les inputs
    // if(!image || !title || !description || !price|| !oldprice|| !quantite || !promotion){
    //     res.status(400)
    //     throw new Error("Please add a text field")

    // }
// console.log(categorieId);

        const img = [];
        await req.files.forEach((filePath) => {
        const path = filePath.path.split("\\")
        const imgPath = "/" + path[1] + "/" + path[2];
        img.push(imgPath);
        });
        console.log("iamge",img)
    
    try{
    // function create newproduit
       const produit = await ProduitSchema.create({
        image:img,
        title: title,
        description: description,
        price: price,
        oldprice: oldprice,
        quantite: quantite,
        promotion: promotion,
        categorieId:categorie
    })
    
    res.status(200).json(
        produit
    )
    }catch(error){
        res.status(400)
        console.log(error)
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
    // console.log(req)
    console.log('req.body', req.body)
 
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
            
            res.status(200).json(
                updateproduit
            )
        }
    } catch (error) {
            res.status(400).json({ error })
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

const getOneProduitsByIdCategorie = asyncHandler(async (req, res) => {
    const id = req.params.id

    try{
        const allProduitByCategorie = await ProduitSchema.findAll({where:{categorieId:id}})
        res.status(200).send({allProduitByCategorie})
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
    
})


// method : get
// url : /api/produit/getall
// access : public
// get all produit
const getAllProduit = asyncHandler(async (req, res) => {

    try{
        const AllProduit = await ProduitSchema.findAll()
        res
        .status(200).send({AllProduit})
        .console.log({AllProduit})
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
    
})



// method : get
// url : /api/produit/getallPromo
// access : public
// get all produit
const getPromoProduct = asyncHandler(async (req, res) => {

    try{
        const AllProduit = await ProduitSchema.findAll({where: {promotion:true}})
        res
        .status(200).send({AllProduit})
        .console.log({AllProduit})
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
    
})



const searchProduct = asyncHandler(async (req, res) => {
    try{
        const AllProduit = await ProduitSchema.findAll({where: {promotion:true}})
        res
        .status(200).send({AllProduit})
        .console.log({AllProduit})
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})



const getProductPaginatin = asyncHandler(async (req, res) => {
    const limit = req.query.limit || 6
    const offset = req.query.offset ||  0;
    
    // const searchN = req.body.nameFilter;
    // const categoryCondition = Category_id ? { categoryCategoryId: Category_id}:null;
    // const filterByName = searchN ? { name: { [Op.like]: %${searchN}% } }:null;
    try {
        const allProduct = await ProduitSchema.findAll({
        limit: limit,
        offset: offset
      });
      return res.status(200).json(allProduct);
  
    } catch (e) {
      return res.status(500).json(e);
    }
})

module.exports  = {addProduit,updateProduit,deleteProduit,getOneProduit,getAllProduit, getPromoProduct,getOneProduitsByIdCategorie, getProductPaginatin}

