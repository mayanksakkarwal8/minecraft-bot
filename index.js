const mineflayer = require("mineflayer");

const bot = mineflayer.createBot({
  host: 'gorillagang1729.aternos.me', // Replace with your Aternos server IP
  port: 42480,                    // Usually 25565 unless you changed it
  username: 'sheetalbhatt',     // Use your bot's Mojang/Microsoft account
  // password: 'yourpassword',   // Uncomment if needed
  version: false                 // Auto-detects version or specify manually
});

bot.on('spawn', () => {
  console.log("✅ Bot has spawned and is now online!");
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return; // Ignore itself
  bot.chat(`Hi ${username}, you said: ${message}`);
});
