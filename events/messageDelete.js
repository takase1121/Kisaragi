exports.run = async (client, message) => {
	if (message.guild.channels.exists('name', 'admin-log')) {
	const adminLog = message.guild.channels.find('name', 'admin-log');
    if (!message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES") && !message.channel.permissionsFor(message.guild.me).has("EMBED_LINKS")) return;
		const msgContent = message.content || "No Content Fufu ~";
		if (!message.attachments.firstKey()) {
			await adminLog.send({
			embed: {
				color: 0xc0c0c0,
				author: {
					name: `Sent by ${message.author.tag}`,
					icon_url: message.author.avatarURL
				},
				fields: [{
					    name: "\:wastebasket: Message Deleted",
					    value: msgContent
					}
				],
				timestamp: new Date(),
				footer: {
					icon_url: client.user.avatarURL,
					text: message.guild.name
				    }
			    }
	        });
		} else {
		    const atchContent = message.attachments.first().url || "Can't Fetch Attachment Url Fufu";
		    const atchName = message.attachments.first().filename || "Unavailable";
            await adminLog.send({
			    embed: {
				    color: 0xc0c0c0,
				    author: {
					    name: `Sent by ${message.author.tag}`,
					    icon_url: message.author.avatarURL
				    },
				    fields: [{
					        name: "\:wastebasket: Message Deleted",
					        value: msgContent
					    }, {
				    	    name: "\:wastebasket: Attachment Name",
					        value: atchName
				        }, {
				    	    name: "\:wastebasket: Attachment URL",
					        value: atchContent
				        }
				    ],
				    timestamp: new Date(),
				    footer: {
					    icon_url: client.user.avatarURL,
					    text: message.guild.name
				    }
			    }
	        });
	    };
    };
};