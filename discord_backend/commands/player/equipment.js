const axios = require('axios');
const { SlashCommandSubcommandBuilder } = require('discord.js');

module.exports =  {
  data: new SlashCommandSubcommandBuilder()
    .setName('equipment')
    .setDescription('Get hero equipment of a player')
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
      const equipment = data.heroEquipment.map(e => `${e.name}: Level ${e.level}`).join('\n');
      await interaction.reply(`Hero Equipment for ${data.name}:\n${equipment}`);
    } catch (err) {
      await interaction.reply('Failed to fetch player hero equipment.');
    }
}
};