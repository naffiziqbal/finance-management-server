import { config } from "../../../config";
import User from "../../models/user/user.model";
import { IUser, IUserLogin } from "../../types/user.interface";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

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


const userLogin = async ({ email, password }: IUserLogin) => {
    //* Check if user exists
    const user = await User.findOne({ email })
    if (!user) throw new Error("User Not Found")
    //* Check if password is correct
    const isMatch = await bcryptjs.compare(password, user.password)
    if (!isMatch) throw new Error("Invalid Credentials")
    //* Create token
    const token = jwt.sign({ uid: user._id }, config.user_secret as string, { expiresIn: "1hr" })
    return { user, token }
}

const userAuthentication = async (id: string) => {
    const user = await User.findById({ _id: id });
    if (!user) throw new Error("User Not Found")
    return user;

}
export const UserService = { createUser, userLogin, userAuthentication }
