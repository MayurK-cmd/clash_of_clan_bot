const fs = require('fs');
const path = require('path');
const { SlashCommandBuilder } = require('discord.js');

const subcommandFiles = fs.readdirSync(path.join(__dirname, 'player')).filter(file => file.endsWith('.js'));

const data = new SlashCommandBuilder()
  .setName('player')
  .setDescription('Player-related commands');

const subcommandHandlers = {};

for (const file of subcommandFiles) {
  const sub = require(`./player/${file}`);

  if (!sub.data) {
    console.warn(`⚠️  Skipping ${file}: missing data export`);
    continue;
  }

  if (typeof sub.data.toJSON !== 'function') {
    console.warn(`⚠️  Skipping ${file}: data is not a SlashCommandSubcommandBuilder`);
    continue;
  }

  data.addSubcommand(sub.data);
  subcommandHandlers[sub.data.name] = sub.execute;
}

module.exports = {
  data,
  async execute(interaction) {
    const sub = interaction.options.getSubcommand();
    if (subcommandHandlers[sub]) {
      await subcommandHandlers[sub](interaction);
    } else {
      await interaction.reply({ content: 'Subcommand not found.', ephemeral: true });
    }
  }
};
