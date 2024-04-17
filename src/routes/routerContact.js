const routesContact = require("express").Router();
const { newContact } = require("../controllers/Contact/contactPost");

routesContact.post("/message", newContact);

module.exports = routesContact;
