async function existeCard(req, res, next) {
    const nome = req.params.nome; 

    try {
        const response = await fetch(
            `https://api.scryfall.com/cards/named?exact=${encodeURIComponent(nome)}`
        );

        if (!response.ok) {
            return res.status(404).json({ message: "Carta não encontrada." });
        }

        const dadosCard = await response.json();

        req.card = dadosCard;

        return next();

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Erro ao consultar Scryfall." });
    }
}

export default existeCard;