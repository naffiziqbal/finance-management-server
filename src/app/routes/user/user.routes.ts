import { Router } from "express";
import { UserController } from "../../controllers/user/user.controller";

const userRoutes = Router()

userRoutes.post("/create-user", UserController.createUser)
userRoutes.post("/login", UserController.userLogin)


export default userRoutes
