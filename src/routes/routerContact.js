const routesContact = require("express").Router();
const { newContact } = require("../controllers/contactPost");

routesContact.post("/message", newContact);

module.exports = routesContact;
