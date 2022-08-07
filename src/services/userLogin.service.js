import users from "../data";
import * as bycrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const userLoginService = (email, password) => {
  const user = users.find((element) => element.email === email);
  const passwordMatch = bycrypt.compareSync(password, user.password);

  const {uuid, isAdm} = user

  if(!passwordMatch){
    return {message:"Email ou senha inválidos"};  
  };

  const token = jwt.sign({email:email, isAdm:isAdm, uuid:uuid}, "SECRET_KEY", {expiresIn: "24h"});

  return token;
};

export default userLoginService
