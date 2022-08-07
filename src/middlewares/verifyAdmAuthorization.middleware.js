import users from "../data";
import jwt from "jsonwebtoken"

const verifyAdmAuthorization = (request, response, next) => {
  const token = request.headers.authorization
  
  const decoded = jwt.decode(token)
  const {isAdm} = decoded

  if(!isAdm){
    return response
            .status(401)
            .json({message: "Unauthorized"})
  }

  next()
}

export default verifyAdmAuthorization