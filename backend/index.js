const express = require("express");
const mainRouter  = require("./routes/index");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const connectDB = async () => {
    try {
      await mongoose.connect("mongodb://localhost:27017/paytm", {
        useNewUrlParser: true,
      });
      console.log("Connected to MongoDB successfully");
    } catch (err) {
      console.error("Failed to connect to MongoDB", err);
      process.exit(1);
    }
  };
  

  connectDB();
connectDB();
app.use(cors());
app.use(express.json());
app.use("/api/v1" , mainRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


module.exports = app;
 
