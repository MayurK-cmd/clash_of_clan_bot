const axios = require('axios');
const { SlashCommandSubcommandBuilder } = require('discord.js');

module.exports =  {
  data: new SlashCommandSubcommandBuilder()
    .setName('achievements')
    .setDescription('Get achievements of a player')
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
          const achievements = data.achievements.map(a => `${a.name}: ${a.value}/${a.target}`).join('\n');
          await interaction.reply(`Achievements for ${data.name}:\n${achievements}\nCompletion Stars: ${data.achievements.stars}\nAchievment Info: ${data.achievements.info}`);// more detailed add info, stars and village
        } catch (err) {
          await interaction.reply('Failed to fetch player achievements.');
        }
}
};