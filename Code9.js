

let fn = "ankita "
let ananya = {
Age : 99,
fn : "ananya",
display:function()
{
console.log(`my name is ${this.fn}`)
}
}



// let ankita = {
//         Age:77, 
//         firstName : "anku",
//         displayName: function()
//         {
//             console.log(`my name is ${this.firstName}`)
//         }
//     }


// console.log(amol.age)
// console.log(amol.firstName)
// amol.displayName()


console.log(ananya.Age)
console.log(ananya.fn)
ananya.display()


console.log('|<----------------------------------------------------------------------->|')



// let lastName = new String("Chinmay")
// let deshpande = "deshpande"
// console.log(lastName.toUpperCase())
// console.log(lastName.length)


// let names = ["chinmay","poorva","abhisha","ram"]
// let lastName = new Array(5)
// lastName[0] = "deshpande"
// lastName[1] = "vyas"
// lastName[2] = "burande"
// lastName[3] = "dani"
// lastName[4] = "hh"
// console.log(lastName)


let lastName = new String("universe")
console.log(lastName.toUpperCase())
console.log(lastName.length)



let names = ["ankita", "anshu", "ananya", "anku"]
let garr = new Array(9)
 garr[0] = "kushwah"
 garr[1] = "tiwari"
 garr[2] = "sengar"
 garr[3] = "rathore"
 garr[4] = "tomar"
 garr[5] = "parihar"

 console.log(garr)


 console.log('|<----------------------------------------------------------------------->|')

 
 
 
// String  Array  Regex


class Sample1
{
    constructor(age, firstName)
    {
        this.firstName = firstName
        this.age = age
    }
    display()
    {
        console.log(`my name is ${this.firstName}`)
    }
}

let Sample2 = new Sample1(33, "ankita")
let Sample3 = new Sample1(24, "anshu")
console.log(Sample2)
console.log(Sample3)


console.log('|<----------------------------------------------------------------------->|')



let stud = new Array(2)
stud[0] = "ankita"
stud[1] = "anshu"

for(let i = 0; i < stud.length; i++)
{
    let obj1 = stud[i]
    for(let key in obj1)
    {
        console.log(key, obj1[key])
    }
}

console.log('|<----------------------------------------------------------------------->|')


let regex1 = /python/i;
let pq = "hi i am learning python and learning java script "
let gg = pq.match(regex1)
console.log(gg)

let jj = pq.replace(regex1, "js")
console.log(jj)



console.log('|<----------------------------------------------------------------------->|')

