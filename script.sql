create database conversion_divisa;
use conversion_divisa;

drop table divisa;

create table divisa(
	id int auto_increment primary key,
    nombre_div varchar(40) not null,
    iniciales_div varchar(4) not null,
    vlr_referencia double not null
);

insert into divisa(nombre_div, iniciales_div,vlr_referencia) 
	values ("dolar estadounidense","USD", 1);
    
insert into divisa(nombre_div, iniciales_div,vlr_referencia) 
	values ("peso colombiano","COP", 0.00024);
    
insert into divisa(nombre_div, iniciales_div,vlr_referencia) 
	values ("euro","EUR", 1.07);

insert into divisa(nombre_div, iniciales_div,vlr_referencia) 
	values ("real brasileño","BRL", 0.20);
    
insert into divisa(nombre_div, iniciales_div,vlr_referencia) 
	values ("yuan chino","CNH", 0.14);

insert into divisa(nombre_div, iniciales_div,vlr_referencia) 
	values ("bolivar venezolano","VES", 0.029);

insert into divisa(nombre_div, iniciales_div,vlr_referencia) 
	values ("rupia india","INR", 0.012);

insert into divisa(nombre_div, iniciales_div,vlr_referencia) 
	values ("peso mexicano","MXN", 0.055);

insert into divisa(nombre_div, iniciales_div,vlr_referencia) 
	values ("franco suizo","CHF", 1.12);

insert into divisa(nombre_div, iniciales_div,vlr_referencia) 
	values ("dolar canadiense","CAD", 0.73);

select * from divisa;
