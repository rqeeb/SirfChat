import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected.");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
