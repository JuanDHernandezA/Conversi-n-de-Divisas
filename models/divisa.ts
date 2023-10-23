import { Divisa } from "../types/divisa";
import { db } from "../db";
import { RowDataPacket, ResultSetHeader } from "mysql2";

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
            callback(divisas);
        }
    );
};

export const borrar = (divisa: Divisa, callback:Function)=>{
    const queryString = "Delete from divisa where id=?";

    db.query(
        queryString,
        divisa.id,
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