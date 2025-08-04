const coc = require("../services/cocService");

exports.getPlayerInfo = async (req, res) => {
  try {
    const { tag } = req.body;
    if (!tag) {
      return res.status(400).json({ error: "Player tag is required" });
    }

    const playerTag = encodeURIComponent(tag);
    const response = await coc.get(`/players/${playerTag}`);
    res.json(response.data);
  } catch (error) {
    console.error('API request failed:', error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data || error.message });
  }
};


