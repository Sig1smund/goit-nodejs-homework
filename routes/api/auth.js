const express = require("express");
const router = express.Router();
const { validateBody } = require("../../middleware");
const { RegisterSchema, LoginSchema } = require("../../utils/schemas");
const ctrl = require("../../controllers/auth");

router.post("/register", validateBody(RegisterSchema), ctrl.register);

router.post("/login", validateBody(LoginSchema), ctrl.login);

module.exports = router;
