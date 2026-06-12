const bot = mineflayer.createBot({
  host: 'normalnyserver123.aternos.me',
  port: 36726,
  username: 'AFKBot',
  auth: 'offline',
  version: '26.1.2'
});

  console.log("BOT VYTVORENY");

  bot.on('login', () => {
    console.log('LOGIN OK');
  });

  bot.on('spawn', () => {
    console.log('BOT SA PRIPOJIL');
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
