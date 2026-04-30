function buscaDadosCard(req, res, next) {
    try {
        const { collectionId, set, cardId } = req.body;

        if (!collectionId) {
            return res.status(400).json({ message: "collectionId não informado" });
        }

        if (!set) {
            return res.status(400).json({ message: "set não informado" });
        }

        if (!cardId) {
            return res.status(400).json({ message: "_id não informado" });
        }

        req.card = {
            collectionId,
            set,
            cardId
        };

        return next();
    } catch (err) {
        return res.status(400).json({ message: "Dados inválidos" });
    }
}

export default buscaDadosCard;