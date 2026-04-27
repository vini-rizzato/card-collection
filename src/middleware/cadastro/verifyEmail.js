import UserModel from "../../model/user.js";

async function verifyEmail(req, res, next) {

    const { email } = req.body;

    const findUserEmail = await UserModel.findOne({ email: email }).exec();
    
    if(findUserEmail) {
        return res.status(409).json({"message": "Email já cadastrado."});
    };

    next();
};

export default verifyEmail;