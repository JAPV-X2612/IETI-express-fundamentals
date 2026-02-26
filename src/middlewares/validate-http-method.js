const ALLOWED_METHODS = ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS", "HEAD"];

const validateHttpMethod = (req, res, next) => {
    if (!ALLOWED_METHODS.includes(req.method)) {
        return res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
    next();
};

module.exports = validateHttpMethod;