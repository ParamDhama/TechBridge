// config/config.js
require('dotenv').config();

module.exports = {
  adminUsername: process.env.ADMIN_USERNAME,
  adminPassword: process.env.ADMIN_PASSWORD,
  cookieSecret: process.env.COOKIE_SECRET
};
