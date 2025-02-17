import mongoose from "mongoose";

const transcationSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  credits: {
    type: Number,
    required: true,
  },
  date: {
    type: Number,
    default: Date.now,
  },
  plan: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  payment: {
    type: String,
    default: "false",
  },
});

const transcationModel =
  mongoose.models.transcation ||
  mongoose.model("transcation", transcationSchema);

export default transcationModel;
