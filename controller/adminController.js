import jwt from "jsonwebtoken";
import Admin from "../model/adminModel.js";
import User from "../model/userModel.js";
import Car from "../model/carsModel.js";

let JWT_SECRET = "adminToken"


//admin login
export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(401).json({ message: "all fields are required" });
        }

        console.log(req.body)

        const adminDetails = await Admin.findOne({ email });

        console.log(adminDetails)

        if (adminDetails) {

            if (password !== adminDetails.password) {
                return res
                    .status(200)
                    .json({ success: false, message: "Admin Password is Invalid" });
            }

            const adminToken = jwt.sign(
                { id: adminDetails._id },
                JWT_SECRET
              );
            res.status(200).json({ success: true, adminToken});
        } else {
            res.status(200).json({ success: false, message: "Admin not found" });
        }
    } catch (err) {
        console.log(err)
        res.status(400).json({ error: err });
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ error: err });
    }
}

export const getCars = async (req, res) => {
    try {
        const cars = await Car.find()
        res.status(200).json(cars);
    }catch (err) {
        console.log(err)
        res.status(400).json({ error: err });
    } 
}