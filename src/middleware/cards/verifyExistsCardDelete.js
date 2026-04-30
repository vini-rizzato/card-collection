import UserModel from "../../model/user.js";

async function verifyExistsCardDelete(req, res, next) {
    const { collectionId, cardId } = req.card;

    const findUser = await UserModel.findOne({ email: req.user.email });

    const collection = findUser.collections.find(
        c => c._id.toString() === collectionId
    );

    if (!collection) {
        return res.status(404).json({ message: "Coleção não encontrada" });
    }

    const cardExists = collection.cards.some(
        c => c._id.toString() === cardId
    );

    if (!cardExists) {
        return res.status(404).json({ message: "Carta não existe na coleção" });
    }

    return next();
}

export default verifyExistsCardDelete;