const User = require('../models/userModel'); // Import your User model
const bcrypt = require('bcryptjs'); // Use bcryptjs for consistency
const jwt = require('jsonwebtoken'); // For generating JWTs

// User registration
exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const user = new User({
      name,
      email,
      password, // Store password directly, it will be hashed in pre-save hook
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Error in registration' });
  }
};

// User login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log('Request body:', req.body);

    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found:', email);
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    console.log('Stored password:', user.password);

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(`Comparing password: ${password} with stored hash.`);
    console.log(`Password match result: ${isMatch}`);

    if (!isMatch) {
      console.log('Password does not match for user:', email);
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token, message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Error in login' });
  }
};
