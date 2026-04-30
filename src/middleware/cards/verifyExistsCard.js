import UserModel from "../../model/user.js";

async function verifyExistsCard(req, res, next) {
    const card = req.card;

    const findUser = await UserModel.findOne({ email: req.user.email });

    const findCard = findUser.collections.some(collection => {
        return collection.cards.some(c => c.set === card.set && c.name === card.name);
    });

    if (findCard) {
        return res.status(400).json({ message: "Carta já existe na coleção." });
    };

    return next();
}

export default verifyExistsCard;