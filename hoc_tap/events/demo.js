const events = require('events');

const eventEmitter = new events.EventEmitter();

// Tạo hàm để nhận sự kiện
const connectHandler = function connected(){
	console.log('kết nối sự kiện connection');

	eventEmitter.emit('data_receive');
}

// Thêm sự kiện connection và khai báo hàm nhận sự kiện
eventEmitter.on('connection', connectHandler);

// Thêm sự kiện data_receive và khai báo hàm nhận sự kiện
eventEmitter.on('data_receive', function(){
	console.log('kết nối sự kiện data_receive');
})

eventEmitter.emit('connection');

