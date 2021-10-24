

 // spread operator 
// // rest operarion


let values = [55,66,11,22,33,77]
function add(a,b,c,d)
{
    console.log(a+b+c+d)
}
add(...values)


let values1 = [55,66,77,88,33,22,11]
function add2(arr){
    console.log(arr[0]+arr[1]+arr[2]+arr[3])
}
add2(values1)


console.log('|<----------------------------------------------------------------------->|')


let values3 = [33,44,55,77,88,99,22]
function add3(...a)
{
    return a.reduce(function (acc, el)
    {
        return acc+el
    })
}

let rr1 = add3(1,2,3,4,56,78,98,76,5,432,111)
console.log(rr1)


console.log('|<----------------------------------------------------------------------->|')




// // let  names = ["ninad","amol","shikrant"]

// // // let firstOne = names[0]
// // // let firstOneB = names[1]
// // // let firstOneC = names[2]
// // // console.log(firstOne)
// // // console.log(firstOneB)
// // // console.log(firstOneC)

// // let [firstOne,firstOneB,firstOneC] = names
// // console.log(firstOne)
// // console.log(firstOneB)
// // console.log(firstOneC)

// // let transactions = [23,44,55,66,77,55,543,3455,345345,3453,3333]
// // //transactions.reverse()
// // let [tran1,tran2,tran3,tran4,tran5] =transactions.slice(-5)
// // let [tran1,tran2,tran3,tran4,tran5] = transactions.reverse()


let values4 = ["universe", "galaxy", "milkyway" ,"solar system" ]
let fv1 = values4[0]
let fv2 = values4[1]
let fv3 = values4[2]
let fv4 = values4[3]

console.log(fv1)
console.log(fv2)
console.log(fv3)
console.log(fv4)

console.log('|<----------------------------------------------------------------------->|')


let [ffv1,ffv2,ffv3,ffv4] = values4
console.log(ffv1)
console.log(ffv2)
console.log(ffv3)
console.log(ffv4)

console.log('|<----------------------------------------------------------------------->|')


// let valuesMain = [22,44,555,66,77,11,22,23,14,15,99]
// valuesMain.reverse()

// let bh=  [vm1,vm2,vm3,vm4,vm5] = valuesMain.slice(-5)
// console.log(bh)
// let bh1= [vm1,vm2,vm3,vm4,vm5] = valuesMain.reverse()
// console.log(vm1)
// console.log(vm2)
// console.log(vm3)
// console.log(vm4)
// console.log(vm5)

// console.log(bh1)


console.log('|<----------------------------------------------------------------------->|')


 //objects

 let metals = {
    name  : "gold ",
    price : 100000000,
    types: ["copper", "bronze", "silver"]

}

let {name: fm, price: sm, types :tm} = metals
console.log(fm)
console.log(sm)
console.log(tm)


console.log('|<----------------------------------------------------------------------->|')



// //spread

let num1 = [1,2,3,4,5,6,7,88,55,45,65,23,21]

function sum(a,b,c,d)
{
    console.log(a+b+c+d)

}

sum(...num1.reverse())


let arr = [1,2,3,4,55,66,77,88,99]


console.log('|<----------------------------------------------------------------------->|')


let s1 = [1,2,3,4,55,66,77,88,99]
function sum1(s1)
{
    console.log(s1[0]+s1[1]+s1[2]+s1[3]+s1[4]+s1[5])
}
sum1(s1.reverse())



console.log('|<----------------------------------------------------------------------->|')


 

//rest operator

//  let arru = [1,2,3,4,55,66,77,88,99]

//  function tax1(...arru)
// {
//     let temp1 = arru.reduce(function(acc, el){
//         return acc + el
//     })

//     let temp2 = arru.reduce(function(acc,el)
//     {
//         return acc+el
//     })

//     return [temp1, temp2]

// }
// console.log(temp1)
// console.log(temp2)




// let [add4,add5] = taxCollection(12,21,12,21,21,12,21,21,2,12,12,1,2,12,12)

// function taxCollection(...arru){


//     let add4 = arru.reduce(function(acc,el){
//         return acc + el
//     })

//     let add5 = arru.reduce(function(acc,el){
//         return acc + el
//     })

//     return {'firstName':"chinmay",'age':23}

// }

// let { firstName:fn ,age:ag} = taxCollection(12,21,12,21,21,12,21,21,2,12,12,1,2,12,12)



