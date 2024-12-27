const jwt = require('jsonwebtoken');
const { adminUsername, adminPassword, cookieSecret } = require('../config/config');

// Admin login controller
exports.login = (req, res) => {
  const { username, password } = req.body;

  // Check if the username and password are correct for admin
  if (username === adminUsername && password === adminPassword) {
    // Create a JWT token with admin role
    const token = jwt.sign({ userName: username, role: 'admin' }, cookieSecret, { expiresIn: '1h' });

    // Send the token in the response
    return res.status(200).json({ message: 'Login successful', token });
  }

  // If credentials are wrong
  return res.status(401).json({ message: 'Invalid credentials' });
};
// Middleware to check if the user is authenticated
exports.isAuthenticated = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(403).json({ message: 'Access denied. Please log in.' });
  }

  // Verify token
  jwt.verify(token, cookieSecret, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Access denied. Invalid token.' });
    }

    // Attach decoded user info to the request object
    req.user = decoded; // { userName, role }
    next();
  });
};

// Middleware for role-based authorization
exports.isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    return next(); // Allow access
  }
  return res.status(403).json({ message: 'Access denied. Admins only.' });
};

// Example of another middleware for role 'user'
exports.isUser = (req, res, next) => {
  if (req.user && req.user.role === 'user') {
    return next(); // Allow access
  }
  return res.status(403).json({ message: 'Access denied. Users only.' });
};
