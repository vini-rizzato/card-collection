function verifyData(req, res, next){
    const { email, password} = req.body;

    if(!email || !password) {
        return res.status(400).json({"message": "Dados incompletos"});
    }

    next();
};

export default verifyData;