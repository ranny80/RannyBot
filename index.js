const Discord = require("discord.js");

const fs = require("fs");

require("dotenv").config();

const client = new Discord.Client();

const prefix = process.env.PREFIX;

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
};

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setPresence({ 
        activity: { 
            name: "r!help",
            type: "PLAYING"
        }, 
        status: "online" })
        .catch(console.error);
});

client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).slice(/ +/);
    const command = args.toLowerCase();

    // Put any commands you want
    if (command === "help") {
        client.commands.get("help").execute(message, args, Discord);
    } else if (command === "kick") {
        client.commands.get("kick").execute(message, args);
    } else if (command === "ban") {
        client.commands.get("ban").execute(message, args);
    } else if (command === "mute") {
        client.commands.get("mute").execute(message, args);
    } else if (command === "unmute") {
        client.commands.get("unmute").execute(message, args);
    }
});

client.login(process.env.TOKEN);
