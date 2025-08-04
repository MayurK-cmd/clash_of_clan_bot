require("dotenv").config();
const express = require("express");
const app = express();

const playerRoutes = require("./routes/playerRoutes");
const clanRoutes = require("./routes/clanRoutes");
//const warLeagueRoutes = require("./routes/warLeagueRoutes"); // Assuming you have a war
// (Add clanRoutes, warLeagueRoutes similarly)

app.use(express.json());

app.use("/api/player", playerRoutes);
app.use("/api/clan", clanRoutes);
//app.use("/api/war-league", warLeagueRoutes);

app.get("/", (req, res) => {
  res.send("Clash of Clans API Backend");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
