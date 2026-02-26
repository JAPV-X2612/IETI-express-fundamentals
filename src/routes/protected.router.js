const { Router } = require("express");
const jwtValidation = require("../middlewares/jwt-validation");
const { getProfile } = require("../controllers/protected.controller");

const router = Router();

router.get("/profile", jwtValidation, getProfile);

module.exports = router;