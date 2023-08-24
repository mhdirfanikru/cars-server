import express from "express";
const app = express();
import cors from "cors";
import bodyParser from "body-parser";
import dbConnection from './config/db.js'
import UserRoutes from './routes/userRouter.js'
import AdminRoutes from './routes/adminRouter.js'

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use('/api',UserRoutes)
app.use('/api/admin',AdminRoutes)

dbConnection().then(()=>{
    app.listen(5000,()=>console.log("SERVER STARTED AT PORT:5000"))
})
