const mineflayer = require("mineflayer");

function createBot() {
  const bot = mineflayer.createBot({
    host: 'gorillagang1729.aternos.me',
    port: 42480,
    username: process.env.MC_EMAIL,     // Get from environment
    password: process.env.MC_PASSWORD,  // Get from environment
    auth: 'microsoft',
    version: '1.21.6'
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
process.env.PRISMARINE_NO_WARNINGS = '1';
createBot();
