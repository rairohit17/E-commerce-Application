import { Response } from "express"

export function catchBlock(res:Response,err:any ){
    if ( err instanceof Error){
        res.status(500).json({
            success:false,
            error:err.message
        })
        
    }
    else{
        res.status(500).json({
            success:false,
            err
        })
    }
}