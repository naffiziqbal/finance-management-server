import app from "./app/app";
import mongoose from 'mongoose';
import { config } from "./config";

main().catch(err => console.log(err));

const port = config.port
async function main() {
    try {
        await mongoose.connect(config.db_url as string);
        app.listen(port, () => `Server Is Listening on ${port}`)
        console.log(`Server Is Listening on ${port}`)

    } catch (error) {
        console.log(error)
    }

}
