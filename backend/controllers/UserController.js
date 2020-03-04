const mysql = require('mysql2')
const database = require('../database/connection')

module.exports = {
    async index (request,response) {
        const sql = ` SELECT * FROM Users WHERE UserName='${request.body.username}' AND UserPassword='${request.body.password}' LIMIT 1;`
        
       
       const connection = await mysql.createConnection(database)
       const [ results ] = await connection.promise().execute(sql)
       console.log(sql)
       connection.end();
       return response.json(results[0]);

    },
    async indexAll (request,response) {
        const sql = ` SELECT * FROM Users; `

        const connection = await mysql.createConnection(database)
        const [ results ] = await connection.promise().execute(sql)
        connection.end();
        return response.json(results)
    },
    async store (request, response) { 
        const sql = `
        INSERT INTO Users 
        (UserName,
        UserPassword,
        UserType
        )
        VALUES (
        '${request.body.username}',
        '${request.body.password}',
        '${request.body.usertype}'
        );
        `
        const connection = await mysql.createConnection(database)
        const [ results ] = await connection.promise().execute(`SELECT * FROM Users WHERE UserName='${request.body.username}';`)
        const [ query ] = results

        if(query == undefined || query == null){
            await connection.promise().execute(sql)
            connection.end()
            return response.json( {status: 'Usuário criado'})
        }else {
            connection.end()
            return response.json({status: 'Usuário já existente'})
        }

    },
    async update (request, response) {   
        const sql = `
        UPDATE Users SET 
        UserName = '${request.body.username}',
        UserPassword = '${request.body.password}'
        WHERE 
            UserName='${request.body.username}' AND
            UserPassword= '${request.body.oldPassword}';
        `
        const connection = await mysql.createConnection(database)
        const [ results ] = await connection.promise().execute(sql)
        connection.end()
        return response.json(results)

    },  
    async delete (request, response){
        const sql = `DELETE FROM Users WHERE UserName='${request.body.UserName}';`

        const connection = await mysql.createConnection(database)
        const [ results ] = await connection.promise().execute(sql)
        connection.end()
        
        return response.json(results)
    }
}