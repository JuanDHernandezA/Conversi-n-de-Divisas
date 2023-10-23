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