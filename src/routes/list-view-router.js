const { Router } = require("express");
const { listTasks, getTask, filterByStatus } = require("../controllers/tasks.controller");
const validateTaskParams = require("../middlewares/validate-task-params");

const router = Router();

router.get("/", listTasks);
router.get("/filter", validateTaskParams, filterByStatus);
router.get("/:id", validateTaskParams, getTask);

module.exports = router;