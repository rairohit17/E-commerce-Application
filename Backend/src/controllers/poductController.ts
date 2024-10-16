        
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
        catchBlock(res,err,500)
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
            catchBlock(res,err,500)
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
            catchBlock(res,err,500)
         }
        
     }

     // update product 

     export async function updateProduct(req: Request, res: Response) {
        try {
          const id = req.params.id;
          const product: Object = req.body;
          const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
      
          if (!updatedProduct) {
             res.status(404).json({
              success: true,
              msg: "Product cannot be found",
              updatedProduct
            });
            return 
          }
      
          res.status(200).json({
            success: true,
            msg: "Product updated successfully",
            updatedProduct
          });
        } catch (err) {
          catchBlock(res, err,500);
        }
      }

     // show product 

      export async function getProduct(req:Request,res:Response){

        const id = req.params.id 
        try{
            const product= await Product.findById(id)
            if (!product) {
                res.status(404).json({
                    success:true ,
                    msg:"product cannot be found",
                    product
                })
                return
            }
            res.status(200).json({
                success:true,
                msg:"product found successfuly",
                product
,
                        })

        }
        catch(err){
            catchBlock(res,err,500)
        }
      }

    
