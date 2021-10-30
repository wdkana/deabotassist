const qrcode = require("qrcode-terminal");
const { Client } = require("whatsapp-web.js");
const validate_message = require("./helper/validate_message");
const bot_run_emoji = require("./helper/bot_run_emoji");
const client = new Client();

client.on("qr", (qr) => {
  try {
    qrcode.generate(qr, { small: true });
  } catch (e) {
    console.log(e);
  }
});

client.on("ready", () => {
  try {
    const isConnected = bot_run_emoji(20);
    console.log(isConnected);
    console.log("Dea assistent bot is now running!");
  } catch (error) {
    console.log(e);
  }
});

client.on("message", (message) => {
  try {
    console.log("pesan baru => ", message.body);
    const request = validate_message(message.body);
    !request ? null : message.reply(request);
  } catch (error) {
    console.log(e);
  }
});

client.initialize();
