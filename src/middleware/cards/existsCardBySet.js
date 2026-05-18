async function existsCardBySet(req, res, next) {
    const { name } = req.params;
    const { set, qtd } = req.body;

    if (!set) {
        return res.status(400).json({ message: "set é obrigatório." });
    }

    try {
        const response = await fetch(
            `https://api.scryfall.com/cards/named?exact=${encodeURIComponent(name)}&set=${set}`
        );

        if (!response.ok) {
            return res.status(404).json({ message: "Carta não encontrada nesse set." });
        }

        const dadosCard = await response.json();

        req.card = {
            name: dadosCard.name,
            setName: dadosCard.set_name,
            set: dadosCard.set,
            image: dadosCard.image_uris
                ? dadosCard.image_uris.normal
                : dadosCard.card_faces[0].image_uris.normal,
            qtd: qtd ? Math.max(1, Number(qtd)) : 1
        };

        return next();

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Erro ao consultar Scryfall." });
    }
}

export default existsCardBySet;