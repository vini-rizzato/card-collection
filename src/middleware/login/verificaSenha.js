import UserModel from "../../model/user.js";
import bcrypt from "bcrypt";

async function verifyPassword(req, res, next) {

    const { email, password } = req.body;
    const findUser = await UserModel.findOne({email: email});

    const userPassword = findUser.password;
    const hashedPassword = bcrypt.hash(10, password);


    if(!bcrypt.compare(userPassword === hashedPassword)) {
        return res.json({ "message": "Senha inválida." })
    };

    next();
};

export default verifyPassword;