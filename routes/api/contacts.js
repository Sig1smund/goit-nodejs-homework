const express = require("express");
const router = express.Router();
const { ReqSchema } = require("../../utils");
const ctrl = require("../../controllers/contacts");
const validateBody = require("../../middleware/validateBody");

router.get("/", ctrl.getAll);

// router.get("/:contactId", ctrl.getById);

router.post("/", validateBody(ReqSchema), ctrl.addContact);

// router.delete("/:contactId", ctrl.deleteContact);

// router.put("/:contactId", validateBody(ReqSchema), ctrl.updateContact);

module.exports = router;
