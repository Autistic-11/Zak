// ----- Web Server to keep bot alive (Render needs this) -----
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bot is running!");
});

app.listen(3000, () => {
  console.log("Express server running on port 3000");
});

// ----- Discord Bot -----
const { Client, GatewayIntentBits, Events } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// ready event اسمها clientReady في v14+
client.once(Events.ClientReady, () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// ping → pong
client.on(Events.MessageCreate, (msg) => {
  if (msg.author.bot) return;
  if (msg.content === "ping") {
    msg.reply("pong!");
  }
});

// login
client.login(process.env.TOKEN);
