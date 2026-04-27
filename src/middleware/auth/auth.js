import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";

configDotenv();

async function auth(req, res, next) {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).json({ message: "Token não enviado." })
    }

    const token = authHeader.split(" ")[1];

    try {
        const verified = jwt.verify(token, process.env.JWT_KEY);

        req.user = verified;
        next();
    }catch(err) {
        console.error(err);
        return res.status(401).json({ message: "Token inválido ou expirado." }); 
    }
}   

export default auth;