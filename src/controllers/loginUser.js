import jwt from "jsonwebtoken";
import UserModel from "../model/user.js";
import { configDotenv } from "dotenv";

async function loginUser(req, res) {
    
    const {email} = req.body;
    configDotenv();

    try{
        const findUser = await UserModel.findOne({ email: email });

        const payloadUser = {
            id: findUser.id,
            name: findUser.name,
            email: findUser.email,
            role: findUser.role
        };

        const userToken = jwt.sign(payloadUser, process.env.JWT_KEY, {expiresIn: "4h"});

        return res.json({ token: userToken });
    } catch(err) {
        return res.json({ "messsage": "Erro " + err });
    }
};

export default loginUser;