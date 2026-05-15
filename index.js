const mongoose = require("mongoose");

/**
 * 1: connect to mongo db
 */
mongoose
  .connect("mongodb://localhost/firstDb")
  .then(() => console.log("connected to mongo db"))
  .catch((error) => console.log(error));

/**
 * 2: create schema and data
 */
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "donia",
    author: "mohamadi",
    tags: ["angular", "js", "npm"],
    isPublished: true,
  });

  /**
   * 3: save data
   */
  const result = await course.save();
  console.log(result);
  createCourse();
}

/**
 *4: get data from mongo db
 */
async function getCoursess() {
  const courseDB = await Course.find({ author: "saadatyar" })
    .limit(10) // return 10 resolt
    .sort({ name: 1 }) //sort up:1 doen:-1;
    .select({ name: 1, tages: 1 }); //just return this data

  /**
   * 5 use or and
   */
  const courseDb2 = await Course.find()
    .or([{ author: "mohamadi" }, { name: "moosa" }])
    .and([{ author: "mohamadi" }, { name: "moosa" }]);

/**
 * Regular Expressions (Regex) in MongoDB
 *
 * starts with:
 * /^name/
 *
 * ends with:
 * /name$/
 *
 * case insensitive:
 * /name$/i
 *
 * contains:
 * /.*name.*/
  
 */

   
  const regularDb = await Course.find({ author: /di$/ });

  
  console.log(regularDb);
}

getCoursess();
