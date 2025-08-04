const axios = require("axios");
require("dotenv").config();

const coc = axios.create({
  baseURL: "https://api.clashofclans.com/v1",
  headers: {
    'Authorization': `Bearer ${process.env.CLASH_API_TOKEN}`,  // Use the API key from .env
    'Accept': 'application/json',
  }
});

module.exports = coc;
