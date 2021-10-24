//*********  Action  :- add the element at last
//*********  Return :- new length of string (number)


let x1 = ["ankita", "ananya", "Anshu"]
console.log(x1.length)

//push

let x2 =x1.push('anku')
console.log(x1)
console.log(x2)


//  Action  :- removes the last element
//  Return :- returns the removed element

let x3= x1.pop()
console.log(x1)
console.log(x3)


// //Action  :- add the element at beginning of array
// //Return :-  returns the new length of array



let x4= x1.unshift("santa")
console.log(x1)
console.log(x4)


// //Action  :- remove the element at beginning of array
// //Return :-  returns the removed elemnet 


let x5=x1.shift()
console.log(x1)
console.log(x5)


// // pop push shift unshift
// // --------------------------Array--------------

// Index of 
// //Action  :- to find the index of given element
// //Return :-  returns the index if found,  else it will return -1

let shades= ["red", "blue","green","yellow"]
let s1=shades.indexOf("red")
let s2=shades.indexOf("yellow")
let s3=shades.indexOf("orange")
console.log(s1)
console.log(s2)
console.log(s3)



let userInput="orange"
if(shades.indexOf(userInput) >=0)
{
    console.log('color is available ')
}
else
{
console.log('color is not availbale' )
}


//  shades= ["red", "blue","green","yellow"]

// // Action -- reverse the array
// // Returns -- returns the same array

// // reversed

let s4= shades.reverse()
console.log(shades)
console.log(s4)


// // sort 

// let num = [1,2,3,44,2,3,44,5,77,88,99,-23]
//  num.sort()
//  console.log(num)


let y = [66,77,88,12,33,44,56,78,90,1,2,3,4,5,-66]
 y.sort()
 console.log(y)


//  let nm = ["abhisha","chinmay","avinash","aara","zoya","chetan"]
// nm.sort()
// console.log(nm)

// // Not work in case of mixed array

// // push pop shift unshift indexOf reverse sort flat


let y1= ["rose","lily", "mogra", "juhi", "sunflower", "marigold"]
y1.sort()
console.log(y1)


// // flat 

let y2 = [[1,2,3],[4,5,6],[7,8,9]]
console.log(y2)
console.log(y2[0][2])
console.log(y2[2][2])
let y3=y2.flat()
console.log(y3)


// // includes - true

// //Action - search the element inside array 
// // Boolean -- if found then true else false


let sky =["moon", "stars", "sun"]
let z1= sky.includes("stars")
let z2= sky.includes("kites")
console.log(z1)
console.log(z2)


// join

// let sss = flowers.join('--')
// console.log(sss)
// console.log(typeof sss)


let z3= sky.join('*********')
console.log(z3)
console.log(typeof z3)