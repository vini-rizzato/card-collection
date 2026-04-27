import UserModel from "../../model/user.js";

async function updateCollection(req, res) {
    try{
        const { email } = req.user.email;

        const { collectionId } = req.body;

        UserModel.updateOne(
            { email: email }, 
            { $rename: { collections: { _id: collectionId } }}
        );

        return res.status(200).json({ message: "Coleção atualizada com sucesso!" });

    }catch(err){
        console.error(err);
        return res.status(500).json({ message: "Erro ao atualizar coleção: " + err });
    }
}

export default updateCollection;