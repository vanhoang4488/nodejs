var storage = require('../###thu_vien/node_modules/node-persist');

storage.initSync({
	dir : "/bai_2/students"
});

//hàm lấy danh sách sinh viên
function getAllStudents(){
	var students = storage.getItemSync('students');

	if(typeof students == "undefined"){
		return [];
	}

	return students;
}

// hàm lấy chi tiết sinh viên
function getStudent(studentId){
	
	var students = getAllStudents();

	var matchedStudent = null;

	for(var i = 0; i < students.length; i++){
		if(students[i].id == studentId){
			matchedStudent = student[i];
			break;
		}
	} 

	return matchedStudent;
}

// hàm thêm một sinh viên
function addStudent(id, fullname){
	var students = getAllStudents();

	students.push({
		id : id,
		fullname : fullname
	});

	storage.setItemSync('students', students);
}

// hàm xóa một sinh viên
function removeStudent(id){
	var students = getAllStudents();

	for(var i = 0; i < students.length; i++){
		if(students[i].id === id){
			students.splice(i, 1);
			break;
		}
	}

	storage.setItemSync('students', students);
}

// hàm sửa một sinh viên
function editStudent(studentId, studentName){
	var students = getAllStudents();

	for(var i = 0; i < students.length; i++){
		if(students[i].id === studentId){
			students[i].fullname = studentName;
		}
	}

	storage.setItemSync('students', students);
}

// hàm hiển thị danh sách sinh viên
function showStudents(){
	var students = getAllStudents();
	students.forEach(function(student){
		console.log('Student: ' + '(' + student.id + ') ' + student.fullname);
	});
}

function clearStudents(){
	storage.clearSync();
}

var yargs = require('../###thu_vien/node_modules/yargs');

var argv = yargs
.command('list', 'get List Student', function(yargs){

})
.command('create', 'Create a Student', function(yargs){
	return yargs.options({
		id : {
			demand : true,
			type : "number"
		},
		fullname : {
			deamnd : true,
			type : "string",
			alias : "name"
		}
	});
})
.command('delete', 'Delete a Student', function(yargs){
	return yargs.options({
		id : {
			demand : true,
			type : "number"
		}
	});
})
.command('edit', 'Edit a Student', function(yargs){
	return yargs.options({
		id : {
			demand : true,
			type : "number"
		},
		fullname : {
			deamnd : true,
			type : "string",
			alias : "name"
		}
	});
})
.command('clear', 'Clear a Students', function(yargs){

})
.help().argv;


// lấy tên action
var action = argv._[0];

if(action === 'list'){
	showStudents();
}else if(action === 'create'){
	addStudent(argv.id, argv.fullname);
	console.log('Add Successfully');
	showStudents();
}else if(action === 'delete'){
	removeStudent(argv.id);
	console.log('Remove Successfully');
	showStudents();
}else if(action === 'edit'){
	editStudent(argv.id, argv.fullname);
	console.log('Edit Successfully');
	showStudents();
}else if(action === 'clear'){
	clearStudents();
}
else{
	console.log('Command not found');
	showStudents();
}
