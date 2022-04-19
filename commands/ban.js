module.exports = {
    name: "ban",
    description: "Bans a member from the server",
    execute(message, args) {
        if (message.member.hasPermission("BAN_MEMBERS")) {
            const member = message.mentions.users.first();
            if (member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                
                // Ban the member
                memberTarget.ban();
                message.channel.send("User has been banned");
            } else {
                message.channel.send("Please specify a member.");
            }
        } else {
            message.channel.send("You do not have permission to ban that members.");
        }
    }
}
