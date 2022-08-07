import users from "../data";
import jwt from "jsonwebtoken"

const verifyTokenAuthorizationMiddleware = (request, response, next)=>{

  const token = request.headers.authorization

  if(!token){
    return response
            .status(401)
            .json({message: "Missing authorization Token"})
  }

  jwt.verify(token, "SECRET_KEY", (error, decoded)=>{
    if(error){
      return response
      .status(401)
      .json({message: "Invalid Token"})   
    }

    next()
  })
}

export default verifyTokenAuthorizationMiddleware