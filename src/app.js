const express = require("express");
const app = express();
const mediumClientsEndpoint = require("./medium-clients");
const premiumClientsEndpoint = require("./premium-clients");

app.use(express.json());

app.get("/medium-clients", (req, res) => res.send("Ruta clientes medium"));
app.get("/premium-clients", (req, res) => res.send("Ruta clientes premium"));

app.use("/api/medium-clients", mediumClientsEndpoint);
app.use("/api/premium-clients", premiumClientsEndpoint);

app.use("/category/:category", (req, res) => {
  const { category } = req.params;
  if (["a", "b", "c"].includes(category)) {
    return res.redirect("/premium-clients");
  }
  res.redirect("/medium-clients");
});

app.get("/", (req, res) => res.send("Bienvenido a la api de ADA Cars"));

module.exports = app;
