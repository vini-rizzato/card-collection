import UserModel from "../../model/user.js";

async function verificaExisteEmail(req, res, next) {

    const { email } = req.body;

    const findUserEmail = await UserModel.findOne({ email: email }).exec();
    
    if(findUserEmail) {
        return res.json({"message": "Email já cadastrado."});
    };

    next();
};

export default verificaExisteEmail;