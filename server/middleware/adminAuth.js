const jwt = require('jsonwebtoken')


const authenticateToken = (req, res, next) => {
    console.log("$$$$$$$$$$$$$")
    console.log(req.headers)
    const authHeader = req.headers['Authorization']
    console.log(authHeader)
    const token = authHeader && authHeader.split(' ')[1]
    console.log(token)
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.ADMIN_ACCESS_SECRET, (err, user) => {
      console.log(err)
      if (err) return res.sendStatus(403)
      req.user = user
      next()
    })
}
  
exports.authenticateToken = authenticateToken;

