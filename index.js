const mineflayer = require("mineflayer");

function createBot() {
  const bot = mineflayer.createBot({
    host: 'gorillagang1729.aternos.me', // Aternos IP
    port: 42480,                        // Aternos port
    username: 's.mayank0808@gmail.com',        // ✅ Premium Minecraft email
    password: 'anita2175',          // ✅ Your account password
    auth: 'microsoft',                 // ✅ If using Microsoft login
    version: '1.21.6'                  // ✅ Must match your Aternos version
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
