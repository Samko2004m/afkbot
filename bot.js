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

    setInterval(() => {
      bot.setControlState('jump', true);

      setTimeout(() => {
        bot.setControlState('jump', false);
      }, 500);

      bot.look(Math.random() * Math.PI * 2, 0, true);
    }, 30000);
  });

  bot.on('kicked', (reason) => {
    console.log('Kick:', reason);
  });

  bot.on('end', () => {
    console.log('Reconnect za 10s...');
    setTimeout(createBot, 10000);
  });

  bot.on('error', console.log);
}

createBot();
