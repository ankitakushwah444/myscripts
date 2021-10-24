
let myName = "ankita"

// 0 1 2 3 4 5 
// a n k i t a


console.log(myName[0])      // a
console.log(myName[1])      // n
console.log(myName.length)  // 6

console.log('|<----------------------------------------------------------------------->|')



let myName1 = "ananya"

// 0 1 2 3 4 5 
// a n a n y a 

console.log(myName1[0])         // a
console.log(myName1[3])         // n



console.log('|<----------------------------------------------------------------------->|')



// Object ---  property , methods


let a1 = "anshu"
console.log(a1.length)              //  5
console.log(a1.toUpperCase())       //  ANSHU




console.log('|<----------------------------------------------------------------------->|')


// //Method --- action 
// // Return --- String 

let b1 = "Maharashtra "
let c1 = b1.toUpperCase()
console.log(c1)             // MAHARASHTRA

let e1 = b1.toLowerCase()
console.log(e1)             // maharashtra

let l1 = "INDIA"
let g1 = l1.toLowerCase()   // india 
console.log(g1)


console.log('|<----------------------------------------------------------------------->|')


//   0       1    2   3   4   5   6   7   8   9   10
//   b       r    e   a   d   b   u   t   t   e   r 
//  -11     -10  -9  -8  -7  -6  -5  -4  -3  -2  -1

let p1 = "breadbutter"

//String.slice(startpoint, endpoint)    //   end point not include
//end point should be ahead start point 

let p2 = p1.slice(3,5)
console.log(p2)             // ad


let p3 = p1.slice(0,5)
console.log(p3)             // bread


let p4 = p1.slice(-4,-2)
console.log(p4)             // tt


let p5 = p1.slice(-5, 3)
console.log(p5)             //blank output 


let p6 = p1.slice(-2, 3)
console.log(p5)             // blank output 


let p7 = p6.slice(4,5)
console.log(p7)             // blank output 



console.log('|<----------------------------------------------------------------------->|')


let p8 = "santa "

//0 1 2 3 4 
//s a n t a 

console.log(p8[0])      // s


// for(intilaization ; condition ; increment){
// statments


for(let i=0 ; i < 4; i++)               // {  //i ---1  i ---2 -- 3 ---
{
    console.log(i)                         // 0 1 2 3   
    console.log(p8[i])                      // s a n 
}



console.log('|<----------------------------------------------------------------------->|')




let p9 = "ankita kushwah"
let count = 0

for(let i = 0; i < p9.length; i++)
{
    if(p9[i] == 'a')
    {
        count = count + 1

    }
}

console.log(count)              // 3



console.log('|<----------------------------------------------------------------------->|')


let rt = "maharashta india "
let count2 = 0;

for(let i = 0; i < rt.length; i++)
{
    if(rt[i] == 'a' || rt[i] == 'e' || rt[i] == 'i' || rt[i] == 'o' || rt[i] == 'u')
    {
        count2 = count2+1
    }
}
console.log(count2)                 // 7


console.log('|<----------------------------------------------------------------------->|')


//r o s e 
//0 1 2 3 

let bg = 'rose'     // esor
let rev = ""
for(let i = 3; i>=0; i--)  // { // 2 1
{
    console.log(bg[i])          //iteration1  e   //iteration2  s    //interation3   o    //iteration 3   r 
    {
        rev = rev+bg[i]    //  esor
    }
}
console.log(rev)           // esor


console.log('|<----------------------------------------------------------------------->|')


let v2 = ["Hope"]
// yadot si a taerg yad ot  nrael gnihtemos wen


let v3 = ["believe"]
console.log(v3[0].toUpperCase()+ v2.slice(1,v3.length ))



console.log('|<----------------------------------------------------------------------->|')



// person ---
//  weight height age 
//  walk()  talk()
// properties -
//wheel , reg , color
// action start() stop()


// string
   
