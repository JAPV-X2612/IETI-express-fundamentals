const isValidTaskBody = (body) => {
    const { title, completed } = body;
    return (
        title &&
        typeof title === "string" &&
        title.trim().length > 0 &&
        typeof completed === "boolean"
    );
};

const validateTaskBody = (req, res, next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: "Request body is empty" });
    }
    if (!isValidTaskBody(req.body)) {
        return res.status(400).json({ message: "Invalid or missing task attributes" });
    }
    next();
};

module.exports = validateTaskBody;