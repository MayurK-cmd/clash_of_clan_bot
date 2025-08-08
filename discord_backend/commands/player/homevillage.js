const axios = require('axios');
const { SlashCommandSubcommandBuilder } = require('discord.js');
const { data } = require('./info');

module.exports =  {
  data: new SlashCommandSubcommandBuilder()
    .setName('homevillage')
    .setDescription('Get home village stats of a player')
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
    await interaction.reply(`Home Village Stats for ${data.name}:\nTown Hall Level: ${data.townHallLevel}\nTrophies: ${data.trophies}\nAttack Wins: ${data.attackWins}\nDefense Wins: ${data.defenseWins}\nLeague: ${data.league.name}`);
   } catch (err) {
    await interaction.reply('Failed to fetch home village stats.');
  }
}
};