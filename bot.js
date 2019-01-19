const Discord = require('discord.js');

const client = new Discord.Client();

client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith("!ping")) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
         message.channel.send({embed:embed});
                        }
 });

 
client.login("NTM2MDU1NTkxMDkzNzk2ODY1.DyRMOA.xfvNjHSa96k5yz-QnY2bfBmr4Rc");
