import UserModel from "../../model/user.js";

async function createCollection(req, res) {
    try {
        const email = req.user.email;
        const { nameCollection } = req.body;

        await UserModel.updateOne(
            { email: email },
            { $push: { collections: { nameCollection: nameCollection, cards: [] } } }
        );

        return res.status(200).json({ message: "Coleção criada com sucesso!" });

    }catch(err) {
        console.error(err);
        return res.status(500).json({ message: "Erro ao criar coleção: " + err });
    }
}

export default createCollection;