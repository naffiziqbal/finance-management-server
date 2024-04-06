import { Request, RequestHandler } from "express";
import { UserService } from "../../services/user/user.services";

const createUser: RequestHandler = async (req, res) => {
    const { email, password, displayName, photoURL } = req.body;
    try {
        const { user, token } = await UserService.createUser({ email, password, displayName, photoURL });
        console.log(user, token)
        res.status(201).json({
            success: true,
            user,
            message: "User Created Successfully",
            token
        });
    } catch (error: any) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}


export const UserController = { createUser }
