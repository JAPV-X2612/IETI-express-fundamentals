const validateTaskParams = (req, res, next) => {
    const { id } = req.params;
    if (id !== undefined && (isNaN(Number(id)) || Number(id) <= 0)) {
        return res.status(400).json({ message: "Invalid task id parameter" });
    }
    const { completed } = req.query;
    if (completed !== undefined && completed !== "true" && completed !== "false") {
        return res.status(400).json({ message: "Invalid completed query param, use true or false" });
    }
    next();
};

module.exports = validateTaskParams;