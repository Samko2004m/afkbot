const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'normalnyserver123.aternos.me',
    port: 36726,
    username: 'AFKBot',
    auth: 'offline'
  });

  bot.on('spawn', () => {
    console.log('Bot sa pripojil');
  });

  bot.on('error', (err) => {
    console.log('ERROR:', err);
  });

  bot.on('kicked', (reason) => {
    console.log('KICKED:', reason);
  });

  bot.on('end', () => {
    console.log('DISCONNECTED');
  });
}

createBot();
