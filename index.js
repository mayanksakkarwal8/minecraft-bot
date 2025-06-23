const mineflayer = require("mineflayer");

function createBot() {
  const bot = mineflayer.createBot({
    host: 'gorillagang1729.aternos.me',
    port: 42480,
    username: 'sheetalbhatt',
    version: false
  });

  bot.on('spawn', () => {
    console.log("✅ Bot has spawned and is now online!");
  });

  bot.on('chat', (username, message) => {
    if (username === bot.username) return;
    bot.chat(`Hi ${username}, you said: ${message}`);
  });

  bot.on('end', () => {
    console.log("❌ Bot was disconnected. Reconnecting in 10 seconds...");
    setTimeout(createBot, 10000);
  });

  bot.on('error', (err) => {
    console.log("⚠️ Bot error:", err.message);
  });
}

createBot();
