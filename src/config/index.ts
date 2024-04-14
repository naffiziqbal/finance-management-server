import dotenv from 'dotenv';
import path from "path"
import { cwd } from 'process';


dotenv.config({ path: path.join(cwd(), ".env") });

export const config = {
    port: process.env.PORT || 5000,
    db_url: process.env.DB_URL,
    user_secret: process.env.USER_SECRET,
    environment: process.env.ENVIRONMENT
}
