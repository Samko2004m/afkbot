console.log("NOVA VERZIA BOTA");

const bot = mineflayer.createBot({
  host: 'normalnyserver123.aternos.me',
  username: 'AFKBot',
  auth: 'offline'
});

  console.log("BOT VYTVORENY");

  bot.on('login', () => {
    console.log('LOGIN OK');
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
    console.log('ERROR:', err.message);
  });

  bot.on('kicked', (reason) => {
    console.log('KICKED:', reason);
  });

  bot.on('end', (reason) => {
    console.log('DISCONNECTED:', reason);
    setTimeout(createBot, 10000);
  });
}

createBot();
