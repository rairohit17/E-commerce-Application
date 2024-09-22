import { Product } from "../models/products.models.js";
import { filterProductsByPrice} from "./utils/apiFeatures.js";



 // CREATE NEW PRODUCT -----> ADMIN
export async function createProduct(req,res){

   try {
    const product=   new Product(req.body); 
     const saved= await product.save()
    if (product){
        res.status(201).json({
            msg:"product created successfully",
            product
        })
    }
   }
   catch(error){
    res.status(500).json({
        success:false,
        err:error.message
    })
   }
  

}

// SHOW ALL PRODUCT
export  async function getAllProduct(req,res){
   try{
        const category= req.query.category;
        const price= req.query.price? parseInt(req.query.price):null;
        
        if(!category){
            const products= await Product.find()
            const filteredProducts= filterProductsByPrice(products,price)
            res.status(200).json({
                products:filteredProducts
            })
        }
        else{
            const products= await Product.find({category:category})
            const filteredProducts= filterProductsByPrice(products,price)
              
            res.status((200)).json({
                filteredProducts
            })
        }

   
   }
   catch(err){
    res.status(500).json({
        success:false,
        msg:err.message
    })
   }
}

// UPDATE PRODUCT 
export async function updateProduct(req,res){
    // console.log("hello")
    
    try{
        let target=  await Product.findById(req.params.id)
    // console.log(req.params.id)
    if ( !target){
        res.status(500).json({
            success:false,
            msg:"given id does not exist"
        })
    }
    target= await Product.findByIdAndUpdate(req.params.id,req.body);
    
    res.status(200).json({
        msg:"user updated successfully",
        target
    })
    }
    catch(err){
        res.status(500).json({
            success:false,
            msg:err.message
        })
    }


}
// DELETE 
export async function deleteProduct(req,res){
   
try{
    let target= await Product.findById(req.params.id);
    if (!target){
       return res.status(404).json({
            success:false,
            msg:"invalid product id"
        })
    }  
         target= await Product.findByIdAndDelete(req.params.id)
     res.status(204).send()

}
catch(err){
    res.status(500).json({
        success:false,
        msg:err.message
    })
}

}


// get product details
export async function  getProduct(req,res){
    try{
        const product=await  Product.findById(req.params.id)
        if (!product){
            res.status(404).json({
                success:false,
                msg:"product cannot be found"
            })
        }
        res.status(200).send(product)
    }
    catch(err){
        res.status(500).json({
            success:false,

            msg:`Error : ${err.message}`
        })
    }


}