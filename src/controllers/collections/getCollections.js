import UserModel from "../../model/user.js";

async function getCollections(req, res) {
    try {
        const email = req.user.email;

        const user = await UserModel.findOne(
            { email },
            { collections: 1, _id: 0 }
        )

        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado." });
        }

        if (user.collections.length <= 0) return res.status(200).json({ message: "O usuário não possui coleções criadas." });

        return res.status(200).json(user.collections);

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Erro ao buscar coleções: " + err });
    }
}

export default getCollections;