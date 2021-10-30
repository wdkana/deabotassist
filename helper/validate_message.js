const validate_message = (msg) => {
  if (
    msg == "kang" ||
    msg == "Kang" ||
    msg == "akang" ||
    msg == "Akang" ||
    msg == "Sayang" ||
    msg == "sayang"
  ) {
    return "Sebentar sayang, nanti akang bales yah. Wait wait...";
  } else if (msg == "p" || msg == "ping" || msg == "P" || msg == "Ping") {
    return "Halo, saya bot assistentnya Dea Afrizal. Nanti akan saya sampaikan pesan kamu ya, tunggu dea bales. Thank u!";
  } else if (
    msg == "zal" ||
    msg == "Zal" ||
    msg == "jal" ||
    msg == "Jal" ||
    msg == "al" ||
    msg == "Al"
  ) {
    return "Uy, kunaon bray? ini yang bales bot assistentnya al. jadi kalem ya tunggu si al cek wa!";
  } else {
    return false;
  }
};

module.exports = validate_message