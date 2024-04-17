const routes = require("express").Router();
const routesContact = require("./routerContact");
const routesProjects = require("./routerProjects");

routes.use("/contact", routesContact);
routes.use("/projects", routesProjects);

module.exports = routes;
