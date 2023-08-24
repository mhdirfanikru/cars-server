import express from "express";
const router = express.Router();
import { adminLogin, getUsers, getCars } from "../controller/adminController.js";
import { verifyAdminToken } from "../middleware/adminAuth.js";


router.post("/login",adminLogin);

router.get("/users",getUsers)

router.get("/cars",getCars)

export default router;