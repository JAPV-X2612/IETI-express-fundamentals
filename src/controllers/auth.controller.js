const jwt = require("jsonwebtoken");
const users = require("../data/users.data");

const login = (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }
    const user = users.find((u) => u.email === email);
    if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign(
        { id: user.id, email: user.email, name: user.name, role: user.role },
        process.env.SECRET_KEY
    );
    res.json({ token });
};

module.exports = { login };