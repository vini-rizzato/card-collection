async function existsCard(req, res, next) {
    const name = req.params.name; 

    try {
        const response = await fetch(
            `https://api.scryfall.com/cards/named?exact=${encodeURIComponent(name)}`
        );

        if (!response.ok) {
            return res.status(404).json({ message: "Carta não encontrada." });
        }

        const dadosCard = await response.json();

        const dadosFiltrados = {
            name: dadosCard.name,
            set: dadosCard.set,
            image: dadosCard.image_uris
                ? dadosCard.image_uris.normal
                : dadosCard.card_faces[0].image_uris.normal,
            oracle_id: dadosCard.oracle_id 
        };

        req.card = dadosFiltrados;

        return next();

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Erro ao consultar Scryfall." });
    }
}

export default existsCard;