import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import authRoutes from "./routes/authRoutes.js"
const app = express()
dotenv.config()

const port = process.env.PORT || 3000
const admin_Url = process.env.ADMIN_URL

//enhanced cors configuration
app.use(
    cors({
        origin: admin_Url,
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
)

//route setup

app.use("/api/auth", authRoutes)

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
    console.log(`Admin is running on ${admin_Url}`);

})
