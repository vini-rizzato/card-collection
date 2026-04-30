import UserModel from "../../model/user.js";

async function verifyCollectionId(req, res, next) {
    const email = req.user.email;
    const { collectionId } = req.body;

    if (!collectionId) {
        return res.status(400).json({ message: "collectionId é obrigatório." });
    }

    const existsCollection = await UserModel.findOne({
        email,
        "collections._id": collectionId
    });


    if (!existsCollection) {
        return res.status(404).json({ message: "Coleção não encontrada." });
    }

    req.collectionId = collectionId;

    next();
}

export default verifyCollectionId;