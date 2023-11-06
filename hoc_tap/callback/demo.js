const fs = require('fs');

//Đọc file bằng hàm readfileSync
console.log('------- Sync --------');
const filedata = fs.readFileSync('document.txt');
console.log(filedata.toString());
console.log('kết thúc chương trinh');

//Đọc file bắt đồng bộ
console.log('------- Not Sync --------');
//Callback function
const callbackReadFile = function(err, filedata){
	if(err) return console.err(err);
	console.log(filedata.toString());
}

fs.readFile('document.txt', callbackReadFile);
console.log('Kết thúc chương trình');
