module.exports = {
    name: "kick",
    description: "Kicks a member out of the server",
    execute(message, args) {
        if (message.member.hasPermission("KICK_MEMBERS")) {
            const member = message.mentions.users.first();
            if (member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                
                // Kicks the member
                memberTarget.kick();
                message.channel.send("User has been kicked");
            } else {
                message.channel.send("Please specify a member.");
            }
        } else {
            message.channel.send("You do not have permission to kick that members.");
        }
    }
};
