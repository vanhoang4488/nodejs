var yargs = require('../###thu_vien/node_modules/yargs');

var argv = yargs.argv;

function kiem_tra_snt(n){
	var flag = true;

	if(n < 2) flag = false;
	else if(n == 2) flag = true;
	else if(n % 2 == 0) flag = false;
	else{
		for(var i = 3; i < n-1; i+= 2)
			if(n % i == 0){
				flag = false;
				break;
			}
	}

	return flag;
}

if(typeof argv.n == "undefined"){
	console.log('Ban chua nhap n');
}else{
	if(kiem_tra_snt(argv.n)) console.log('La so nguyen to');
	else console.log('Khong phai so nguyen to');
}
