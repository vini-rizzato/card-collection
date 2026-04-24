import buscarCardNovo from "../../api/scryfall/buscarCardNovo.js";
import buscarSets from "../../api/scryfall/buscarSetsCard.js";

async function adicionarCarta(req, res) {
    try {
        const nome = req.params.name;
    
    }catch(err) {
        console.error(err);
        return res.status(500).json({ message: "Erro ao buscar carta " + err });
    }
}

export default adicionarCarta;