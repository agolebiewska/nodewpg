

const femaleStudents = ['Nana', 'Yelena', 'Prab', 'Jessica', 'Reyhaneh'];
const maleStudents = ['Tri', 'Renato', 'Michal', 'Anton', 'Hugo'];
const students = femaleStudents.concat(maleStudents);

console.log(students.sort());

// Each femaleStudents name using numeric indexes - ???
femaleStudents.forEach(function(femaleStudents, index) {
    console.log('index', index); 
    console.log(femaleStudents);
  });
// Each femaleStudents name using numeric indexes
  console.log(femaleStudents[0], femaleStudents[1], femaleStudents[2], femaleStudents[3], femaleStudents[4]);

  // Each maleStudents name using while

while (maleStudents.length > 0) {
    console.log(maleStudents[maleStudents.length -1]);
    maleStudents.length -=1; }

 // Each students name using for

 for (let index = 0; index < students.length -1; index++){
    console.log(students[index]);
}