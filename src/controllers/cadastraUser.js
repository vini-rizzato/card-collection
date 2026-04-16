import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserModel from "../model/user";
import { configDotenv } from "dotenv";


async function cadastraUser(req, res, next) {

    configDotenv();

    try{
        const {name, email, password} = req.body;

        const senhaCript = bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt);
        });

        console.log(senhaCript);

        const user = await UserModel.insertOne({
            name: name,
            email: email,
            password: senhaCript
        });

        console.log("Usuario adicionado: " + user);

        const logaUser = jwt.sign({ foo: 'bar' }, process.env.JWT_KEY, { algorithm: 'RS256' })

        res.json({"token": logaUser});
    }catch(err){
        res.send({"message": "Erro 500"})
    }


}
export default cadastraUser;