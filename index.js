const mongoose = require("mongose");

/**
 *1: connected to mongo db
 */

mongoose
  .connect("mongodb://localhost/firstDb")
  .then(() => console.log("conected to mongo db"))
  .catch((error) => console.log(error));
