const { Router } = require("express");
const router = Router();

const mediumClients = [
  { nombre: "Maria", age: "23" },
  { nombre: "Ana", age: "22" },
  { nombre: "Ricardo", age: "22" },
  { nombre: "Camila", age: "21" },
  { nombre: "Angel", age: "24" },
  { nombre: "Jeison", age: "27" },
  { nombre: "Armando", age: "28" },
];

router.get("/", function (req, res) {
  res.json({ clients: mediumClients });
});

router.post("/", function (req, res) {
  const data = req.body;
  mediumClients.push(data);
  res.status(201).json({ createdClient: data });
});

router.put("/:id", function (req, res) {
  const id = req.params.id;
  const data = req.body;
  mediumClients[id] = data;
  res.status(200).json({ updatedClient: mediumClients[id] });
});

router.delete("/:id", function (req, res) {
  const id = req.params.id;
  const data = mediumClients.splice(id, 1)[0];
  res.status(200).json({ deletedClient: data });
});

module.exports = router;
