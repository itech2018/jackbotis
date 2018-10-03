const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  if(!args[2]) return message.reply("Please ask a full thing to the 8ball");
  let replies = ["Yes.","no","No chance"];
  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(1).join(" ");
  
  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#FF9900")
  .addField("Question",question)
  .addFiled("Answer",replies[result]);
  
  message.channel.send(ballembed);
}


module.exports.help = {
  name: "8ball"
}
