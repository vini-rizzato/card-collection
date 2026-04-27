function verifyDataRegister(req, res, next){
    const {name, email, password} = req.body;

    if(!name || !email || !password) {
        return res.status(400).json({"message": "Dados incompletos"});
    }

    next();
};

export default verifyDataRegister;