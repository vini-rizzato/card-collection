import UserModel from "../model/user.js";

async function createCollection(req, res) {
    try {
        const { email } = req.headers;
        const { nameCollection } = req.body;

        if (!email) {
            return res.status(400).json({ message: "Email é obrigatório." });
        }

        if (!nameCollection) {
            return res.status(400).json({ message: "nameCollection é obrigatório." });
        }

        await UserModel.updateOne(
            { email: email },
            { $push: { collections: { nameCollection: nameCollection, cards: [] } } }
        );

    }catch(err) {
        console.error(err);
        return res.status(500).json({ message: "Erro ao criar coleção: " + err });
    }
}

export default createCollection;