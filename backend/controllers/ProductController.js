import Product from "../models/ProductModel.js";
import productSchema from "../schemas/ProductSchema.js";


export const getProductsByCategory = async (req, res) => {

    try {

        const categoryParam = req.params.categoryId
        const Products = await Product.findAll({
            where: {category: categoryParam },
            attributes:{exclude:["createdAt", "updatedAt"]}});
    
        if (!Products) {
    
        return res.status(404).json({message:"No products found"})
        } 
    
        return res.status(200).json(Products);
   
    
    
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message})
    }};
    

    export const getProducts = async (req, res) => {

      try {
  
          const Products = await Product.findAll({
              
              attributes:{exclude:["createdAt", "updatedAt"]}});
      
          if (!Products) {
      
          return res.status(404).json({message:"No quizzes found"})
          } 
      
          return res.status(200).json(Products);
     
      
      
      } catch (error) {
          console.log(error);
          res.status(500).json({error: error.message})
      }};
      



export const createProduct = async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.message });
    } else {
      const createdProduct = await Product.create(req.body);
      return res.status(201).json({
        id: createdProduct.id,
        definition: createdProduct.definition,
        price: createdProduct.price,
        category: createdProduct.category,
        image: createdProduct.image,
       
        message: "Product was created",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};
