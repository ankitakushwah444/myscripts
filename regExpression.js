///^javascript.d$/gim
//^ multi-line string only
// $ multi-line ends with only
// [abc][a-z][A-Z][0-9]

// prog1


const pattern = new RegExp('abc')
const g = /pune/ // pattern
let b1 = ['ankita-pune', 'anshu-nagpur', 'anaya-ujjain', 'prisha-chandrapur', 'abhisha-pune']
console.log(g.test(b1[1]))

let gh1 = b1.filter(function(el)
{
    return g.test(el)
 })
 console.log(gh1)


 console.log('|<----------------------------------------------------------------------->|')



 // prog2

//  const h = /^a/   // pattern
// let names = ["chinmay-pune",'poorva-ujjain','abhisha-chandrapur','mayuri-nagpur','amol-pune']
// console.log(h.test(names[1]))

// let puneS = names.filter(function(el){
//     return h.test(el)
// })
// console.log(puneS)


const j = /^a/            //pattern
let b2 = ['ankita-pune', 'anshu-nagpur', 'anaya-ujjain', 'prisha-chandrapur', 'abhisha-pune']
console.log(j.test(b2[1]))

let gh2 = b2.filter(function(el)
{
    return j.test(el)
 })
 console.log(gh2)
 

 console.log('|<----------------------------------------------------------------------->|')

 
 
 //prog 3


//  let namesStudents = ["amol","archit","amit","amey","abhisha",'arman']
// let ba =  /^....$/
// //-----------------------------------
// let fchar = namesStudents.filter(function(el){
//     return ba.test(el)
// })
// console.log(fchar)


let jkl = ["ankita", "anaya", "anshu", "prisha", "ninad", "anku"]
let c = /^.....$/


let gh3 = jkl.filter(function(el)
{
    return c.test(el)
})

console.log(gh3)



console.log('|<----------------------------------------------------------------------->|')


// prog 4



let ghj = ["anshu", "ankita", "anku" ,"anaya ", "prisha", "anika", "karnika", "arman",]
let ns = /^[a][mr]/
let vca = ghj.filter(function(el)
{
    return ns.test(el)
})

console.log(vca)


console.log('|<----------------------------------------------------------------------->|')



//prog 4


// let num = [7709192441,7779898999,9876787665,989676554,7789089089089890]
// let b = /^[7][7].{8}$/
// let yy = num.filter(function(el){
//     return b.test(el)
// })
// console.log(yy)


let num1 = [7706693543, 7708409148, 6765443290, 77686856474546, 679476567589, 776868995432, 77989867999]
let l = /^[7][7].{8}$/
let yu = num1.filter(function(el)
{
    return l.test(el)
})
console.log(yu)


console.log('|<----------------------------------------------------------------------->|')


// prog 5

//\d - [0-9]


// let num = [7709192441,7779898999,9876787665,989676554,7789089089089890]
// let b = /^[\d][\d].{8}$/
// let yy = num.filter(function(el){
//     return b.test(el)
// })
// console.log(yy)



// let ghn = [7706693543, 7708409148, 6765443290, 77686856474546, 9898525665, 776868995432, 77989867999]
// let cu = /^[/d][/d].{8}$/
// let uu = ghn.filter(function(el)
// {
//     return cu.test(el)
// })

// console.log(uu)



// console.log('|<----------------------------------------------------------------------->|')


// //\D - [^0-9]
// let num8 = [7709192441,7779898999,9876787665,989676554,7789089089089890]
// //let b = /^[\D][\D].{8}$/
// let b8 = /^[^0-9][^0-9].{8}$/
// let yyz = num8.filter(function(el){
//     return b8.test(el)
// })
// console.log(yyz)


// console.log('|<----------------------------------------------------------------------->|')



// let namesStudents = ["amol","Archit","amit","amey","abhisha",'arman']
// let ba =  /^[^a-zA-Z0-9_][mr]/
// let fchar = namesStudents.filter(function(el){
//     return ba.test(el)
// })
// console.log(fchar)


// console.log('|<----------------------------------------------------------------------->|')


//same as this [a-zA-Z0-9_]

// let namesStudents = ["amol","Archit","amit","amey","abhisha",'arman']
// let ba =  /^[\W][mr]/
// let fchar = namesStudents.filter(function(el){
//     return ba.test(el)
// })
// console.log(fchar)


// console.log('|<----------------------------------------------------------------------->|')



// let namesStudents = ["amol","Archit","amit","amey","abhisha",'arman']
// let ba =  /^[a-zA-Z0-9_][mr]/
// let fchar = namesStudents.filter(function(el){
//     return ba.test(el)
// })
// console.log(fchar)


// console.log('|<----------------------------------------------------------------------->|')


//same as this [a-zA-Z0-9_]

let namesStudents = ["amol","Archit","amit","amey","abhisha",'arman']
let ba =  /^[\w][mr]/
let fchar = namesStudents.filter(function(el){
    return ba.test(el)
})
console.log(fchar)


// console.log('|<----------------------------------------------------------------------->|')
