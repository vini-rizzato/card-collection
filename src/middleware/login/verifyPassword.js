import UserModel from "../../model/user.js";
import bcrypt from "bcrypt";

async function verifyPassword(req, res, next) {

    const { email, password } = req.body;
    const findUser = await UserModel.findOne({email: email});

    const userPassword = findUser.password;
    const hashedPassword = await bcrypt.hash(password, 10);

    const senhaValida = await bcrypt.compare(password, userPassword);

    if(!senhaValida) {
        return res.status(400).json({ "message": "Senha inválida." })
    };

    next();
};

export default verifyPassword;