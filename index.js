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
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  author: String,
  tags: {
    type: Array,
    validate: {
      validator: function (v) {
       return v && v.length > 0;
      },
    },
    message: 'aad list need one tage'
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: {
    type: Number,
    required: function () {
      return this.isPublished;
    },
    min: 99,
    max: 255,
  },
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "exp",
    author: "meta verse",
    tags: [null],
    isPublished: false,
    price: 119,
  });

  try {
    const result = await course.save();
    console.log(result);
  } catch (exp) {
    for (const key in exp.error) {
      let element = exp.error[key];
      console.log(element);
    }
  }
      
      
      
      
  /**
   * 3: save data
   */
}
createCourse();

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
  // const courseDb2 = await Course.find()
  //   .or([{ author: "mohamadi" }, { name: "moosa" }])
  //   .and([{ author: "mohamadi" }, { name: "moosa" }]);

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

  // const regularDb = await Course.find({ author: /di$/ });

  /**
   * .count() => return count result
   * skip(2) => dont show 2 data
   * countDocuments()  retern total document
   */

  const pageNaumber = 2;
  const pageSize = 10;
  const result48 = await Course.find()
    .limit(pageSize)
    .sort({ name: 1 })
    .skip((pagenumber - 1) * pageSize)
    .countDocuments();

  console.log(result48);
  getCoursess();
}

async function updateCourse(id) {
  const course = await Course.findById(id);
  if (!course) return;

  //one way
  // course.isPublished = false;
  // course.author = " hasan hasani";

  //towe way
  course.set({
    isPublished: false,
    author: "hasan hasani",
  });
  const resoult = await course.save();
  console.log("resoult", resoult);
  updateCourse("6a059d1f12472c55130eae74");
}

async function updateCourseById(id) {
  const course = await Course.findById(id);
  if (!course) return;

  //one way
  // course.isPublished = false;
  // course.author = " hasan hasani";

  //towe way
  course.set({
    isPublished: false,
    author: "hasan hasani",
  });
  const resoult = await course.save();
  console.log("resoult", resoult);
}

async function updateFirst(id) {
  const course = await Course.updateOne(
    { _id: id },
    {
      $set: {
        isPublished: false,
        author: "hasan hasi",
      },
    },
  );

  const course2 = await Course.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        isPublished: false,
        author: "hasan 258",
      },
    },
    { new: true },
  );

  console.log("resoult", course2);
  updateFirst("6a059d1f12472c55130eae74");
}

const removeCourse = async (id) => {
  // const resulte = await Course.deleteOne({ _id: id });
  // const resulte = await Course.findByIdAndDelete({ _id: id });
  const resulte = await Course.deleteMany({ isPublished: true });

  console.log(resulte);
  removeCourse("6a059d1f12472c55130eae74");
};
