const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

const createArr = ((Arr, student, index) => {
    let sum = 0;
    let objeto = {
        name: student,
        average: grades[index].map((grade) => sum += grade)[4]/5,
    }
    Arr.push(objeto);
    return Arr;
});

function studentAverage() {
  return students.reduce(createArr, [])
}

console.log(studentAverage());

