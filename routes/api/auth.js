const express = require("express");
const router = express.Router();
const { validateBody, authenticate } = require("../../middleware");
const { RegisterSchema, LoginSchema } = require("../../schemas");
const ctrl = require("../../controllers/auth");

router.post("/register", validateBody(RegisterSchema), ctrl.register);

router.post("/login", validateBody(LoginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

module.exports = router;
