var crypto = require('../###thu_vien/node_modules/crypto-js');

var message = crypto.AES.
encrypt('Nội dung cần mã hóa', 'wholaughs').toString();

console.log("------ Chuỗi mã hóa -----")
console.log(message);

// Lấy danh sách byte đã mã hóa
var bytes = crypto.AES.decrypt(message, 'wholaughs');

// Chuyển sang chuỗi gốc
var message_decode = bytes.toString(crypto.enc.Utf8);

console.log("------ Chuỗi giải mã --------")
console.log(message_decode);


