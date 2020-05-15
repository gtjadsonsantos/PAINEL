const jwt = require('jsonwebtoken')
const { secretToken } = require('../config')

module.exports = (req, res, next)=>{
    try {
        jwt.verify(req.headers.authorization.split(" ")[1] , secretToken)        

        next()
    } catch (error) {
        res.status(401).send({status: "not authorized"})
    }
}
