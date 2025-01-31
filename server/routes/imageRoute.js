import express from "express";
import { generateImage } from "../controllers/imageCont.js";
import { userAuth } from "../middleware/auth.js";

const imageRouter = express.Router();
imageRouter.post("/generate", userAuth, generateImage);

export default imageRouter;
