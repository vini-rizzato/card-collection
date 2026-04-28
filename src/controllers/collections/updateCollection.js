import UserModel from "../../model/user.js";

async function updateCollection(req, res) {
    try {
        const email = req.user.email;
        const { collectionId, nameCollection } = req.body;

        if (!nameCollection) {
            return res.status(400).json({ message: "Novo nome é obrigatório." });
        }

        await UserModel.updateOne(
            { email, "collections._id": collectionId },
            { $set: { "collections.$.nameCollection": nameCollection } }
        );

        return res.status(200).json({ message: "Coleção atualizada com sucesso!" });

    } catch(err) {
        console.error(err);
        return res.status(500).json({ message: "Erro ao atualizar coleção: " + err });
    }
}

export default updateCollection;