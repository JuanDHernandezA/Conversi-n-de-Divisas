import express, { Request, Response } from 'express';
import * as divisaModel from "../models/divisa";
import { Divisa } from '../types/divisa';

const divisaRouter = express.Router();

divisaRouter.get('/',async (req:Request,res:Response) => {
    console.log('llego al router');
    divisaModel.findAll((err:Error, divisas:Divisa[])=>{
        if (err){
            return res.status(500).json({ 'errorMessage': err.message }); 
        }
        console.log(divisas)
        res.status(200).json({'data':divisas});
    });
});

export {divisaRouter};