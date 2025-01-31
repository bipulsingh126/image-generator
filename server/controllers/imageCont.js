import userModel from "../models/userModel.js";
import FormData from "form-data";
import axios from "axios";

export const generateImage = async (req, res) => {
  try {
    const { prompt, userId } = req.body;
    const user = await userModel.findById(userId);
    if (!user || !prompt) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }
    if (user.creditsBalance === 0 || user.creditsBalance < 0) {
      return res.status(400).json({
        success: false,
        message: "Insufficient credits",
        credits: user.creditsBalance,
      });
    }
    const formData = new FormData();
    formData.append("prompt", prompt);
    const { data } = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formData,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
        },
        responseType: "arraybuffer",
      }
    );
    const base64Image = Buffer.from(data, "binary").toString("base64");
    const imageUrl = `data:image/png;base64,${base64Image}`;
    await userModel.findByIdAndUpdate(userId, {
      creditsBalance: user.creditsBalance - 1,
    });
    res.status(200).json({
      success: true,
      message: "Image generated successfully",
      imageUrl,
      credits: user.creditsBalance - 1,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
