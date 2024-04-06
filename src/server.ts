import mongoose from 'mongoose';
import { config } from './config';

main().catch(err => console.log(err));

async function main() {
    try {
        await mongoose.connect(config.db_url as string);
        console.log('Connected to database🖥🖥🖥🖥🖥')
    }
    catch (err) { console.log(err); }
}
