exports.run = (client, msg) => {
	const heartBeat = `\`\`\`Last 3 Pings:\n${client.pings[0]}ms\n${client.pings[1]}ms\n${client.pings[2]}ms\`\`\``;
	msg.channel.send(`\:left_right_arrow: Websocket Latency: **${client.ping}ms**\n${heartBeat}`)
};