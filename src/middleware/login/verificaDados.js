function verificaDadosLogin(req, res, next){
    const { email, password} = req.body;

    if(!email || !password) {
        return res.json({"message": "Dados incompletos"});
    }

    next();
};

export default verificaDadosLogin;