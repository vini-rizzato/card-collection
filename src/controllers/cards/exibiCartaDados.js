// exibiCartaDados.js
import buscarSetsCard from "../../api/scryfall/buscarSetsCard.js";

async function exibiCartaDados(req, res) {
    try {
        const setCard = await buscarSetsCard(req.card);

        return res.json({
            name: req.card.name,
            image: req.card.image,
            sets: setCard
        });
    
    } catch(err) {
        console.error(err);
        return res.status(500).json({ message: "Erro ao buscar carta " + err });
    }
}

export default exibiCartaDados;