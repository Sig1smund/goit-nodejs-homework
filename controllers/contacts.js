const Contact = require("../models/contact");
// const crypto = require("node:crypto");
const { ctrlWrapper } = require("../utils");

const getAll = async (req, res) => {
  const result = await Contact.find();
  res.json(result);
};

// const getById = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await contacts.getContactById(contactId);
//   if (!result) {
//     throw HttpError(404, "Not Found");
//   }
//   return res.status(200).json(result);
// };

// const addContact = async (req, res) => {
//   const id = crypto.randomBytes(16).toString("hex");
//   const result = await contacts.addContact(id, req.body);
//   res.status(201).json(result);
// };

// const deleteContact = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await contacts.removeContact(contactId);
//   if (!result) throw HttpError(400, "Not found");
//   res.status(200).json({ message: "Contact successfully deleted" });
// };

// const updateContact = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await contacts.updateContact(contactId, req.body);
//   if (!result) throw HttpError(400, "Not found");
//   res.status(200).json(...result);
//   console.log(result);
// };

module.exports = {
  getAll: ctrlWrapper(getAll),
  //   getById: ctrlWrapper(getById),
  //   addContact: ctrlWrapper(addContact),
  //   deleteContact: ctrlWrapper(deleteContact),
  //   updateContact: ctrlWrapper(updateContact),
};
