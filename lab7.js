let student = {
id:"12345",
name:"John Doe",
hm:30,
midterm:30,
final:30,
}
var total = student.hm + student.midterm + student.final;
let grade =
    (total >= 0 && total <= 40) ? "F" :
    (total >= 41 && total <= 60) ? "D" :
    (total >= 61 && total <= 80) ? "C" :
    (total >= 81 && total <= 90) ? "B" :
    (total >= 91 && total <= 100) ? "A" :
    "Invalid total score";
console.log(grade);
