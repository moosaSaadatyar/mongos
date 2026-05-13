const mongoose = require("mongose");

/**
 *1: connected to mongo db
 */
mongoose
  .connect("mongodb://localhost/firstDb")
  .then(() => console.log("conected to mongo db"))
  .catch((error) => console.log(error));

/**
 * 2: creat schima and data
 */
const courseSchema = new mongoose.Schema({
  name: String,
  auther: String,
  tages: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

const course = new Course({
  name: "moosa",
  auther: "saadatyar",
  tages: ["angular", "node.js", "npm"],
  isPublished: true,
});
