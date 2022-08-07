import users from "../data";
import jwt from "jsonwebtoken"

const deleteUserService = (id, token) => {
  const decoded = jwt.decode(token)
  const {email} = decoded 

  const user = users.find((element) => element.email === email)
  const userIndex = users.findIndex((element)=> element.id === id)

  if(user.id !== id && !user.isAdm){
    return {message:"Unauthorized"}
  }

  users.splice(userIndex, 1)

  return "User Deleted"
}

export default deleteUserService