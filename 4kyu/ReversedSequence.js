const reverseSeq = (n) => {
    let k = []
    for (let i = n; i > 0; i--) {
        k.push(i)
    }
    return k
}


const studentsList = [
    {name: 'vit', age: 16, group: 1},
    {name: 'mar', age: 21, group: 1},
    {name: 'jen', age: 4, group: 1},
    {name: 'vanya', age: 15, group: 2},
    {name: 'igr', age: 19, group: 2},
    {name: 'dima', age: 24, group: 2},
]
const studentsFilter = (students) => {
    return students.reduce((acc, student) => {

        if (student.age >= 17) {
            if (acc[student.group] === undefined) acc[student.group] = []
            acc[student.group] = [student, ...acc[student.group]]
        }
        return acc
    }, {})
}


const toCamelCase = (str) => {
    return str.split(' ').reduce((acc, word, ind) => {
        if (ind === 0) {
            acc += word.toLowerCase()[0].toUpperCase() + word.slice(1,)
        } else {
            acc += word.toLowerCase()[0].toUpperCase() + word.slice(1,)
        }
        return acc
    }, '')
}
console.log(toCamelCase('Hello World asd asd asd'));