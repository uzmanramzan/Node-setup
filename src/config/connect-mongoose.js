const mongoose = require("mongoose");
(async () => {
  try {
    console.log("db connected===");
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("db connected");
  } catch (error) {
    console.log(error.message);
  }
})();
