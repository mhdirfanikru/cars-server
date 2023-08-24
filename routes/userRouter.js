import express from "express";
const router = express.Router();
import { verifyUserToken } from "../middleware/userAuth.js";
import {registerUser, userLogin, getCars } from "../controller/userController.js";


router.post("/register", registerUser);

router.post("/login", userLogin);

router.get("/cars",getCars)

export default router;