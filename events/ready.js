exports.run = async (client) => {
	console.log(`${client.user.username} has Started with ${client.guilds.size} Servers with ${client.users.size} Users`);
	await client.user.setActivity('@Kisaragi | Booted !');
	await userStatus(client);
	await client.statsHook.send(`**${client.user.username} has Started**\nwith ${client.guilds.size} Servers with ${client.users.size} Users`);
};

async function userStatus(client) {
	const randomStatus = [
		"@Kisaragi | Just Kidding ~",
		"@Kisaragi | Ye~s? ♥ Fufufu♪",
		`@Kisaragi | Ecchi Teitoku !`
	];
	setInterval(async () => {
	    await client.user.setActivity(randomStatus[Math.floor(Math.random() * randomStatus.length)]);
	}, 60000);
};