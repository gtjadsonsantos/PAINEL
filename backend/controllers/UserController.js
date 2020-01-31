const connection = require('../database/connection')

module.exports = {
    async index (request,response) {
        const sql = ` SELECT * FROM Users; `
        await connection.query(sql,(err, results, fields)=>{
             results.forEach(user => {
                if (user.UserName == request.body.username && user.UserPassword == request.body.password ){
                    console.log(user)
                   return response.json(user)  
                }
             });
        })
    },
    async store (request, response) {
        const sql = `
        INSERT INTO Users 
        (UserName,
        UserPassword,
        NameImage,
        UrlImage)
        VALUES (
        '${request.body.username}',
        '${request.body.password}',
        '${request.body.name_image}',
        '${request.body.url_image}');    
        `
        await connection.query(sql,(err, results, fields)=>{
            return response.json(results)

        })
    },
    async update (request, response) {   
        const sql = `
        UPDATE Users SET 
        UserName = '${request.body.new_username}',
        UserPassword = '${request.body.new_password}',
        NameImage = '${request.body.name_image}',
        UrlImage = '${request.body.url_image}' 
        WHERE 
            UserName='${request.body.username}' AND
            UserPassword = '${request.body.password}';    
        `
        console.log(sql)
        
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