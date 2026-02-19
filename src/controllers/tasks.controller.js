const tasksService = require("../services/tasks.service");

const listTasks = (req, res) => res.json(tasksService.getAll());

const getTask = (req, res) => {
    const task = tasksService.getById(req.params.id);
    return task ? res.json(task) : res.status(404).json({ message: "Task not found" });
};

const filterByStatus = (req, res) =>
    res.json(tasksService.getByStatus(req.query.completed));

const createTask = (req, res) =>
    res.status(201).json(tasksService.create(req.body));

const deleteTask = (req, res) => {
    const deleted = tasksService.remove(req.params.id);
    return deleted ? res.json(deleted) : res.status(404).json({ message: "Task not found" });
};

const updateTask = (req, res) => {
    const updated = tasksService.update(req.params.id, req.body);
    return updated ? res.json(updated) : res.status(404).json({ message: "Task not found" });
};

module.exports = { listTasks, getTask, filterByStatus, createTask, deleteTask, updateTask };