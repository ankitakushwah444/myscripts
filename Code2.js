
//WAJSC TO PRINT  MAX AND MIN VALUE FROM AN GIVEN ARRAY 

let n1 = [23, 44, 67, 92, 56, 33, 14, 77, -88]
let max = n1[0]
let min = n1[0]

for (let i = 0; i < n1.length; i++) {
    if (n1[i] > max) {
        max = n1[i]
    }
    else if (n1[i] < min) {
        min = n1[i]
    }
}

console.log(max, min)   // 92  -88

console.log('|<----------------------------------------------------------------------->|')


// WAJSC TO PRINT  DUPLICATES CHARACTES COUNT  IN A GIVEN STRING  // FIRST  WAY 

let g1 = "hhhhhhbbvfggccccccMMMqqqwwpoiytesZZZZZiiiii"
let num = {}

g1 = g1.toLowerCase()

for (let i = 0; i < g1.length; i++) {
    if (num.hasOwnProperty(g1[i])) // iteration 1st= false control goes on else part
    {
        num[g1[i]] = num[g1[i]] + 1
    }
    else {
        num[g1[i]] = 1
    }
}
console.log(num)            //   { h: 6,b: 2,v: 1,f: 1,g: 2,c: 6,m: 3,q: 3,w: 2,p: 1,o: 1,i: 6,y: 1,t: 1,e: 1,s: 1,z: 5}


console.log('|<----------------------------------------------------------------------->|')

// WAJSC TO PRINT  DUPLICATES CHARACTES & NUMBERS COUNT  IN A GIVEN STRING  // // SECOND WAY

let ch = '4545aaaaaaAAAAA345hgvvvvv$$$$$$$$PPPPyuyuyu76'
let acc = 0
let num1 = 0
let c1 = 0

for (let i = 0; i < ch.length; i++) {
    if (Number(ch[i])) {
        acc = acc + 1
    }
    else if (typeof ch[i] === "string") {
        num1 = num1 + 1
    }
    else {
        c1 = c1 + 1
    }
}
console.log(acc)        // 9
console.log(num1)       // 36
console.log(c1)         // 0

console.log('|<----------------------------------------------------------------------->|')


// WAJSC TO PRINT  DUPLICATES CHARACTES, NUMBERS & SPECIAL CHARACTER COUNT IN A GIVEN STRING  // THIRD WAY 


let v1 = "123456AAAAAAAAAA@@@@@@@@@ghgfgdgfvcbgvcgdfgd22222222"
let w1 = 0
let q1 = 0
let r1 = 0
let t1 = 0

for (i = 0; i < v1.length; i++) {
    if (v1[i].charCodeAt() >= 48 && v1[i].charCodeAt() <= 57) {
        w1 = w1 + 1
    }
    else if (v1[i].charCodeAt() >= 97 && v1[i].charCodeAt() <= 122) {
        q1 = q1 + 1
    }
    else if (v1[i].charCodeAt() >= 65 && v1[i].charCodeAt() <= 90) {
        r1 = r1 + 1
    }
    else {
        t1 = t1 + 1
    }
}

console.log(w1, q1, r1, t1)             // 14 19 10 9

console.log('|<----------------------------------------------------------------------->|')

// WAJSC TO PRINT  DUPLICATES CHARACTES & NUMBERS  COUNT IN A GIVEN STRING USING SPLIT METHOD // FOURTH  WAY 


let u = 'GHGHBUTTTWWER567844AAAAA'
a1 = u.split('')
console.log(u)          // GHGHBUTTTWWER567844AAAAA
console.log(a1)         // ['G', 'H', 'G', 'H', 'B','U', 'T', 'T', 'T', 'W','W', 'E', 'R', '5', '6','7', '8', '4', '4', 'A','A', 'A', 'A', 'A']

let f1 = 0
let ch1 = 0
a1.forEach(a1 => 
{

    {
        if (Number(a1)) 
        {
            f1 = f1 + 1
        }
        else 
        {
            ch1 = ch1 + 1
        }
    }
})

console.log(f1,ch1)             // 6 18

console.log('|<----------------------------------------------------------------------->|')

 
// WAJSC TO PRINT DUPLICATES CHARACTES & NUMBERS  COUNT IN A GIVEN STRING USING MAP METHOD // FIFTH  WAY 

let o = 'hbdgvsgvshj975635647innhbjcjcb'
let o1 = o.split('')
console.log(o)       // hbdgvsgvshj975635647innhbjcjcb
console.log(o1)     //['h', 'b', 'd', 'g', 'v', 's','g', 'v', 's', 'h', 'j', '9','7', '5', '6', '3', '5', '6','4', '7', 'i', 'n', 'n', 'h','b', 'j', 'c', 'j', 'c', 'b' ]
num2 = 0
char2 = 0

o1.map((ele, i, arr) =>
{
    if(Number(ele))
    {
        num2 = num2+1
    }
    else
    {
        char2 = char2+1
    }
})
console.log(num2, char2)        // 9 12


 
console.log('|<----------------------------------------------------------------------->|')


Number("A")
if(undefined)               // // condition false 
{
    console.log("hiiiii")      
}
else{
    console.log('tata')   // tata
}


if(0)               // // condition false 
{
    console.log("heyyyyy")

}
else
{
    console.log('see you soon ')        // see you soon
}

console.log('|<----------------------------------------------------------------------->|')


let person1 = 
{
           age : 18, 
           name:'ankita'
}
    console.log(person1.hasOwnProperty('age'))      // true
    console.log(person1.hasOwnProperty('name'))     // true

    
    console.log('|<----------------------------------------------------------------------->|')


// WAJSC TO PRINT HIGHEST & LOWEST VALUE FROM AN ARRAY  


let d1 = [44,34,56,78,90,12,79]

var max1 = 0
var min1 = 0

for(var i  = 1; i < d1.length; i++)
{   
    if(d1[i] > max1)
    {
        max1= d1[i]
    }
    else if(d1[i] < min1 )
    {
        min1= d1[i]

    }
}

console.log(`Highest Number from Array: ${max1}`);      // 90
console.log(`Lowest Number from Array: ${min1}`);       //0


console.log('|<----------------------------------------------------------------------->|')



let k = [66,77,99,33,44,55,88]

console.log(k[0])       // 66
console.log(k[3])       // 33

for(let i=0; i< k.length; i++)
{
    console.log(i)          
    console.log(k[i])
}                                           // // 0 66 1 77 2 999 3 33 4 44 5 55 6 88 

console.log('|<----------------------------------------------------------------------->|')
    