const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
var prefix = "-";
var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) })
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES///////////
////ALPHA / ALPHA CODES / ALPHA CODES//////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES//////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES//////////
///////////////////////////////////////////////////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES//////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////ALPHA / ALPHA CODES / ALPHA CODES///////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES///////////////////////////


client.on('ready',  () => {
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~Team #Plus Bot~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(`Logged in as  * [ "  Team #Plus Bot " ] servers! [ " ${client.guilds.size} " ] Users! [ " ${client.users.size} " ]`); 

});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES///////////
////ALPHA / ALPHA CODES / ALPHA CODES//////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES//////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES//////////
///////////////////////////////////////////////////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES//////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////ALPHA / ALPHA CODES / ALPHA CODES///////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES///////////////////////////





/*شكر الاونر*//**/

client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
      guild.owner.send(embed)
});

/*بلاييق البوت*/

client.on('ready', function(){
    client.user.setStatus("online");
    var ms = 100000 ;
    var setGame = [`Games Section Bot`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`https://www.twitch.tv/peery13`);
    }, ms);100000

});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES///////////
////ALPHA / ALPHA CODES / ALPHA CODES//////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES//////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES//////////
///////////////////////////////////////////////////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES//////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////ALPHA / ALPHA CODES / ALPHA CODES///////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////ALPHA / ALPHA CODES / ALPHA CODES///////////////////////////

/*سرفرات البوت*/
   
client.on('message', message => {
if(message.content == ("!prefix")) {
         if(!message.author.id === '444182215476248576') return;
var gimg;
var gname;
var gmemb;
var gbots;
var groles;
var servers = client.guilds;
servers.forEach((g)=>{
gname = g.name;
gimg = g.iconURL;
gmemb = g.members.size;
gbots = g.members.filter(m=>m.bot).size;
groles = g.roles.map(r=> {return r.name});
let serv = new Discord.RichEmbed()
.setAuthor(gname,gimg)
.setThumbnail(gimg)
.addField('Server bots',gbots)
.addField('Server Member Count',gmemb = g.members.size)
.setColor('RANDOM')
message.channel.send(`
Server Name : **${gname}**
Server MemberCount : **${gmemb} **
        `);
      message.channel.sendEmbed(serv);
}) 
}
});  

/*الهلب*/ 

