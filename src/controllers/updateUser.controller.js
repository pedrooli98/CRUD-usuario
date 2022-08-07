import updateUserService from "../services/updateUser.service";

const updateUserController = async (request, response) => {
  const {id} = request.params
  const {email, password, name} = request.body
  const token = request.headers.authorization

  const updatedUser = await updateUserService(id, token, email, password, name)

  const newUser = {
    uuid: id,
    createdOn: updatedUser.createdOn,
    updatedOn: updatedUser.updatedOn,
    name: updatedUser.name,
    email: updatedUser.email,
    isAdm: updatedUser.isAdm
  }

  return response.json(newUser)
}

export default updateUserController