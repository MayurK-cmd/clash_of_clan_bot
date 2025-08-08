// // const fs = require('fs');
// // const path = require('path');

// // module.exports = async (message) => {
// //   if (message.author.bot) return;

// //   const [commandPath, ...args] = message.content.trim().split(' ');
// //   if (!commandPath.startsWith('/')) return;

// //   const parts = commandPath.slice(1).split('/'); // ['player', 'info']
// //   if (parts.length === 0) return;

// //   const [folder, command] = parts;

// //   try {
// //     const commandFile = require(`../commands/${folder}/${command}`);
// //     await commandFile(message, args);
// //   } catch (err) {
// //     console.error(`Command handler error: ${err}`);
// //     message.reply('Unknown command or failed to load.');
// //   }
// // };


const path = require('path');
const fs = require('fs');

module.exports = async (message) => {
  if (message.author.bot) return;

  const [commandPath, ...args] = message.content.trim().split(' ');
  if (!commandPath.startsWith('/')) return;

  const parts = commandPath.slice(1).split('/'); // e.g., ['player', 'info']

  if (parts.length < 2) {
    return message.reply('❗ Invalid command format. Use `/category/command`, like `/player/info #TAG`');
  }

  const [folder, command] = parts;

  const commandFilePath = path.join(__dirname, `../commands/${folder}/${command}.js`);

  try {
    if (!fs.existsSync(commandFilePath)) {
      return message.reply('❌ Command not found.');
    }

    const commandHandler = require(commandFilePath);
    await commandHandler(message, args);
  } catch (err) {
    console.error(`Command handler error for ${folder}/${command}:`, err);
    message.reply('❌ Error while processing command.');
  }
};

