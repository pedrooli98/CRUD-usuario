import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import userLoginController from "../controllers/userLogin.controller";
import listUserProfileController from "../controllers/listUserProfile.controller";
import deleteUserController from "../controllers/deleteUser.controller";

import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import verifyTokenAuthorizationMiddleware from "../middlewares/verifyTokenAuthorization.middlewere";
import verifyAdmAuthorization from "../middlewares/verifyAdmAuthorization.middleware";
import updateUserController from "../controllers/updateUser.controller";

const router = Router()

router.post("", verifyEmailAvailabilityMiddleware, createUserController)
router.get("", verifyTokenAuthorizationMiddleware, verifyAdmAuthorization, listUsersController)
router.post("/login", userLoginController)
router.get("/profile", verifyAdmAuthorization, verifyTokenAuthorizationMiddleware, listUserProfileController)
router.patch("/:id", verifyTokenAuthorizationMiddleware, updateUserController)
router.delete("/:id", verifyTokenAuthorizationMiddleware, deleteUserController)

export default router