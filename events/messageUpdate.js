exports.run = async (client, oldMessage, newMessage) => {
	if (!oldMessage.content || !newMessage.content) return;
	if (oldMessage.guild.channels.exists('name', 'admin-log')) {
		const adminLog = oldMessage.guild.channels.find('name', 'admin-log');
	    if (!adminLog.permissionsFor(oldMessage.guild.me).has('SEND_MESSAGES') || !adminLog.permissionsFor(oldMessage.guild.me).has('EMBED_LINKS')) return;
        await adminLog.send({
			embed: {
				color: 0xc0c0c0,
				author: {
					name: `Sent by ${oldMessage.author.tag}`,
					icon_url: oldMessage.author.avatarURL
				 },
				fields: [{
					name: "\:wastebasket: Message Before Edit",
					value: oldMessage.content
					}, {
					name: "\:incoming_envelope: Message After Edit",
					value: newMessage.content
					}
				],
				timestamp: new Date(),
				footer: {
					icon_url: client.user.avatarURL,
					text: oldMessage.guild.name
				}
			}
	    });
	};
};