const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
client.on("messageCreate", (message) => {
  //   console.log(message.content);
  if (message.author.bot) return;
  if (message.content.startsWith("creat")) {
    const url = message.content.split("create")[1];
    return message.reply({
      content: "Generating short ID for" + url,
    });
  }
  message.reply({
    content: "Hii from Bot!!",
  });
});
client.on("interactionCreate", (interaction) => {
  //   console.log(interaction);
  interaction.reply("Pong!!");
});
client.login(
  "MTIwMTMwNjI3NTMwMTA0NDMxNA.GeeEAx.F8pAjlkyh_dtyIpNH1VoUcNotNK5ljvK4FRa9M"
);
