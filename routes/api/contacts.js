const express = require("express");
const router = express.Router();
const { ReqSchema, updateFavoriteSchema } = require("../../schemas");
const ctrl = require("../../controllers/contacts");
const { validateBody, isValidId, authenticate } = require("../../middleware");

router.get("/", authenticate, ctrl.getAll);

router.get("/:contactId", authenticate, isValidId, ctrl.getById);

router.post("/", authenticate, validateBody(ReqSchema), ctrl.addContact);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(updateFavoriteSchema),
  ctrl.updateStatusContact
);

router.delete("/:contactId", authenticate, isValidId, ctrl.deleteContact);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(ReqSchema),
  ctrl.updateContact
);

module.exports = router;
