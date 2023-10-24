import { Divisa } from "../types/divisa";
import { Conversion } from "../types/conversion";
import { db } from "../db";
import { RowDataPacket, ResultSetHeader } from "mysql2";

export const calcular = (moneda:number,ids : Number[], valor:number, callback:Function)=>{
    const queryString = "select * from divisa where id in (?)"

    ids.push(moneda)

    db.query(
        queryString,
        [ids],
        (err,result)=>{
            if(err){callback(err)}

            const rows = <RowDataPacket[]>result;
            const divisas : Divisa[] = [];
            const converision : Conversion[] =[];
            var referencia:number;

            rows.forEach(row =>{
                const divisa: Divisa ={
                    id: row.id,
                    nombre_div: row.nombre_div,
                    iniciales_div: row.iniciales_div,
                    vlr_referencia: row.vlr_referencia

                };
                if(divisa.id == moneda){
                    referencia = divisa.vlr_referencia
                }
                divisas.push(divisa);
            });

            divisas.forEach(divisa=>{
                if(divisa.id != moneda){
                    const c : Conversion={
                        moneda:divisa.nombre_div,
                        vlr_final: valor*(referencia/divisa.vlr_referencia)
                    }
                    converision.push(c);
                }
            })

            
            callback(null,converision);
        }
    );
}

export const create = (divisa : Divisa, callback: Function)=>{
    const queryString = "insert into divisa(nombre_div, iniciales_div,vlr_referencia) values (?,?,?);"
    db.query(
        queryString,
        [divisa.nombre_div,divisa.iniciales_div,divisa.vlr_referencia],
        (err,result)=>{
            if(err){callback(err)}
            
            const insertID = (<ResultSetHeader>result).insertId;
            callback(null,insertID);
        }
    );
};

export const findOne = (divisaId:number, callback:Function)=>{
    const queryString = "select * from divisa where id = ?";

    db.query(
        queryString,
        divisaId,
        (err, result)=>{
            if(err) {callback(err)};

            const row = (<RowDataPacket>result)[0];
            const divisa : Divisa = {
                id : row.id,
                nombre_div : row.nombre_div,
                iniciales_div : row.iniciales_div,
                vlr_referencia: row.vlr_referencia
            }
            callback(null,divisa);
        }
    );
};

export const findAll = (callback:Function)=>{
    const queryString = "select * from divisa";

    db.query(
        queryString,
        (err, result)=>{
            if(err) {callback(err)};

            const rows = <RowDataPacket[]>result;
            const divisas : Divisa[] = [];

            rows.forEach(row =>{
                const divisa: Divisa ={
                    id: row.id,
                    nombre_div: row.nombre_div,
                    iniciales_div: row.iniciales_div,
                    vlr_referencia: row.vlr_referencia
                };
                divisas.push(divisa);
            });
            callback(null,divisas);
        }
    );
};

export const borrar = (divisaId: Number, callback:Function)=>{
    const queryString = "Delete from divisa where id=?";

    db.query(
        queryString,
        divisaId,
        (err,result)=>{
            if(err) {callback(err)}

            const numDelete = (<ResultSetHeader>result).affectedRows;
            callback(null,numDelete)
        }
    );
};

export const update = (divisa: Divisa, callback: Function)=>{
    const queryString = "update divisa set vlr_referencia = ? where id=?"
    
    db.query(
        queryString,
        [divisa.vlr_referencia,divisa.id],
        (err, result) => {
			if (err) { callback(err); }

			const numUpdate = (<ResultSetHeader>result).affectedRows;
			callback(null, numUpdate);
		}
    );
}