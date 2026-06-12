const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'normalnyserver123.aternos.me',
    port: 36726,
    username: 'AFKBot',
    auth: 'offline'
 version: false
  });

  bot.on('spawn', () => {
    console.log('Bot sa pripojil');

    setInterval(() => {
      bot.setControlState('jump', true);

      setTimeout(() => {
        bot.setControlState('jump', false);
      }, 500);

      bot.look(Math.random() * Math.PI * 2, 0, true);
    }, 30000);
  });

  bot.on('error', (err) => {
    console.log('ERROR:', err);
  });

  bot.on('kicked', (reason) => {
    console.log('KICKED:', reason);
  });

  bot.on('end', () => {
    console.log('DISCONNECTED');
    setTimeout(createBot, 10000);
  });
}

createBot();
