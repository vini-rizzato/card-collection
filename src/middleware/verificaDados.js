function verificaDados(req, res, next){
    const {name, email, password} = req.body;

    if(!name || !email || !password) {
        return res.json({"message": "Dados incompletos"});
    }

    next();
};

export default verificaDados;