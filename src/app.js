const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY;

const users = [
  { email: "admin@example.com", name: "admin", rol: "admin" },
  { email: "user@example.com", name: "user", rol: "user" },
];

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Bienvenido a la api de ADA Cars");
});

app.post("/auth", (req, res) => {
  const user = users.find((u) => u.email === req.body.email);
  if (!user) {
    return res.status(401).send({ error: "Invalid user name or password" });
  }
  const token = jwt.sign({ email: user.email, name: user.name, rol: user.rol }, SECRET_KEY);
  res.json({ token });
});

const JWTValidation = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, SECRET_KEY);
    req.rol = decoded.rol;
    next();
  } catch (error) {
    res.json({ error });
  }
};

app.get("/premium-clients", JWTValidation, (req, res) => {
  if (req.rol === "admin") {
    return res.json({ message: "premium-clients list" });
  }
  res.status(403).json({ error: "Access not allowed" });
});

app.get("/medium-clients", JWTValidation, (req, res) => {
  if (req.rol === "admin" || req.rol === "user") {
    return res.json({ message: "medium-clients list" });
  }
  res.status(403).json({ error: "Access not allowed" });
});

const server = app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});

module.exports = server;