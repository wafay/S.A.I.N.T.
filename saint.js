const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
    console.log(`${client.user.username} is ready to be used.`);
    client.user.setGame(`Securing ${client.guilds.size} server(s) right now. | sb!help`)
});

const prefix = "sb!"

client.login(config.token);

client.on("message", message => {
    if(!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);

    if(message.channel.type === 'dm'){
        message.reply('As much as I would like to help you, I unfortunately will not respond to direct messages.')
        return;
    }

if(command === "ping") {
    // Tests your latency. How long will it take for the guard to catch the ball?
    const embed = new Discord.RichEmbed()
    .setTitle(`🏓 Pong! Here's your latency. ${client.ping.toFixed()} ms`)
    .setColor(0x4286f4)
    message.channel.sendEmbed(embed)
}

if(command === "say") {
    // Makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
}

if(command === "help") {
    message.channel.send("A Discord bot focused on security, programmed entirely using Discord.js. The Secure Automated & Integrated Neutralizing Tool is a bot focused on Discord server security. Imagine making a server for the masses, of course you want to protect it against raiders and other unintended users. Sure, Discord's verification levels work just as well, but those are a little bit easy to circumvent. Of course, many people won't have a phone number, so you might want to avoid using the highest verification level if you want to make your server accessible to anyone. S.A.I.N.T. is designed to provide other means of verification for those new people that join your server. It offers your regular old moderation commands, from a purge to delete messages, to a ban command. But it will even offer a verification tool implemented specifically for new members. It's like a swiss knife for Discord servers! cough, Did I mention that I have a great knack for memes?")
    message.channel.send("While I am functional as a bot, I still am bare bones, and have only two commands as of now, including the one you said just now.")
    message.channel.send("Created by ``[BlackFrank]-(FDB)#1087``")
    message.channel.send("sb!say, sb!help, sb!ping")
}



})
