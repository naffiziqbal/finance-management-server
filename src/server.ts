import app from "./app/app";
import mongoose from 'mongoose';
import { config } from "./config";
import { Request, Response } from "express";

main().catch(err => console.log(err));

const port = config.port
async function main() {
    try {
        await mongoose.connect(config.db_url as string);
        app.get('/', (req: Request, res: Response) => {
            res.status(200).json({ message: "Finance Management" })
        })

        app.listen(port, () => `Server Is Listening on ${port}`)
        console.log(`Server Is Listening on ${port}`)

    } catch (error) {
        console.log(error)
    }

}
