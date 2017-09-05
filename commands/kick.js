const config = require('../config.json');

exports.run = (client, message, [mention, ...reason]) => {
	const modRole = config.modRole;
	if(!modRole)
		return message.reply(`No mod role exists! Please add this role, ${modRole}`)
	
	if (!message.member.roles.has(modRole.id))
    	return message.reply("You can't use this command.");
    if (message.mentions.users.size === 0) {
    	return message.reply("Please mention a user to kick");
    if (!message.guild.me.hasPermission("KICK_MEMBERS"))
   		return message.reply("I need the KICK_MEMBERS permission!");

   	const kickMember = message.mentions.members.first();

   	kickMember.kick(reason.join(" ")).then(member => {
    	message.reply(`${member.user.username} was succesfully kicked.`);
    });

};