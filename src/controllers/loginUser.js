import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../model/user";

async function loginUser(req, res, next) {
    
    const {email, password} = req.body;

    try{
        const findUser = await UserModel.findOne({ email: email });
    }
}