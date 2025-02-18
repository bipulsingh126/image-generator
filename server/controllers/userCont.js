import userModel from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import razorpay from 'razorpay';
import transcationModel from '../models/transcationModel.js';

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: 'All fields are required' });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    const userData = {
      name,
      email,
      password: passwordHash,
    };
    const newUser = new userModel(userData);
    const user = await newUser.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({
      success: true,
      message: 'User created successfully',
      token,
      user: { name: user.name },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });
      return res.status(200).json({
        success: true,
        message: 'Login successful',
        token,
        user: { name: user.name },
      });
    } else {
      return res
        .status(400)
        .json({ success: false, message: 'Invalid email or password' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const userCredits = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await userModel.findById(userId);
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: 'User not found' });
    }
    return res.status(200).json({
      success: true,
      message: 'User credits fetched successfully',
      credits: user.creditsBalance,
      user: { name: user.name },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const roazorpayInstance = new razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export const paymentRazorpay = async (req, res) => {
  try {
    const { userId, planId } = req.body;
    const userData = await userModel.findById(userId);
    if (!userId || !planId) {
      return res
        .status(400)
        .json({ success: false, message: 'Missing Details' });
    }
    let credits, plan, amount, date;
    switch (planId) {
      case 'Basic':
        credits = 100;
        plan = 'Basic';
        amount = 10;
        break;
      case 'Advanced':
        credits = 500;
        plan = 'Advanced';
        amount = 50;
        break;
      case 'Business':
        credits = 5000;
        plan = 'Business';
        amount = 250;
        break;

      default:
        return res
          .status(400)
          .json({ success: false, message: 'plan not found' });
    }
    date = Date.now();
    const transcationData = {
      userId,
      plan,
      amount,
      credits,
      date,
    };
    const newTranscation = await transcationModel.create(transcationData);
    const options = {
      amount: amount * 100,
      currency: process.env.CURRENCY,
      receipt: newTranscation._id,
    };
    roazorpayInstance.orders.create(options, (error, order) => {
      if (error) {
        console.log(error);
        return res.status(400).json({ success: false, message: error.message });
      }
      res.status(200).json({ success: true, order });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const verifySignature = async (req, res) => {
  try {
    const { razorpay_order_id } = req.body;
    const orderInfo = await roazorpayInstance.orders.fetch(razorpay_order_id);
    if (orderInfo.status === 'paid') {
      const transcationData = await transcationModel.findById(
        orderInfo.receipt,
      );
      if (transcationData.payment) {
        return res.status(400).json({
          success: false,
          message: 'Payment already done',
        });
      }
      const userData = await userModel.findById(transcationData.userId);
      const creditBlanace = userData.creditsBalance + transcationData.credits;
      await userModel.findByIdAndUpdate(userData._id, {
        creditsBalance: creditBlanace,
      });
      await transcationModel.findByIdAndUpdate(transcationData._id, { payment: true });
      res.status(200).json({
        success: true,
        message: 'Payment successful',
        credits: creditBlanace,
      });
    } else {
      res.status(400).json({ success: false, message: 'Payment failed' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
