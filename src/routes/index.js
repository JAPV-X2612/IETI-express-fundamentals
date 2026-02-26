const { Router } = require("express");
const clientsRouter = require("./clients");
const listViewRouter = require("./list-view-router");
const listEditRouter = require("./list-edit-router");
const authRouter = require("./auth.router");
const protectedRouter = require("./protected.router");

const router = Router();

router.use("/clients", clientsRouter);
router.use("/tasks", listViewRouter);
router.use("/tasks", listEditRouter);
router.use(authRouter);
router.use(protectedRouter);

module.exports = router;