import UserModel from "../../model/user.js";

async function adicionarCartaUser(req, res) {
    try {
        const { collectionId } = req.body;

        if (!collectionId) {
            return res.status(400).json({ message: "collectionId é obrigatório." });
        }

        await UserModel.updateOne(
            { email: req.user.email, "collections._id": collectionId },
            { $push: { "collections.$.cards": req.card } }
        );

        return res.status(201).json({ message: "Carta adicionada com sucesso!" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Erro ao adicionar carta: " + err });
    }
};

export default adicionarCartaUser;