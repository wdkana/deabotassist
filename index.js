const qrcode = require("qrcode-terminal");
const { Client } = require("whatsapp-web.js");
const validate_message = require("./helper/validate_message");
const bot_run_emoji = require("./helper/bot_run_emoji");
const client = new Client();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  const isConnected = bot_run_emoji(20);
  console.log(isConnected);
  console.log("Dea assistent bot is now running!");
});

client.on("message", (message) => {
  console.log("pesan baru => ", message.body);
  const request = validate_message(message.body);
  !request ? null : message.reply(request);
});

client.initialize();
