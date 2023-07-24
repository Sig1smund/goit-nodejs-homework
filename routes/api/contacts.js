const express = require("express");
const router = express.Router();
const { ReqSchema, updateFavoriteSchema } = require("../../utils");
const ctrl = require("../../controllers/contacts");
const { validateBody, isValidId } = require("../../middleware");

router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", validateBody(ReqSchema), ctrl.addContact);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(updateFavoriteSchema),
  ctrl.updateStatusContact
);

router.delete("/:contactId", isValidId, ctrl.deleteContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(ReqSchema),
  ctrl.updateContact
);

module.exports = router;
