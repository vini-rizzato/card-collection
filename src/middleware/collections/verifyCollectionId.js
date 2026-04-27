function verifyCollectionId (req, res, next) {
    const collectionId = req.body;

    if(!collectionId) return res.status(400).json({ message: "Collection não encontrada." });

    next();
};

export default verifyCollectionId;