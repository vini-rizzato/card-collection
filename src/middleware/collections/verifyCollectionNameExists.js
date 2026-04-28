async function verifyCollectionNameExists(req, res, next) {
    const { nameCollection } = req.body;

    if (!nameCollection) {
        return res.status(400).json({ message: "Nome da coleção é obrigatório." });
    }

    next();
}

export default verifyCollectionNameExists;