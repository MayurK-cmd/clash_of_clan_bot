const axios = require('axios');
const { SlashCommandSubcommandBuilder } = require('discord.js');

module.exports =  {
  data: new SlashCommandSubcommandBuilder()
    .setName('heroes')
    .setDescription('Get player heroes')
    .addStringOption(option =>
      option.setName('tag')
        .setDescription('Player tag (e.g., #ABC123)')
        .setRequired(true)
    ),

  async execute(interaction) {
    const playerTag = interaction.options.getString('tag');
    
    
    try {
      const response = await axios.post(`${process.env.BACKEND_URL}/player/player-info`, {
        tag: playerTag
      });

      const data = response.data;
      const heroes = data.heroes.map(h => `${h.name}: Level ${h.level}`).join('\n');
      await interaction.reply(`Heroes for ${data.name}:\n${heroes}`);
    } catch (err) {
      await interaction.reply('Failed to fetch player heroes.');
    }
}
};