import users from "../data";
import jwt from "jsonwebtoken"

const listUserProfileService = (token) => {
  const decoded = jwt.decode(token)
  const {email} = decoded 

  const user = users.find((element) => element.email === email)

  const {uuid, name, isAdm, createdOn, updatedOn} = user

  const listedUser = {
    uuid,
    name,
    isAdm,
    createdOn,
    updatedOn
  }

  return listedUser
}
export default listUserProfileService