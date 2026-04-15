import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();


async function connectDB() {
    try{
        await mongoose.connect(process.env.CONNECTION_DB_URL);
 
        console.log("banco conectado");
    }catch(err) {
        console.error({"error": "Erro" + err});
    }
}

export default connectDB;