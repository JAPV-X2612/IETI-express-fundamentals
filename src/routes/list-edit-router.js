const { Router } = require("express");
const { createTask, deleteTask, updateTask } = require("../controllers/tasks.controller");

const router = Router();

router.post("/", createTask);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);

module.exports = router;