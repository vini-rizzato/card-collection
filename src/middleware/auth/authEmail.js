function authEmail(req, res, next) {
    const { email } = req.user.email;

    if (!email) {
        return res.status(400).json({ message: "Email é obrigatório." });
    };

    next();
};

export default authEmail;