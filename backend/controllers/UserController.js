const connection = require('../database/connection')

module.exports = {
    async index (request,response) {
        const sql = ` SELECT * FROM Users WHERE UserName='${request.body.username}' AND UserPassword='${request.body.password}' LIMIT 1;`
        
        const [ results ] = await connection.promise().query(sql)
        return response.json(results[0]);
        

    },
    async indexAll (request,response) {
        const sql = ` SELECT * FROM Users; `

        const [ results ] = await connection.promise().query(sql)
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
        const [ results ] = await connection.promise().query(`SELECT * FROM Users WHERE UserName='${request.body.username}';`)
        const [ query ] = results
        
        if(query == undefined || query == null){
            await connection.promise().query(sql)
            return response.json( {status: 'Usuário criado'})
        }else {
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
        const [ results ] = await connection.promise().query(sql)
        
        return response.json(results)

    },  
    async delete (request, response){
        const sql = ` DELETE FROM Users 
        WHERE UserName='${request.body.UserName}' AND
        UserPassword='${request.body.UserPassword}' `

        const [ results ] = await connection.promise().query(sql)
        
        return response.json(results)
    }
}