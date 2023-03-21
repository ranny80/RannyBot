module.exports = {
    name: "unmute",
    description: "Unmutes a member from the server",
    execute(message, args) 
    {
        if (message.member.hasPermission("MANAGE_ROLES")) {
            const member = message.mentions.users.first();
            if (member)
            {
                // Unmutes the member
                member.roles.remove("Muted");
                message.channel.send("User has been unmuted");
            }
            else
            {
                message.channel.send("Please specify a member.");
            }
        }
        else 
        {
            message.channel.send("You do not have permission to unmute that members.");
        }
    }
}
