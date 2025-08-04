const express = require("express");
const router = express.Router();
const playerController = require("../controllers/playerController");

// Use POST method to accept raw JSON with player tag
router.post("/player-info", playerController.getPlayerInfo);

module.exports = router;
