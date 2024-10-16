import { Response } from "express"

export function catchBlock(res:Response,err:any,statusCode:number ){
    if ( err instanceof Error){
        res.status(500).json({
            success:false,
            error:err.message
        })
        
    }
    else{
        res.status(statusCode).json({
            success:false,
            err
        })
    }
}