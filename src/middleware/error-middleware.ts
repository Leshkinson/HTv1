import {Request, Response} from "express";
import {ValidationError} from "../error/error"

export function errorMiddleware(err: object,req: Request,res: Response) {
    if(err instanceof ValidationError) {
        return res.status(<number>err.status).json({message: err.message, field: err.field})
    }
    return res.status(500).json({message: 'ERROR!!!!!'})
}