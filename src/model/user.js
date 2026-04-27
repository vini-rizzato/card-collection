import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    collections: [{
        idCollection: String,
        nameCollection: String,
        cards: [{
            name: String,
            set: String,
            image: String,
            qtd: Number
        }]
    }]
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;