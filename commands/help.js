module.exports = {
    name: "help",
    description: "List of commands for RannyBot",
    execute(message, args, Discord)
    {
        const embed = new Discord.MessageEmbed()
        .setColor("#2478b7")
        .addFields(
            {name: "r!kick", value: "Kicks a member out of the server"},
            {name: "r!ban", value: "Bans a member from the server"},
            {name: "r!mute", value: "Mutes a member from the server"},
            {name: "r!unmute", value: "Unmutes a member from the server"}
        );

        // Send the embedded message
        message.channel.send(embed);
    }
}
