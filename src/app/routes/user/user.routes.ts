import { Router } from "express";
import { UserController } from "../../controllers/user/user.controller";
import verifyJwt from "../../middleware/jwt/verifyJwt";

const userRoutes = Router()

userRoutes.post("/create-user", UserController.createUser)
userRoutes.post("/login", UserController.userLogin)
userRoutes.post("/:id", verifyJwt, UserController.userAuthentication)
// userRoutes.post("/:id", UserController.userAuthentication)


export default userRoutes
