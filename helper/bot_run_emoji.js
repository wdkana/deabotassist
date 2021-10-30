const bot_run_emoji = (n) => {
  let output = "",
    i,
    x,
    y;
  for (i = 1; i <= n; i++) {
    for (x = 1; x <= n - i; x++) {
      output += " ";
    }
    for (y = 0; y < 2 * i - 1; y++) {
      output += "🤖";
    }
    output += "\n";
  }
  return output;
};

module.exports = bot_run_emoji