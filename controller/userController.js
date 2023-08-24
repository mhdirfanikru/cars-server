import jwt from "jsonwebtoken";
import User from "../model/userModel.js";
import Car from "../model/carsModel.js";

let JWT_SECRET = "userToken"


//create new user
export const registerUser = async (req, res) => {
    try {
        const {userName, number, email, password } = req.body;

        if (!email || !password ||!userName ||!number) {
            return res.status(401).json({ message: "all fields are required" });
        }

        const userDetails = await User.findOne({ email });

        if (userDetails) {
            res.status(200).json({ success: false, message: "User already Registered" });
        }
        else {
            const newUser = await User.create({
                userName,
                number,
                email,
                password
            });
            res.status(200).json({success: true,message: "success new user created",user: newUser,});
        }

    } catch (error) {
        res.status(500).json({ error: error });
    }
};


//login user
export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(401).json({ message: "all fields are required" });
        }

        const userDetails = await User.findOne({ email });

        if (userDetails) {
            if (password !== userDetails.password) {
                return res.status(200).json({ success: false, message: "User Password is Invalid" });
            }

            const token = jwt.sign(
                {
                    id: userDetails._id,
                    email: userDetails.email,
                },
                JWT_SECRET,
                { expiresIn: "30d" }
            );
            res.status(200).json({ success: true, token, message: "successfully login" });
        }
        else {
            res.status(200).json({ success: false, message: "User not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

export const getCars = async (req, res) => {
    try {
        const cars = await Car.find()
        res.status(200).json(cars);
    }catch (err) {
        console.log(err)
        res.status(400).json({ error: err });
    } 
}