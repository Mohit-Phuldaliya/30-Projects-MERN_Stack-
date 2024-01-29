const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "creatURL",
    description: "Create a new short URL",
  },
];
const rest = new REST({ version: "10" }).setToken(
  "MTIwMTMwNjI3NTMwMTA0NDMxNA.GeeEAx.F8pAjlkyh_dtyIpNH1VoUcNotNK5ljvK4FRa9M"
);
(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands("1201306275301044314"), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
