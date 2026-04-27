import UserModel from "../../model/user.js";

async function deleteCollection(req, res) {
    try {
        const { email } = req.user.email;

        const { collectionId } = req.body;

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

export default deleteCollection;