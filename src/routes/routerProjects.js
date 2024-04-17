const routesProjects = require("express").Router();
const uploadProjects = require("../controllers/Projects/projectPost");

routesProjects.post("/", uploadProjects);
routesProjects.get("/");

module.exports = routesProjects;
