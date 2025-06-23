const mineflayer = require("mineflayer");

// Optional: suppress internal prismarine warnings
process.env.PRISMARINE_NO_WARNINGS = '1';

const bot = mineflayer.createBot({
  host: 'gorillagang1729.aternos.me',
  port: 42480,
  username: process.env.MC_EMAIL,     // Render env variable
  password: process.env.MC_PASSWORD,  // Render env variable
  auth: 'microsoft',
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
  console.log("❌ Bot was disconnected.");
});

bot.on('error', (err) => {
  console.log("⚠️ Bot error:", err.message);
});
