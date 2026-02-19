const express = require("express");
const router = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Bienvenid@ al laboratorio de routing");
});

const server = app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});

module.exports = server;