const server = require("./src/server");
const mongoose = require("mongoose");
const port = process.env.PORT;
const mongodb = process.env.MONGODB;

mongoose
  .connect(mongodb)
  .then(() => {
    console.log("Connected to the MongoDB");

    server.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("Error to connected to the MongoDB", error);
  });
