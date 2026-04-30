import UserModel from "../../model/user.js";

async function getAllCards(req, res) {
    try {
        const user = await UserModel.findOne({ email: req.user.email });

        const allCards = user.collections.reduce((acc, collection) => {
            return acc.concat(collection.cards);
        }, []);

        return res.json({ cards: allCards });
    }catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Erro ao buscar cartas do usuário: " + err });
    }
};

export default getAllCards;