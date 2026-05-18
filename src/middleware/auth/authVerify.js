import jwt from 'jsonwebtoken';
import { configDotenv } from 'dotenv';

configDotenv();

async function authVerify(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return next();
    }

    const token = authHeader.split(" ")[1];

    try {
        jwt.verify(token, process.env.JWT_KEY);
        return res.status(400).json({ message: "Usuário já autenticado." });
    } catch(err) {
        return next();
    }
}

export default authVerify;