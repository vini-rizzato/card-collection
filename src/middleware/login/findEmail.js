import UserModel from "../../model/user.js";

async function findEmail(req, res, next) {

    const { email } = req.body;
    const findUser = await UserModel.findOne({email: email});

    if(!findUser) {
        return res.status(404).json({ "message": "Email não encontrado." })
    };

    next();
};

export default findEmail;