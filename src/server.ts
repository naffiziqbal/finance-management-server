import mongoose from 'mongoose';
import { config } from './config';
import app from './app/app';

main().catch(err => console.log(err));
const port = config.port;

async function main() {
    try {
        await mongoose.connect(config.db_url as string);
        app.use((req, res) => {
            res.send("Server is running")
        });
        app.listen(port, () => `Server is running on port ${port}`);
        console.log('Connected to database🖥🖥🖥🖥🖥')
    }
    catch (err) { console.log(err); }
}
