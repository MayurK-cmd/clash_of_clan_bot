const coc = require("../services/cocService");

exports.getClanInfo = async (req, res) => {
  try {
    const { tag } = req.body; 
    if (!tag) {
      return res.status(400).json({ error: "Clan tag is required" });
    }
    const clanTag = encodeURIComponent(tag);
    const response = await coc.get(`/clans/${clanTag}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.response?.data || error.message });
  }
};
