const axios = require('axios');
const {SlashCommandSubcommandBuilder} = require('discord.js');

module.exports =  {
  data: new SlashCommandSubcommandBuilder()
    .setName('troops')
    .setDescription('Get player troops')
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
      const troops = data.troops.map(t => `${t.name}: Level ${t.level}`).join('\n');
      await interaction.reply(`Troops for ${data.name}:\n${troops}`);
    } catch (err) {
      await interaction.reply('Failed to fetch player troops.');
    }
}
};