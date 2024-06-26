const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://dithnim63:5T9kcvxrzxUGeNAg@cluster0.usthexj.mongodb.net/TODO-app?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Mongo connected :D");
  } catch (error) {
    alert(error);
    process.exit(1);
  }
};

module.exports = connectDB;
