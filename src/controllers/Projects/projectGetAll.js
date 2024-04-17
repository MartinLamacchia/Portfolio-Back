const Project = require("../../models/Projects");

const getAllProjects = async (req, res) => {
  try {
    const allProjects = await Project.find();

    res.status(200).json(allProjects);
  } catch (error) {
    console.log("Error al querer traer los proyectos de la base de datos");
  }
};

module.exports = getAllProjects;
