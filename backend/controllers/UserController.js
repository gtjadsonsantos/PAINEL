const connection = require('../database/connection')

module.exports = {
    async index (request,response) {
        const sql = ` SELECT * FROM Users; `
        await connection.query(sql,(err, results, fields)=>{
             results.forEach(user => {
                if (user.UserName == request.body.username && user.UserPassword == request.body.password ){
                    return response.json(user)     
                }
             });
        })
    },
    async indexAll (request,response) {
        const sql = ` SELECT * FROM Users; `
        await connection.query(sql,(err, results, fields)=>{
            return response.json(results)  
        })
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
        await connection.query(`SELECT * FROM Users WHERE UserName='${request.body.username}';`,(err, results, fields)=>{
            const [ query ] = results

            if(query == undefined || query == null){
                connection.query(sql,(err, results, fields)=>{
                return response.json( {status: 'Usuário criado'})
                })
            }else {
                return response.json({status: 'Usuário já existente'})
            }
        })
    },
    async update (request, response) {   
        const sql = `
        UPDATE Users SET 
        UserName = '${request.body.username}',
        UserPassword = '${request.body.password}',
        WHERE 
            UserName='${request.body.username}' AND
            UserPassword = '${request.body.oldPassword}';
        `
        
        await connection.query(sql,(err, results, fields)=>{
            return response.json(results)
        })

    },  
    async delete (request, response){
        const sql = ` DELETE FROM Users 
        WHERE UserName='${request.body.UserName}' AND
        UserPassword='${request.body.UserPassword}' `

        await connection.query(sql,(err, results, fields)=>{
            return response.json(results)
        })
    }
}