const axios = require('axios');
const { SlashCommandSubcommandBuilder } = require('discord.js');

module.exports =  {
  data: new SlashCommandSubcommandBuilder()
    .setName('builderbase')
    .setDescription('Get builder base stats of a player')
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
      await interaction.reply(`Builder Base Stats for ${data.name}:\nBuilder Hall Level: ${data.builderHallLevel}\nBuilder Base Trophies: ${data.builderBaseTrophies}\nBest Builder Base Trophies: ${data.bestBuilderBaseTrophies}\nLegaue: ${data.builderBaseLeague.name}`);
    } catch (err) {
      await interaction.reply('Failed to fetch builder base stats.');
    }
}
};