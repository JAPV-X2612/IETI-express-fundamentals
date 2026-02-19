const { Router } = require("express");
const clientsRouter = require("./clients");
const listViewRouter = require("./list-view-router");
const listEditRouter = require("./list-edit-router");

const router = Router();

router.use("/clients", clientsRouter);
router.use("/tasks", listViewRouter);
router.use("/tasks", listEditRouter);

module.exports = router;