//『${prefix}』
client.on("message", message => {
    if (message.content === ("!help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)

		 
		 
           ***General Commands***
   **
   『${prefix}id/ معلومات عن حسابك』
   『${prefix}2id / معلومات عن الحساب في صوره』
   『${prefix}embed/ يكرر كلامك بمبيد』
   『${prefix}sug/ الإقتراحات』
   『${prefix}roles/ يطلع الرتب』
   『${prefix}roles-n يعطيك الرتب بالترتيب』
   『${prefix}server/ معلومات عن السيرفر』
   『${prefix}image/ يعرض صوره السيرفر』
   『${prefix}avatar/ يعرض صورتك او صوره شخص』
   『${prefix}dt/يعرض لك الوقت والتاريخ واليوم 』
   『${prefix}invites/ يعرض كم ضياف 』
   『${prefix}topinvite/ لعرض قائمه فيها كل واحد ضاف كم 』
   『${prefix}zalgo / يزخرف لك شي تكتب لازم يكون انقليزي مو عربي』
   『${prefix}draw / يكرر الكلام في صوره』
   『${prefix}say / يكرر الكلام لتكتب』
   『${prefix}translate / يترجم』
   『${prefix}botserver / يحطيك سرفرات البوت بترتيب』
   『${prefix}short / اختصار الروابط』
   『${prefix}calculate / حاسبة』
   **
           ***Administrative Commands***
   **
   『${prefix}color 50 /انشاء 50 لون』
   『${prefix}color 100/انشاء 100 لون』
   『${prefix}color 140/انشاء 140 لوم』
   『${prefix}ct /انشاء روم كتابي』
   『${prefix}cv /انشاء روم صوتي』
   『${prefix}delet / مسح روم』
   『${prefix}bc /لإرسال رسالة جماعية』
   『${prefix}clear / لمسح الشات』
   『${prefix}addrole / لراية اوامر اعطاء الرتبه او حدفها للعضو』
**
           ***Bot Commands***
  **
   『${prefix}ping/ يعرض لك سرعه اتصال البوت』
   『${prefix}uptime/ يعرض لك صار للبوت كم شغال』
   『${prefix}support/ سيرفر الدعم القني و المساعده』
   『${prefix}invite/ اضافه البوت』
   『${prefix}mb/ حاله الاعضاء』
   『${prefix}bot/ معلومات عن البوت』
   **
           ***Games Commands***
    **       
   『${prefix}لعبه صراحه/صراحه』
   『${prefix}لعبه خواطر/خواطر 』
   『${prefix}يعطيك ذكر من الاذكار/ اذكار』
   『${prefix}يخيرك بين شي وشي / لو خيروك』
   『${prefix}يعطيك عقاب و لازم تنفذه/ عقاب』
   『${prefix}لعبه اسئله / كت』
   『${prefix}للعب لعبه قلب العمله/ عمله』
   『${prefix}للعب لعبه عل تعلم/ هل تعلم』
   『${prefix}للعب لعبه مريم/ مريم』
   『${prefix}يعطيك كلمات حب/ حب』
   **
           ***profile Commands***
    
   『soon』
    
             _ _---------------- _ _
  BOT By: | <@535979538551930891> |-| <@535595703209295923> |-| <@530325227461148682> |

   **

   `)
   message.author.sendEmbed(embed)
   
   }
   });  
client.on('message', message => {
     if (message.content === ("!help")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " تــــم ارســالك في الخــاص")
  message.channel.sendEmbed(embed);
    }
});

/*زخرفت الاسم*/

 const zalgo = require('zalgolize');
 client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith("!")) return;

  let command = message.content.split(" ")[0];
  command = command.slice("!");

  let args = message.content.split(" ").slice(1);
if (command == "zalgo") {
    let say = new Discord.RichEmbed()
    .setTitle('Text emboss :');
  message.reply(`\n ${zalgo(args.join(' '))}`);
  }

});

/*اقتراح*/

client.on('message' , message => {
        if (message.author.bot) return;
        if (message.content.startsWith("!sug")) {
        if (!message.channel.guild) return;
        let args = message.content.split(" ").slice(1).join(" ");
        client.channels.get("536052293129207818").send(
            "\n" + "**" + " ● Suggested By : " + "**" +
            "\n" + "**" + "» " + message.author.tag + "**" +
            "\n" + "**" + " ● Suggest : " + "**" +
            "\n" + "**" + args + "**")
        
        let embed = new Discord.RichEmbed()
             .setAuthor(message.author.username, message.author.avatarURL)
             .setDescription(' Suggested Sent')
             .setThumbnail(message.author.avatarURL)
             .setFooter("Adidas")
        message.channel.send(embed);
}
 });

/*مسح*/

client.on("message", message => {
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith("!مسح")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "Plus Bot"
        }
      }}).then(msg => {msg.delete(3000)});
                          }
});
client.on("message", message => {
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "Plus Bot"
        }
      }}).then(msg => {msg.delete(100000)});
                          }
});

/*بنق*/

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

/*عدد الدعوات*/

client.on('message', message => {
             if (!message.channel.guild) return;
      if (message.author.bot) return;

  if (!message.content.startsWith("!")) return;
  let command = message.content.split(" ")[0];
  command = command.slice("!");
  let args = message.content.split(" ").slice(1);
  
  if (command === 'invites') {
    message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
    return message.reply(`**${inviteCount}: عدد الاشخاص الذي دعوتهم هو**`)

});
}});

/*معلونات البوت*/
 
 client.on('message', message => {
     if (message.content === ("!bot")) {
         if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("#8650a7")
  .addField("** :white_check_mark: Servers: **" , client.guilds.size)
  .addField("** :white_check_mark: Users: **" , client.users.size)
  .addField("** :white_check_mark: Channels: **" , client.channels.size)
    .addField("** :rocket: Ping **" , Date.now() - message.createdTimestamp)
    .setTimestamp()
  message.channel.sendEmbed(embed);
    }
});

/*اي دي*/

client.on('message', message => {
      if (message.content.startsWith("!id")) {
      if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات :x:`);
      message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#8650a7")
    .setAuthor(message.author.username, message.author.avatarURL) 
.addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
.addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
.addField(': عدد الدعوات', inviteCount,false)
    message.channel.sendEmbed(id);
})
}
     });

/*امبد-ساي*/

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith("!")) return;

  let command = message.content.split(" ")[0];
  command = command.slice("!");

  let args = message.content.split(" ").slice(1);

// -say
  if (command === "!say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
    .setDescription(args.join("  "))
    .setColor(0x06DF00)
    message.channel.sendEmbed(say);
    message.delete();
  }
  


});
    const dot = new Discord.Client();
client.on('message', message => {
    
    if (message.content === "Games Section") {
        setInterval(function(){
        message.edit('**T**')    
        message.edit('**Te**')    
        message.edit('**Tea**')
        message.edit('**Team**')
        message.edit('**Team P**')
        message.edit('**Team Pl**')
        message.edit('**Team Plu*')
        message.edit('**Team Plus**')
        message.edit('**Team Plus **')
        message.edit('**Team Plus B**')
        message.edit('**Team Plus Bo**')
        message.edit('**Team Plus Bot**')
        message.edit('**Team Plus Bot **')
        message.edit('**Team Plus Bot ..**')
        }, 1000)
    }
    
})

/*بردكاست*/

client.on('message', message => {
              if(!message.channel.guild) return;

    if(message.content.startsWith('!bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + "!");
    let copy = "Games Section";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('Server', message.guild.name)
       .addField('Sender', message.author.username)
       .addField('Message', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**اوكي شكرأ لك**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });
	
	
	client.login("NTM2MDU1NTkxMDkzNzk2ODY1.DyRIPg.ngOjFVg4uU2QgiY5ug3hRRp-5Kc");