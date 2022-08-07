import users from "../data";
import jwt from "jsonwebtoken"
import * as bycrypt from "bcryptjs"

const updateUserService = async (id, token, newEmail, newPassword, newName ) => {
  const decoded = jwt.decode(token)
  const {email,uuid,isAdm} = decoded 

  const currentUser = users.find((element)=>element.email === email)
  const userIndex = users.findIndex((element)=> element.email === email)

  const hashedPassword = await bycrypt.hash(newPassword, 10)
  const dateTime = new Date()

  
  if(userIndex === -1) {
    return {message: "User not found"}
  }

  if(uuid !== id && !isAdm){
    return { message:"Unauthorized" }
  }

  const updatedUser = {
    name: newName || currentUser.name,
    email: newEmail || currentUser.email,
    password: hashedPassword || currentUser.password,
    isAdm: currentUser.isAdm,
    createdOn: currentUser.createdOn,
    updatedOn: dateTime,
    uuid: currentUser.uuid
  }

  users[userIndex] = {...users[userIndex], ...updatedUser}

  return users[userIndex]
}

export default updateUserService