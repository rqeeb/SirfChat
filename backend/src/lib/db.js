import mongoose from "mongoose";
import {ENV} from "./env.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV.MONGO_URI);
    console.log("DB Connected.");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
