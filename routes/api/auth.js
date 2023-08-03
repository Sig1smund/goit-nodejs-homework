const express = require("express");
const router = express.Router();
const { validateBody, authenticate, upload } = require("../../middleware");
const {
  RegisterSchema,
  LoginSchema,
  updateSubSchema,
} = require("../../schemas");
const ctrl = require("../../controllers/auth");

router.post("/register", validateBody(RegisterSchema), ctrl.register);

router.post("/login", validateBody(LoginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch("/", authenticate, validateBody(updateSubSchema), ctrl.subscribe);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
