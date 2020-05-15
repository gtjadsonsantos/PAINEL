
const database = require('../database/connection')
const jwt = require('jsonwebtoken')
const {secretToken} = require('../config')

module.exports = {
    async index (request,response) {
        
        const results = await database('Users')
        .select('*')
        .where('UserName','=',request.body.username)
        .where('UserPassword','=',request.body.password)
        .limit(1)

        const token = results[0].UserID >= 1 ?
        jwt.sign(results[0],secretToken,{ expiresIn: '1h' })
        :
        undefined    
    
       if(token != undefined){
        return response.json({results,token});
       }else{
        res.send({ status: "not authorized" })
       }

    },
    async indexAll (request,response) {
    
        const results = await database('Users')
        .select('*')

        return response.json(results)
    },
    async store (request, response) { 
       
        const [{qtdusers}] = await database('Users')
        .count('UserID',{as: 'qtdusers'})
        .where("UserName",'=',request.body.username)
        
        
        if(qtdusers == 0){
            await database('Users')
            .insert({
                UserName:request.body.username,
                UserPassword: request.body.password,
                UserType: request.body.usertype
            });
            return response.json({status: "Success in create user"})
        }else{
            return response.json({status: "Faild in create user"})
        }
    },
    async update (request, response) {   
 
        const results = await database('Users')
        .update({
            UserName: request.body.username,
            UserPassword: request.body.password
        })
        .where('UserName','=',request.body.username)
        .where('UserPassword','=',request.body.oldPassword)

        return response.json(results)

    },  
    async delete (request, response){
        
        const results = await database('Users')
        .where('UserName','=',request.body.username)
        .del()
        
        return response.json(results)
    }
}