import UserModel from "../../model/user.js";

async function updateCard(req, res) {
    try {
        const email = req.user.email;
        const collectionId = req.collectionId;
        const { cardId } = req.card;
        const { set, qtd } = req.body;

        if (!set) {
            return res.status(400).json({ message: "Novo set é obrigatório." });
        }

        const setFields = { "collections.$[col].cards.$[card].set": set };
        if (qtd !== undefined) {
            setFields["collections.$[col].cards.$[card].qtd"] = Math.max(1, Number(qtd));
        }

        const result = await UserModel.updateOne(
            {
                email,
                "collections._id": collectionId,
                "collections.cards._id": cardId
            },
            { $set: setFields },
            {
                arrayFilters: [
                    { "col._id": collectionId },
                    { "card._id": cardId }
                ]
            }
        );

        if (result.modifiedCount === 0) {
            return res.status(404).json({ message: "Carta não encontrada ou não atualizada" });
        }

        return res.status(200).json({ message: "Carta atualizada com sucesso!" });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Erro ao atualizar carta" });
    }
}

export default updateCard;