import mongoose from "mongoose";

const connectDb = async () => {
  const connection = await mongoose
    .connect("mongodb://localhost:27017/carhub", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DATABASE CONNECTED");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDb;