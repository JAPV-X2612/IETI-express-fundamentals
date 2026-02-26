const getProfile = (req, res) => {
    res.json({ message: "Access granted", user: req.user });
};

module.exports = { getProfile };