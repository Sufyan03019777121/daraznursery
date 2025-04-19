// backend/api/authRoutes.js
const express = require('express');
const router = express.Router();
const otpController = require('../controllers/otpController');

router.post('/send-otp', otpController.sendOtp);
router.post('/verify-otp', otpController.verifyOtp);

module.exports = router;


// backend/controllers/otpController.js
const otpGenerator = require('otp-generator');
const twilio = require('twilio');

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

let otpStore = {}; // Use a better method in production (e.g. Redis)

exports.sendOtp = async (req, res) => {
  const { mobile } = req.body;
  const otp = otpGenerator.generate(6, { digits: true, alphabets: false, upperCase: false, specialChars: false });

  otpStore[mobile] = otp;

  try {
    await client.messages.create({
      body: `Your OTP is: ${otp}`,
      from: process.env.TWILIO_PHONE,
      to: `+92${mobile}` // Adjust for international numbers
    });
    res.json({ success: true, message: 'OTP sent successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to send OTP' });
  }
};

exports.verifyOtp = (req, res) => {
  const { mobile, otp } = req.body;
  if (otpStore[mobile] === otp) {
    delete otpStore[mobile];
    // Generate JWT Token (example only)
    const token = `jwt-token-for-${mobile}`;
    res.json({ success: true, token });
  } else {
    res.status(401).json({ success: false, message: 'Invalid OTP' });
  }
};


// backend/server.js (snippet to use routes)
const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use('/api/auth', require('./api/authRoutes'));

app.listen(5000, () => console.log('Server running on port 5000'));
