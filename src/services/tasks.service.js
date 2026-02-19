const tasks = require("../data/tasks.data");

const getAll = () => tasks;

const getById = (id) => tasks.find((t) => t.id === Number(id));

const getByStatus = (completed) =>
    tasks.filter((t) => t.completed === (completed === "true"));

const create = (task) => {
    const newTask = { id: tasks.length + 1, ...task };
    tasks.push(newTask);
    return newTask;
};

const remove = (id) => {
    const index = tasks.findIndex((t) => t.id === Number(id));
    if (index === -1) return null;
    return tasks.splice(index, 1)[0];
};

const update = (id, data) => {
    const task = getById(id);
    if (!task) return null;
    Object.assign(task, data);
    return task;
};

module.exports = { getAll, getById, getByStatus, create, remove, update };