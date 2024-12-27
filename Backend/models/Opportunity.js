const mongoose = require('mongoose');

// Define the Opportunity Schema
const opportunitySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    category: {
      type: String,
      enum: ['Internship', 'Scholarship', 'Hackathon', 'Competition', 'Conference', 'Collaboration'],
      required: [true, 'Category is required'],
    },
    organization: {
      type: String,
      required: [true, 'Organization is required'],
    },
    organization_info:{
      type: String,
    },
    location: {
      type: String,
      default: 'Remote', // Default location is remote
    },
    eligibility: {
      type: String,
    },
    applicationDeadline: {
      type: Date,
      required: [true, 'Application deadline is required'],
    },
    link: {
      type: String,
      required: [true, 'Link to apply or details is required'],
      validate: {
        validator: function (v) {
          return /^(ftp|http|https):\/\/[^ "]+$/.test(v); // URL validation
        },
        message: 'Please provide a valid URL',
      },
    },
    postedDate: {
      type: Date,
      default: Date.now, // Automatically sets the posted date to the current date
    },
    tags: {
      type: [String], // Array of tags (e.g., ['AI', 'ML', 'Full-stack Development'])
      default: [],
    },
    status: {
      type: String,
      enum: ['Active', 'Closed'], // Active or Closed opportunities
      default: 'Active',
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create the Opportunity Model
const Opportunity = mongoose.model('Opportunity', opportunitySchema);

module.exports = Opportunity;
