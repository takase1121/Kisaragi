// It all starts with
const Discord = require('discord.js');
const fs = require('fs');

class Destroyer extends Discord.Client {
    constructor(settings) {
		super(settings);
		
		this.commands = new Map();
		this.config = new require('./kisaragi-conf.json');
		this.statsHook = new Discord.WebhookClient(this.config.webhookID, this.config.webhookToken);
	};
};

const Kisaragi = new Destroyer({
	messageCacheMaxSize: 200,
	messageCacheLifetime: 380,
	messageSweepInterval: 420,	
	fetchAllMembers: true,
	disableEveryone: true,	
    disabledEvents: ["TYPING_START", "USER_NOTE_UPDATE", "RELATIONSHIP_ADD", "RELATIONSHIP_REMOVE"]
});

fs.readdir(`./commands/`, (error, files) => {
	if (error) {
		console.log(error);
		Kisaragi.statsHook.send('**Admiral! Kisaragi Errored**\n' + error);
	};
	for (const x of files) {
        Kisaragi.commands.set(x.split(".")[0], require(`./commands/${x}`))
	};
});
// Events
fs.readdir('./events/', async (error, files) => {
	if (error) {
		console.log(error);
		Kisaragi.statsHook.send('**Admiral! Kisaragi Errored**\n' + error);
	};
	for (const x of files) {
	    Kisaragi.on(x.split(".")[0], async (...args) => await require(`./events/${x}`).run(Kisaragi, ...args));
	};
});
// login Yay
Kisaragi.login(Kisaragi.config.token);