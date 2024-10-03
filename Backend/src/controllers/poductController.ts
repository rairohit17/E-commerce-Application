        
    import { Product } from "../models/product.models";
    // import { filterProductsByPrice} from "./utils/apiFeatures.js"
    import { Request,Response } from "express";
    import { filterProducts } from "../utils/filterProducts";
import { catchBlock } from "../utils/handleErr";
    
    
    
     // SHOW ALL PRODUCTS 

      export async function showAllProducts(req:Request,res:Response){
        try{
            const category :string| null= req.query.category ? req.query.category as string:null
            const price :number| null = req.query.price ? parseInt(req.query.price as string) : null
            const products= await Product.find()
            const filteredProducts= filterProducts(products,category,price)
            res.status(200).json({
                success:true,
                products:filteredProducts
            })

      }
      catch(err){
        catchBlock(res,err)
      }
    }
     // add a product ---> admin 
    export async function  addProduct(req :Request,res :Response){
        try{
            const newProduct= new Product(req.body)
            const savedProduct= await newProduct.save();
            res.status(200).json({
                success:true,
                msg:"product created successfully",
                newProduct
                
            })
        }
        catch(err){
            catchBlock(res,err)
        }

    }

    // DELETE A PRODUCT 
     export async function deleteProduct(req:Request,res:Response){
         try{
            const id :string= req.params.id;
            const deletedProduct= await Product.findByIdAndDelete(id);
            // console.log("hello")
            if (deletedProduct){
                res.status(204).end()
            }
            else{
                res.status(404).json({
                    success:false,
                    msg:` product with id ${id} could not be found`
                })
            }
        }
        catch(err){
            catchBlock(res,err)
         }
        
     }

     // update product 

     export async function 