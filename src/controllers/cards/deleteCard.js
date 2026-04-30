import UserModel from "../../model/user.js";

async function deleteCard(req, res) {
    try {
        const email = req.user.email;
        const collectionId = req.collectionId;
        const { cardId } = req.card;

        const result = await UserModel.updateOne(
            { 
                email,
                "collections._id": collectionId
            },
            { 
                $pull: { "collections.$.cards": { _id: cardId } } 
            }
        );

        if (result.modifiedCount === 0) {
            return res.status(404).json({ message: "Carta não encontrada na coleção" });
        }

        return res.status(200).json({ message: "Carta deletada com sucesso!" });
        
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Erro ao deletar carta" });
    }
}

export default deleteCard;