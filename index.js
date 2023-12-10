const dotenv = require("dotenv");
dotenv.config();


// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const token = process.env.TOKEN;

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
    // console.log(readyClient.guilds.cache.get("575842109672652822").channels.cache.get("867088236865257492").send("hello"))
});

client.on(Events.MessageCreate, msg => {
    if (msg.author.bot) return;

    msg.channel.send("hello, world!");
});

// Log in to Discord with your client's token
client.login(token);