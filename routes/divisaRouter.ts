import express, { Request, Response } from 'express';
import * as divisaModel from "../models/divisa";
import { Divisa } from '../types/divisa';

const divisaRouter = express.Router();

divisaRouter.get('/calcular',async (req:Request,res:Response) => {
    const moneda:number = req.body.moneda
    const ids:Number[] = req.body.ids;
    const valor:number = req.body.valor;
    divisaModel.calcular(moneda,ids,valor,(err:Error, resultado:Number)=>{
        if (err){
            return res.status(500).json({ 'errorMessage': err.message }); 
        }

        res.status(200).json({'resultado':resultado});
    })
})

divisaRouter.get('/',async (req:Request,res:Response) => {
    divisaModel.findAll((err:Error, divisas:Divisa[])=>{
        if (err){
            return res.status(500).json({ 'errorMessage': err.message }); 
        }

        res.status(200).json({'data':divisas});
    });
});

divisaRouter.get('/:id',async (req:Request,res:Response) => {
    const divisaId = Number(req.params.id);
    divisaModel.findOne(divisaId,(err:Error, divisa:Divisa)=>{
        if (err){
            return res.status(500).json({ 'errorMessage': err.message }); 
        }

        res.status(200).json({'data':divisa});
    });
});

divisaRouter.post('/',async (req:Request,res:Response) => {
    const newDivisa:Divisa = req.body;
    divisaModel.create(newDivisa,(err:Error, divisaId:number)=>{
        if (err){
            return res.status(500).json({ 'errorMessage': err.message }); 
        }
        
        res.status(200).json({'DivisaId':divisaId});
    });
});

divisaRouter.put('/',async (req:Request,res:Response) => {
    const divisa:Divisa = req.body;
    divisaModel.update(divisa,(err:Error, numUpdate:number)=>{
        if (err){
            return res.status(500).json({ 'errorMessage': err.message }); 
        }
        
        res.status(200).json({'Record(s) updated': numUpdate});
    });
});

divisaRouter.delete('/:id',async (req:Request,res:Response) => {
    console.log("llego al router ",req.params.id);
    const divisa = Number(req.params.id);
    divisaModel.borrar(divisa,(err:Error, numDelete:number)=>{
        if (err){
            return res.status(500).json({ 'errorMessage': err.message }); 
        }
        
        res.status(200).json({'Record(s) deleted': numDelete});
    });
});

export {divisaRouter};