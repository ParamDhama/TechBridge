const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
// Import Routes
const internshipRoutes = require('./routes/internshipRoutes');
const scholarshipRoutes = require('./routes/scholarshipRoutes');
const hackathonRoutes = require('./routes/hackathonRoutes');
const competitionRoutes = require('./routes/competitionRoutes');
const conferenceRoutes = require('./routes/conferenceRoutes');
const collaborationRoutes = require('./routes/collaborationRoutes');
const loginRoutes  = require("./routes/authRoutes");

const connectDB = require('./config/db');

const app = express();

// CORS configuration for allowing credentials (cookies, auth headers) and specific origin
const corsOptions = {
  origin: 'https://techbridgepage.netlify.app',  // Specify the frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'],  // Allowed headers
  credentials: true  
};

const PORT = process.env.PORT || 3000;

//Database connection
connectDB();

// Middleware
app.use(cors(corsOptions));  
app.use(express.json());  
app.use(cookieParser());  

// Routes
app.use('/api/auth', authRoutes);

// Basic home route
app.get('/', (req, res) => {
  res.send('Welcome to the Tech Opportunities API');
});

app.use('/api/login', loginRoutes);
app.use('/api/internships', internshipRoutes);
app.use('/api/scholarships', scholarshipRoutes);
app.use('/api/hackathons', hackathonRoutes);
app.use('/api/competitions', competitionRoutes);
app.use('/api/conferences', conferenceRoutes);
app.use('/api/collaborations', collaborationRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

