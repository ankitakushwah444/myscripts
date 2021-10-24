// Includes --

// Action :- search for the element 
// return :- if found then true else false (Boolean)

let h1 = ["lotus", "sunflower", "lily", "rose"]
let b1 = [1,2,3,4,5,6,7,7,8,9,55,66,77,33,44,22,11,-1]
let c1 = h1.includes("lotus")
console.log(c1)


// sort

let yu = h1.sort()
console.log(yu)

b1.sort()
console.log(b1)


// reverse

// Action :- reverse all the elements of the array
// return :- returns the array


let universe = ["galaxies", "milkyway", "solar system"]
let space = universe.reverse()
console.log(universe)
console.log(space)


//flat

let nm = [[1,2,3], [44,55,66], [77, 56,89]]
console.log(nm)
console.log(nm[1][1])

//Actions  : combines all element into single array
//Returns : array only

let k2  = nm.flat()
console.log(k2)
