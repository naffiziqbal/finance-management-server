import cors from "cors"
import express from "express"
import userRoutes from "./routes/user.routes"
import serviceRoutes from "./routes/services.routes"


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//* /============================ Routes
app.use("/api/v1/user", userRoutes)
app.use("/api/v1/service", serviceRoutes)


export default app
