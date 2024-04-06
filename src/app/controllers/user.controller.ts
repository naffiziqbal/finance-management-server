import { Request, RequestHandler } from "express";
import { UserService } from "../services/user.services";

const createUser: RequestHandler = async (req, res) => {
    const { email, password, displayName, photoURL } = req.body;
    try {
        const { user, token } = await UserService.createUser({ email, password, displayName, photoURL });
        res.status(201).json({
            success: true,
            user,
            message: "User Created Successfully",
            token
        });
    } catch (error: any) {
        // console.log(error)
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

const userLogin: RequestHandler = async (req, res) => {
    const { email, password } = req.body;
    try {
        const { user, token } = await UserService.userLogin({ email, password });
        res.status(200).json({
            success: true,
            user,
            message: "User Logged In Successfully",
            token
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

const userAuthentication: RequestHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await UserService.userAuthentication(id);
        res.status(200).json({
            success: true,
            user,
            message: "User Found",
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

const updateUser: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const { email, password, displayName, photoURL } = req.body;
    try {
        const user = await UserService.updateUser(id, { email, password, displayName, photoURL });
        res.status(200).json({
            success: true,
            user,
            message: "User Updated",
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

export const UserController = { createUser, userLogin, userAuthentication, updateUser }
