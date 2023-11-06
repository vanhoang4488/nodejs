var yargs = require('../###thu_vien/node_modules/yargs');

var get_argv = yargs.command('get', 'Get List Student', function(yargs){

	return yargs.options({
		username : { // cấu hình cho name
			demand : true,
			type : 'string',
			alias : 'us',
			default: 'Hoang'
		},
		email : { // Cấu hình cho email
			demand : true,
			type : 'string',
			alias : 'em',
			default : 'hoangie2k62@gmail.com'
		}
	});

}).help().argv;

console.log(get_argv);