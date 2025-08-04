const express = require("express");
const router = express.Router();
const clanController = require("../controllers/clanController");

router.post("/clan-info", clanController.getClanInfo);

module.exports = router;