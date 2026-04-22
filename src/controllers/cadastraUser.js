import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserModel from "../model/user.js";
import { configDotenv } from "dotenv";

configDotenv();

async function cadastraUser(req, res, next) {

    try{
        const {name, email, password} = req.body;

        const senhaCript = await bcrypt.hash(password, 10);

        console.log(senhaCript);

        const user = await UserModel.insertOne({
            name: name,
            email: email,
            password: senhaCript,
            role: "User"
        });

        console.log("Usuario adicionado: " + user);

        const logaUser = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_KEY)

        res.status(201).json({ token: logaUser });
    }catch(err){
        console.log("Erro: " + err);
        res.status(500).json({ message: "Erro 500" })
    }
}

export default cadastraUser;