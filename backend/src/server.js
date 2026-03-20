import express from "express";
import cookieParser from "cookie-parser";
import { ENV } from "./lib/env.js";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";

const PORT = ENV.PORT || 3000;
const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", ENV.CLIENT_URL],
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
  connectDB();
});
