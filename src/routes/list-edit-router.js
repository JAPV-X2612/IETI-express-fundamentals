const { Router } = require("express");
const { createTask, deleteTask, updateTask } = require("../controllers/tasks.controller");
const validateTaskBody = require("../middlewares/validate-task-body");

const router = Router();

router.post("/", validateTaskBody, createTask);
router.delete("/:id", deleteTask);
router.put("/:id", validateTaskBody, updateTask);

module.exports = router;