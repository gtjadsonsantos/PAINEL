const jwt = require('jsonwebtoken')
const { secretToken } = require('../config')

module.exports = (req, res, next)=>{

        const decode = jwt.verify(req.headers.authorization.split(" ")[1] , secretToken)        
        const { UserType } = decode

        if(UserType == "admin"){
            next()
        }else {
            res.status(401).send({status: "not authorized"})

        }


     
  
}
