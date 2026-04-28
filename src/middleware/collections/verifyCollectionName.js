import UserModel from "../../model/user.js";

async function verifyCollectionName(req, res, next) {
    try {
        const email = req.user.email;
        const { nameCollection } = req.body;

        const existsCollection = await UserModel.findOne({
            email,
            "collections.nameCollection": {
                $regex: new RegExp(`^${nameCollection.trim()}$`, "i")
            }
        });

        if (existsCollection) {
            return res.status(400).json({ message: "Nome da coleção já sendo usado." });
        }

        req.body.nameCollection = nameCollection;

        next();

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Erro ao validar coleção." });
    }
}

export default verifyCollectionName;