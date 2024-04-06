import { Schema, model } from "mongoose";
import { IUser } from "../types/user.interface";
import bcryptjs from "bcryptjs";

const userSchema = new Schema<IUser>({
    email: { type: String, required: true },
    password: { type: String, required: true },
    displayName: { type: String, required: true },
    photoURL: { type: String, required: true }
})

userSchema.pre("save", async function (next) {
    try {
        const salt = await bcryptjs.genSalt(10);
        this.password = await bcryptjs.hash(this.password, salt);
        next();
    } catch (error) {
        return error
    }
})

const User = model<IUser>("User", userSchema);
export default User;
