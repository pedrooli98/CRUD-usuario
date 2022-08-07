import deleteUserService from "../services/deleteUsers.service";

const deleteUserController = (request, response) => {
  const {id} = request.params
  const token = request.headers.authorization

  const deletedUser = deleteUserService(id, token)

  return response.json(deletedUser)
}
export default deleteUserController