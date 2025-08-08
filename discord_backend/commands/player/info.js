const { SlashCommandSubcommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
  data: new SlashCommandSubcommandBuilder()
    .setName('info')
    .setDescription('Get basic player info')
    .addStringOption(option =>
      option.setName('tag')
        .setDescription('Player tag (e.g., #ABC123)')
        .setRequired(true)
    ),

  async execute(interaction) {
    const playerTag = interaction.options.getString('tag');

    try {
      const response = await axios.post(`${process.env.BACKEND_URL}/player/player-info`, { tag: playerTag });
      const data = response.data;

      await interaction.reply(`Player: ${data.name}\nTown Hall: ${data.townHallLevel}\nClan: ${data.clan?.name || 'No Clan'}\nWar Stars: ${data.warStars}\nBest Trophies: ${data.bestTrophies}`);
    } catch (err) {
      await interaction.reply('Failed to fetch player info.');
    }
  }
};
