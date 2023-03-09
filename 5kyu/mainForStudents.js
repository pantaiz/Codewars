const students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
        friends: ["Alex", "Nick", "John", "Helen", "Ann"]
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        id: 5,
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        id: 6,
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

const superUser = {
    name: "Bob",
    age: 23,
    friends: [
        {
            id: 1,
            name: "Ann",
            age: 22,
            isMarried: true,
            scores: 85
        },
        {
            id: 2,
            name: "Alex",
            age: 21,
            isMarried: true,
            scores: 90,
        },
        {
            id: 4,
            name: "John",
            age: 19,
            isMarried: false,
            scores: 100
        }
    ]
}


//1. Создайте полную (глубокая) копию объекта user
let deepCopyUser = {...user};
console.log(deepCopyUser)

//2. Создайте полную (глубокая) копию объекта superUser
let deepCopySuperUser = {...superUser, friends: superUser.friends.map(el => ({...el}))};

deepCopySuperUser.friends[2].id = 7123
console.log(deepCopySuperUser)
console.log(superUser)
// Внесите  следующие изменения в объект superUser:
//3.Удалите объект с id=1 из массива  friends
let superUserCorrect1 = {...superUser, friends: superUser.friends.filter(el => (el.id != 1))};
console.log(superUserCorrect1)

//4. поменяйте объекту с id=2 из массива  friends значение св-ва name на "Donald"
let superUserCorrect2 = {
    ...superUser,
    friends: superUser.friends.map(el => el.id === 2 ? {...el, name: "Donald"} : {...el})
};
console.log(superUserCorrect2)

//5. добавьте в список друзей нового друга
const newFriend = {
    id: 5,
    name: "Nick",
    age: 27,
    isMarried: false,
    scores: 99
}
let superUserCorrect3 = {
    ...superUser,
    friends: [...superUser.friends.map(el => ({...el})), newFriend]
};

console.log(superUserCorrect3)
//6. Полная (глубокая) копия массива students (map)
let deepCopyStudents;
deepCopyStudents = students.map(el => ({...el}))
//deepCopyStudents[0].name=1213213
//console.log(deepCopyStudents)
console.log(students)
//
//7. Отсортируйте КОПИЮ массива deepCopyStudents по алфавиту (sort)
let sortedByName = students.map(el => ({...el})).sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedByName);

//8. Отсортируйте deepCopyStudents по успеваемости (лучший идёт первым)(sort)
let sortedByScores = deepCopyStudents.sort((a, b) => a.scores - b.scores);
console.log(sortedByScores);

//9. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = sortedByScores.filter(el => el.scores >= 100);
console.log(bestStudents)

//10. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = deepCopyStudents.splice(-3,);
console.log(topStudents)
console.log(deepCopyStudents)

//11. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
let newDeepCopyStudents = [...deepCopyStudents, ...topStudents];
console.log(newDeepCopyStudents)


//12. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = students.filter(el => !el.isMarried);
console.log(notMarriedStudents)

//13. Сформируйте массив имён студентов (map)
let studentsNames = students.map(el => el.name);
console.log(studentsNames)

//14. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = students.map(el => (
    {
        ...el,
        isStudent: true
    }
));
console.log(trueStudents)

//15. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = students.map(el => el.name === "Nick" ? {...el, isMarried: true} : {...el});
console.log(studentsWithMarriedNick)

// И поднимаем руку!!!!

//16. Найдите студента с самым высоким баллом не используя методы массивов и Math.max()*
let bestStudent
let acc = 0
for (let i = 0; i < students.length; i++) {
    if (acc < students[i].scores) {
        bestStudent = students[i]
        acc = students[i].scores
    }

}

console.log(bestStudent)

//17. Найдите сумму баллов всех студентов (reduce)
let scoresSum = students.reduce((acc, el) => acc + el.scores, 0);
console.log(scoresSum)


// NB!!! Все преобразования выполняем иммьютабельно, если не сказано иное


// NB!!! Далее все преобразования выполняем не модифицируя исходный массив
// Вывод результатов - в консоль


// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = students => students.map(el => ({...el, friends: students.map(el=>el.name).filter(name => name !== el.name)}))

//addFriends(students)
console.log(addFriends(students));


// 15. Д.З.: Напишите функцию getBestStudents, которая принимает параметром
// массив students  и количество лучших студентов, которое надо получить в
// новом массиве. Если второго параметра нет, то по умолчанию возвращает лучшего студента
// getBestStudents(students) => {name: "Nick", age: 20, isMarried: false, scores: 120}
// getBestStudents(students, 3) => [{...}, {...}, {...}]
// getBestStudents(students, 10) => [{}, {}, ...., {}, null, null, null, null ]

const getBestStudents = (students, n) => {

    const sorted = [...students.sort((a, b) => a.scores - b.scores).reverse()]

    if (!n) {
        return sorted[0]
    } else if (students.length >= n) {
        return sorted.slice(0, n)
    } else {
        for (let i = 0; i < n - students.length; i++) {
            sorted.push(null)
        }
        return sorted
    }


}
///сдлеать с вырезанием юез сорта
console.log(getBestStudents(students, 10))




