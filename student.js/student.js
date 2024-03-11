const fullname="Jakub Uliszewski"
const student_id = 42900

function getStudentFullName() {
    return fullname;

}

function getStudentId() {
    return student_id;

}
module.exports = {
    getStudentFullName,
    getStudentId;

}
console.log("My name is ${getStudentFullName()}. My student ID is ${getStudentId()}");