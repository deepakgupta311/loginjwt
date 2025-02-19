const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Register Controller
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ userId: newUser._id }, 'secretkey', { expiresIn: '1h' });

    res.status(201).json({ message: 'Profile created', token });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Login Controller
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });

    res.status(200).json({ message: 'Welcome', token, userProfile: user });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = { registerUser, loginUser };
