var student_string = '{"name" : "Nguye Van Hoang", "age" : "26"}';

var student_obj = JSON.parse(student_string);

console.log('--STRING--');
console.log("Name: " + student_obj.name);
console.log("Age: " + student_obj.age);

console.log('--OBJECT--');
console.log(JSON.stringify(student_obj));

//Lưu file 
var student_file = JSON.stringify(student_string);
var persist = require('../###thu_vien/node_modules/node-persist'); 
persist.initSync();
persist.setItemSync('student', student_file);

//đọc file
var content_from_file = persist.getItemSync('student');
console.log(content_from_file);