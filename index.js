const dotenv = require("dotenv");
dotenv.config();

// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const token = process.env.TOKEN;

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers] });

/*
guild id: 575842109672652822
channel id: 867088236865257492
*/

const guildId = "575842109672652822";
const channelId = "867088236865257492";

client.once(Events.ClientReady, async readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
    const guild = await client.guilds.fetch(guildId);
    const channel = await guild.channels.fetch(channelId);
    channel.send("hello world");
});

client.on(Events.MessageCreate, msg => {
    if (msg.author.bot) return;

    if (msg.mentions.has(msg.client.user.id)) {
        msg.channel.send(`You can invite me [here](https://discord.com/api/oauth2/authorize?client_id=1183176323242414220&permissions=3072&scope=applications.commands+bot)
You can also view the github: [here](https://github.com/cursorweb/aoc-prizes-bot)`);
    }
});

// Log in to Discord with your client's token
client.login(token);