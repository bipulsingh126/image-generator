import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoute.js";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
await connectDB();

app.use("/api/user", userRouter);
app.use("/api/image",imageRouter);

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
