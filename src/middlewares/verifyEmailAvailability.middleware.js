import users from "../data";

const verifyEmailAvailabilityMiddleware = (request, response, next) => {
  const {email} = request.body

  const userAlreadyExisty = users.find((user)=> user.email === email)

  if(userAlreadyExisty){
    return response
            .status(400)
            .json({message: "This email already exists"})
  }

  next()
}

export default verifyEmailAvailabilityMiddleware