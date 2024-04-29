const mongoose = require("mongoose");

// storing the db on mongo atlas
const DB =
  "mongodb+srv://pawarsubham438:Q0zNQFYp9x3b1NM2@cluster1.a7icvya.mongodb.net/nodestack?retryWrites=true&w=majority";

// mongoose.connect('mongodb://127.0.0.1/habit_tracker');

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection successful!");
  })
  .catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
