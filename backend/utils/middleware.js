const jwt = require("jsonwebtoken")
//const User = require("../models/user")

//Ver info de la peticion
const requestLogger = (request, response, next) => {
  console.log("Method:", request.method)
  console.log("Path:  ", request.path)
  console.log("Body:  ", request.body)
  console.log("---")
  next()
}

//Si no existe la url
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" })
}

//Si hubo un error
const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" })
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message })
  }else if (error.name === "JsonWebTokenError") {
    return response.status(400).json({ error: error.message })
  }else if (error.name === "TokenExpiredError") {
    return response.status(401).json({ error: "token expired" })
  }

  next(error)
}

//Obtener token
const getTokenFrom = request => {
  const authorization = request.get("authorization")
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7)
  }
  return null
}

//Extraer token
const tokenExtractor = (request, response, next) => {
  request.token = getTokenFrom(request)
  next()
}

//Obtener usuario segun token
// const userExtractor = async (request, response, next) => {
//   const token = getTokenFrom(request)

//   if (token) {
//     const decodedToken = jwt.verify(token, process.env.SECRET)
//     if (!decodedToken.id) {
//       return response.status(401).json({ error: "token invalid" })
//     }

//     request.user = await User.findById(decodedToken.id)
//   }

//   next()
// }

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
  tokenExtractor,
  //userExtractor
}