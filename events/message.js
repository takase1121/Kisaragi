exports.run = async (client, msg) => {
	if (msg.author.bot || msg.channel.type === "dm" || msg.channel.type === "group") return;
	if (!msg.channel.permissionsFor(msg.guild.me).has("SEND_MESSAGES") && !msg.channel.permissionsFor(msg.guild.me).has("EMBED_LINKS")) return;
	if (msg.content.match(new RegExp(`^<@!?${client.user.id}>`))) {
		await msg.channel.send('Kisaragi Reporting In Fufufu♪. This bot is personal hence no Help is Provided :P')
	};
	if (!msg.content.startsWith(client.config.prefix)) return;
	const command = msg.content.toLowerCase().split(' ')[0].slice(client.config.prefix.length);
    try {
		if (client.commands.has(command)) {
		    await client.commands.get(command).run(client, msg);
		};
    } catch (error) {
    	console.error(error);
    	await client.statsHook.send('**Admiral! Kisaragi Errored**\n' + error);
    };
}