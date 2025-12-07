const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

// 👇 حط توكن البوت هنا مباشرة
const TOKEN = "حط_توكن_البوت_هنا";

client.once("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.content === "menu") {
    message.reply("البوت شغال ✅");
  }
});

client.login(TOKEN);
