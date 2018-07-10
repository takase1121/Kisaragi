# Kisaragi
A Bot with Command Handler with the same Logic of Haruna, with "message delete / edit tracker" but uses Discord.js

## Usage
> Download or Fork it, your choice.

> Create your Bot App on Discord Developers.

> Edit the Config File. Supply the needed details there, then remove the (example).

> Create a Channel named "admin-log", then if you don't want the bot having Administrator then make sure the channel overrides is set for Kisaragi Correctly. She needs at least this two "Send Messages" and "Embed Links".

> If you are lazy to set a Channel Override, then just give it Administrator.

> Boot it up and see it in action.

## This Framework is extendable, hence you can use it as a base to add more commands.

Here is an example.
Add a file named "whatever-you-want-it".js without the "" on /commands of your workspace, then copy paste the code below.
The "NAME" of the file will be the command name so if you want a command status, then name it status.js & etc.

This Command will not run unless the ID will match the one that invoked the command.
```js
exports.run = async (client, msg) {
  if (msg.author.id !== '12345678901234567890')
    return await msg.channel.send(`You Don't own this bot ${msg.author.tag}`);
  // 12345678901234567890 is for example, "your ID".
  await msg.channel.send(`\`\`\`asciidoc\n
Servers     :: ${client.guilds.size}
Users       :: ${client.users.size}
Memory      :: ${Math.round(process.memoryUsage().rss / 1024 / 1024)} MB\`\`\``);
};
```


