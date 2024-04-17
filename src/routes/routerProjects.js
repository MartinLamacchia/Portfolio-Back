const routesProjects = require("express").Router();
const getAllProjects = require("../controllers/Projects/projectGetAll");
const uploadProjects = require("../controllers/Projects/projectPost");

routesProjects.post("/", uploadProjects);
routesProjects.get("/", getAllProjects);

module.exports = routesProjects;
