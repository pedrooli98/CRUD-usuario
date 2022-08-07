import listUserProfileService from "../services/listUserProfile.service";

const listUserProfileController = (request, response) => {
  const token = request.headers.authorization

  const userProfile = listUserProfileService(token)

  return response.json(userProfile)
}

export default listUserProfileController