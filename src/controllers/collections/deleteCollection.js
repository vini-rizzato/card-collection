import UserModel from "../../model/user.js";

async function deleteCollection(req, res) {
    try {
        const { email } = req.headers;
        if (!email) {
            return res.status(400).json({ message: "Email é obrigatório." });
        };
        const { collectionId } = req.body;

        if (!collectionId) {
            return res.status(400).json({ message: "collectionId é obrigatório." });
        };

        await UserModel.updateOne(
            { email: email },
            { $pull: { collections: { _id: collectionId } } }
        );

        return res.status(200).json({ message: "Coleção deletada com sucesso!" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Erro ao deletar coleção: " + err });
    }
};