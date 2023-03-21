const ms = require("ms");

module.exports = {
    name: "mute",
    description: "Mutes a member from the server",
    execute(message, args)
    {
        if (message.member.hasPermission("MANAGE_ROLES"))
        {
            const member = message.mentions.users.first();
            if (member)
            {
                if (!args[1])
                {
                    // Mutes the member
                    member.roles.add("Muted");
                    message.channel.send("User has been muted");
                }
                // Mutes the member with timed
                member.roles.add("Muted");
                message.channel.send(`User has been muted for ${ms(ms(args[1]))}`);

                setTimeout(function()
                {
                    // Unmutes the member with timed
                    member.roles.remove("Muted");
                    message.channel.send("User has been unmuted");
                }, ms(args[1]));
            } 
            else
            {
                message.channel.send("Please specify a member.");
            }
        }
        else
        {
            message.channel.send("You do not have permission to mute that members.");
        }
    }
}
