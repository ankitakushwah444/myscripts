
//  Destructuring 

//let firstName = ["ankita", "anshu", "ananya", "anku", "prisha", "ninad"]
// let studOne = firstName[0]
// studTwo = firstName[1]
// studThree = firstName[2]
// studFour = firstName[3]

// console.log(studentOne)
// console.log(studentTwo)
// console.log(studentThree)
// console.log(studentFour)


// let [studentOne,studentTwo,studentThree,studentFour,studentFive] = firstNames
// console.log(studentOne)
// console.log(studentTwo)
// console.log(studentThree)
// console.log(studentFour)
// console.log(studentFive)

//-------------------------------------------------------->


let age = 0
let body = {
    students: 
    [
        {
            student1: "student1", 
            age: 1
        },
        {
            student2 : "studnt2",
            age : 2
        }, 
        {
            student3 : "student3",
            age : 3
        },
        {
            student4 : "student4",
            age : 4
        },
        {
            student5 : "student5",
            age : 5
        }]
}

body.students.forEach(function(el)
{
    console.log(el.student1)
    console.log(el.age)
})


let [studentOne,studentTwo,studentThree,studentFour,studentFive]=  body.students
console.log(studentOne)
console.log(studentTwo)
console.log(studentThree)
console.log(studentFour)
console.log(studentFive)



//-------------------------------------------------------->
console.log("//--------------------------------------------------------")



// let studentOne = {
//     firstName:"chinmay",
//     age:23,
//     languages:['marathi','hindi'] 

// }

// // let {propertyName:aliasName,propertyName:aliasName} = obj
// // let [firstName,secondName] = obj


// let {firstName:fn,age:a,languages:lang} = studentOne
// console.log(fn)
// console.log(a)
// console.log(lang)


// let studentName = studentOne['firstName']
// let studentAge = studentOne['age']
// console.log(studentName,studentAge)


let sky = {
    starCount:7,
    moon: "fullmoon",
    cloud:"blue",
    universe:["solar system", "galaxies", "milkyway"]

}

//let {propertyName : aliasName, propertyName:aliasName} = Obj 

let {starCount: sc, moon: m, cloud: c, universe: u} = sky
console.log(sc)
console.log(m)
console.log(c)
console.log(u)

console.log("//--------------------------------------------------------")


//-------------------------------------------------------->



//spread operator 
//rest operarion


let bcu = [22,45,56,23,98,75,65]
function add(a,b,c,d,){
    console.log(a+b+c+d)
}
add(...bcu)


console.log("//--------------------------------------------------------")


// let numbers = [33,44,66,77,88,99,100]
// function add(arr){
//     console.log(arr[0]+arr[1]+arr[2]+arr[3])
// }

// add(numbers)

let bcu1 = [22,45,56,23,98,87,31]
function add(arr){
    console.log(arr[0]+arr[1]+arr[2]+arr[3])
}
add(bcu1)

console.log("//--------------------------------------------------------")



//------------------------->

// let numbersaa = [33,44,66,77,88,99,100]
// function add(...a){
//     return a.reduce(function(acc,el){
//         return acc + el
//     })
// }
// let ffff = add(1,2,213,13,12,312,321,3,213,213,21,321,3,123,12,312,3,21,312)
// console.log(ffff)


let cu1 = [33,44,66,77,88,99,100]
function add(...u)
{
    return u.reduce(function(acc, el)
    {
        return acc + el
    })
}

let gh = add(1,2,213,13,12,312,321,3,213,213,21,321,3,123,12,312,3,21,312)
console.log(gh)













