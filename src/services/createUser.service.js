import users from "../data";
import { v4 as uuidv4 } from "uuid"
import * as bycrypt from "bcryptjs"

const createUserService = async (email, name, password, isAdm) => {
  const hashedPassword = await bycrypt.hash(password, 10)

  const dateTime = new Date()
  const newUser = {
    name,
    email,
    password: hashedPassword,
    isAdm,
    createdOn: dateTime,
    updatedOn: dateTime,
    uuid: uuidv4()
  }

  users.push(newUser)

  return newUser
}

export default createUserService