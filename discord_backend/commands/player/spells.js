const axios = require('axios');
const { SlashCommandSubcommandBuilder } = require('discord.js');

module.exports =  {
  data: new SlashCommandSubcommandBuilder()
    .setName('spells')
    .setDescription('Get player spells')
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
      const spells = data.spells.map(s => `${s.name}: Level ${s.level}`).join('\n');
      await interaction.reply(`Spells for ${data.name}:\n${spells}`);
    } catch (err) {
      await interaction.reply('Failed to fetch player spells.');
    }
}
};