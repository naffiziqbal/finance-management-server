import { config } from "../../../config";
import User from "../../models/user/user.model";
import { IUser } from "../../types/user.interface";
import jwt from "jsonwebtoken";

const createUser = async ({ email, password, displayName, photoURL }: IUser) => {
    //* Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error("User Already Exists");

    //* Create new user
    const user = await User.create({ email, password, displayName, photoURL });
    if (user._id) {
        //* Create token
        const token = jwt.sign({ uid: user._id }, config.user_secret as string, { expiresIn: "1h" })
        console.log(token);
        return { user, token };
    };
    throw new Error("User not created");
}


export const UserService = { createUser }
