const routes = require("express").Router();
const routesContact = require("./routerContact");

routes.use("/contact", routesContact);

module.exports = routes;