// object -- properties and methods
//   0  1  2  3
//   a  m  o  l 

//console.log(firstName[0])
//console.log(firstName[firstName.length-1])

let c2 = "Ankita kushwah"

let c3 = "ankita"

console.log(c3.length)      //6


console.log('|<----------------------------------------------------------------------->|')


// a n k i t a 
// 0 1 2 3 4 5

console.log(c3[0])          //a
console.log(c3.length-1)    //5


console.log('|<----------------------------------------------------------------------->|')


for(let i = 0 ; i < 4 ; i++)
{
    console.log(i)              // 0 1 2 3 
    console.log(c3[i])          // a n k i
}


console.log('|<----------------------------------------------------------------------->|')


for(let i = c3.length-1 ; i >= 0 ; i--){
   
   console.log(i)             // 5 4 3 2 1 0 
   console.log(c3[i])         // a t i k n a
}


console.log('|<----------------------------------------------------------------------->|')



// Method---

//Method ------Action 

// Return --

// console.log('Hello I am new to javascript')
// console.log("Hello I am new to javascript")
// console.log('Hello I am "new" to javascript')
// console.log("Hello I am new's to javascript")


// old way 

let df  = "ankita "
let df2  = "kushwah "


console.log("My firstname is "+df+" My lastName is "+df2)

// String interpolation - back ticks

console.log(`My firstName is ${df} and My lastName is ${df2}`)

// It also solves the expression

console.log(`Addition of 2 and 2 is ${2+2}`)

console.log('|<----------------------------------------------------------------------->|')



// String

// string + string --> string 
// string + number --> string 
// number + string --> string 
// number + number --> number

let a = 10
let b = 20
let c ='ankita '

console.log(a+b+c)          // 30 ankita 
console.log(b+c+a)          // 20ankita 10
console.log(a+b)            // 30

console.log('|<----------------------------------------------------------------------->|')


// methods

let q = console.log('hello')    // hello           
console.log(q)                  // undefined


function add(x,y)
{
    return x + y 
}
let a7 =  add(2, 3)
console.log(a7)             // 5
console.log(typeof a7)      // string 


console.log('|<----------------------------------------------------------------------->|')


//Action -- printing to console whatever we pass
//Return type 


// Methods

let cloud  = "sky "
console.log(typeof cloud)           // string
let k2 = cloud.toUpperCase()    


// Action - convert to uppercase
// Return type  - string


console.log(k2)                 // SKY
console.log(typeof cloud)       // string 


console.log('|<----------------------------------------------------------------------->|')


let m2  = cloud.toLowerCase()

// Action - convert to lower
// Return type  - string


console.log(m2)             // sky
console.log(typeof m2)      // string


console.log('|<----------------------------------------------------------------------->|')


// Method chaining 

let m3 = cloud.toLowerCase().toUpperCase().length

console.log(m3)             // 4
console.log(typeof m3)      // number


console.log('|<----------------------------------------------------------------------->|')


let newChar = "ananya "

//  0   1   2   3   4  5  
//  a   n   a   n   y  a  
//  -6  -5 -4  -3  -2 -1


//newChar.slice(startingPosition ,endposition)

let kite  = newChar.slice(1,6)
console.log(kite)
console.log(newChar.slice(2))
console.log(newChar.slice(-3))
console.log(newChar.slice(-5,6))
console.log(newChar.slice(-3,-4))



console.log('|<----------------------------------------------------------------------->|')


let b6 = "anshu"
console.log(b6[0].toUpperCase()+ b6.slice(1))              // Anshu  

let cap  = ""
for(let i = 0 ; i < b6.length ;i++)
{
    console.log(b6.length)      // 5
    if(i == 0)
    {
        cap = cap +b6[i].toUpperCase()
    } 
    else 
    {
        cap = cap + b6[i]
    }
}
console.log(cap)                            //  Anshu



console.log('|<----------------------------------------------------------------------->|')


