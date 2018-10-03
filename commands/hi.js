exports.run = (client, message, args) => {
    message.channel.send("Hi").catch(console.error);
}
