import UserModel from "../../model/user.js";

function adicionarCartaUser(req, res) {
    try {
        const { name, image, oracle_id } = req.body;

        const novaCarta = {
            name,
            image,
            oracle_id
        };


        UserModel.updateOne(
            { email: req.user.email },
            { $push: { cards: novaCarta } }
        );

        return res.status(201).json({ message: "Carta adicionada com sucesso!" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Erro ao adicionar carta " + err });
    }
};

export default adicionarCartaUser;