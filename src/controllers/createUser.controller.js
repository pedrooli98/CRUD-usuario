import createUserService from "../services/createUser.service";

const createUserController = async (request, response) => {
  const {email, name, password, isAdm} = request.body

  const user = await createUserService(email, name, password, isAdm)

  const { uuid, createdOn, updatedOn } = user 

  const responseUser = {
    createdOn,
    updatedOn,
    name,
    email,
    isAdm,
    uuid
  }

  return response.status(201).json(responseUser)
}

export default createUserController