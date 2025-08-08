const axios =require('axios');  

module.exports = async (message, args) => {
    const clanTag = args[0];
    if (!clanTag) return message.reply('Please provide a clan tag (e.g., !clan #TAG)');
    
    try {
      const response = await axios.post(`${process.env.BACKEND_URL}/clan/clan-info`, {
        tag: clanTag
      });

      const data = response.data;
      message.reply(`Clan: ${data.name}\nLevel: ${data.clanLevel}\nMembers: ${data.members}`);
    } catch (err) {
      message.reply('Failed to fetch clan info.');
    }
};
