# Conversión-de-Divisas
## Desarrollado por: Juan Diego Hernández Amaya
API REST que permite la conversión de divisas. Este aplicativo permite el cambio de una moneda hacia un conjunto de monedas. Además de agregar nuevas divisas y cambiar las ya existentes.

## Lenguajes y Tecnologías utilizadas
- JavaScript
- Typescript
- Node.JS
- Express.JS

### Otras tecnologías implementadas
- TS-Nodemon
- body-parser
- Dotenv
- Eslint
- MySQL2

## Instalación y arranque del API
**1. Puedes clonar este repositorio con el siguiente comando :-**
```bash
 git clone https://github.com/norbeydanilo/api_typescript_mysql.git
 cd api_typescript_mysql
```
**2. Instala los paquetes requeridos :-**
```bash
 npm install
```
**3. Debes crear tu archivo `.env` con las siguientes variables de entorno :-**
```bash
  HOST #Host donde se ejecuta la API
  PORT #Puerto donde se ejecuta la API
  DB_HOST #Host donde se ubica la base de datos 
  DB_USER #Usuario de la base de daots
  DB_PWD #Contraseña de la base de datos
  DB_NAME #Nombre de la base de datos
```

**4. Para ejecutar el proyecto, usa el siguiente comando :-**
```bash
 npm start
```

**5. Ya puedes probar el API REST desde tu Postman! :-**

También tienes acceso al script para la creación de la base de datos junto con sus tablas y los valores iniciales

## Acerca del proyecto

### Modelo de Datos
Para la persistencia del aplicativo, se realizó hizo uso de una base de datos relacional, en la cual se implementó el siguiente modelo de datos
<div align="center">
  <img src="https://github.com/JuanDHernandezA/Conversi-n-de-Divisas/assets/129443402/765c3400-9dd0-445b-8fe9-53560d0bfba2" alt="Modelo de Datos">
</div>

### Servicios empleados
- Consulta de todas las divisas existentes
- Conversion de dinero, enviando el id de la moneda inicial, el monto a cambiar y un arreglo de las IDs de las monedas a cambiar
- Agregar una nueva divisa
- Consulta de una divisa por su ID
- Actualización de la tasa de referencia por su ID
- Eliminar divisa por ID

## Evidencia de Funcionamiento
- Consulta de todas las divisas existentes
```bash
 GET 127.0.0.1:4100/divisa
```
![GetAll](https://github.com/JuanDHernandezA/Conversi-n-de-Divisas/assets/129443402/bd91164a-fc30-4eb6-ae0d-4be5f1b69fc5)
  
- Conversion de dinero, enviando el id de la moneda inicial, el monto a cambiar y un arreglo de las IDs de las monedas a cambiar
```bash
 GET 127.0.0.1:4100/divisa/calcular
```
![CambioDivisa](https://github.com/JuanDHernandezA/Conversi-n-de-Divisas/assets/129443402/209d2c26-8756-4555-a9d1-37fa1d5935be)

- Consulta de una divisa por su ID
```bash
 GET 127.0.0.1:4100/divisa/:id
```
![GetID](https://github.com/JuanDHernandezA/Conversi-n-de-Divisas/assets/129443402/b6d521ae-a6cf-41ea-914b-3821f166faed)

- Agregar una nueva divisa
```bash
 POST 127.0.0.1:4100/divisa
```
![Post](https://github.com/JuanDHernandezA/Conversi-n-de-Divisas/assets/129443402/3f8ef0f8-9812-4f64-8348-5f35d43ba0be)

- Actualización de la tasa de referencia por su ID
```bash
 PUT 127.0.0.1:4100/divisa/:id
```
![Put](https://github.com/JuanDHernandezA/Conversi-n-de-Divisas/assets/129443402/408ae3aa-fff4-4807-8a50-011db4848ced)

- Eliminar divisa por ID
```bash
 DELETE 127.0.0.1:4100/divisa/:id
```
![Delete](https://github.com/JuanDHernandezA/Conversi-n-de-Divisas/assets/129443402/e2fb2ffe-c6b1-4f70-ac91-c7f0fe53cf94)
