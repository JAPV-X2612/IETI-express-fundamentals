const { Router } = require("express");
const { listTasks, getTask, filterByStatus } = require("../controllers/tasks.controller");

const router = Router();

router.get("/", listTasks);
router.get("/filter", filterByStatus);
router.get("/:id", getTask);

module.exports = router;