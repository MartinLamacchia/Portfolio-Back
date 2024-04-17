const Project = require("../../models/Projects");
const dbProjects = require("../../dbProjects.json");

const uploadProjects = async (req, res) => {
  try {
    await Project.deleteMany();

    await Project.insertMany(dbProjects);

    res.status(200).json({
      message: "Los proyectos fueron guardados en la base de datos con exito",
    });
  } catch (error) {
    console.log("Error al querer guardar en la base de datos los proyectos");
  }
};

module.exports = uploadProjects;
