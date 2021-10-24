
var brand = "default brand"

function getCompany(prefix)
{
    console.log(prefix + this.brand)
}

let audi = {
    brand : "Audi"
}

let bmw = {
    brand : "bmw"
}

getCompany.call(audi, ['new to'])
getCompany.call(bmw, ['new a '])



console.log('|<----------------------------------------------------------------------->|')


getCompany.apply(audi, ['new to'])
getCompany.apply(bmw, ['new a '])



console.log('|<----------------------------------------------------------------------->|')


// let person = {

//     age:12,
//     fullName:"chinmay",
//     display:function(){
//         return [12,13]
//     }

// }

// let [a,b]= person.display()
// console.log(a)
// console.log(b)


let fruit1 = {
    fruitName: "apple",
    fruitPrice : 50, 
    display : function(){
        return [12, 13]
    }

}
let  [a,b] = fruit1.display()
console.log(a)
console.log(b)


console.log('|<----------------------------------------------------------------------->|')


let add3 = function(){
    return 10 + 12
}


// let a = function(){
//     return 10 + 12
// }

function addition(a){
    return a
}

// let f = function(){
//     return 10 + 12
// }



let f = addition(add3)
let adda = f()
console.log(adda)


console.log('|<----------------------------------------------------------------------->|')


let fruit12 = {
    fruitName: "apple",
    fruitPrice : 50, 
    display : function(){
        return [12, 13]
    }

}
let  [a1,b1] = fruit1.display()
console.log(a1)
console.log(b1)


let v3 = fruit12.display()
console.log(v3)


console.log('|<----------------------------------------------------------------------->|')



 var value = 50

 let shades = {
     colorName : "mangeta", 
     show:function()
     {
            return this.colorName
     }
 }

 let r5 = shades.show()
 console.log(r5)


 console.log('|<----------------------------------------------------------------------->|')


 let shades1 = {
    contrast : "grey",
    value: 50
}

console.log(shades1['contrast'])

let a11 = shades.show()
console.log(a11)


let v9 = function(){
    return this.contrast
}

let g6 = shades.show.bind(shades1)
let gg6 = shades.show.bind(shades)

console.log(g6())
console.log(gg6())


// //call and apply 

console.log(g6.call(shades1))
console.log(gg6.call(shades))


console.log('|<----------------------------------------------------------------------->|')

let cup = {
    flavour: "redlable",
    value: 22,
    Put:function()
    {
            return this.flavour
    }
}


let butter = {
    value: 66,
    flavour : "amul "
}


let cb1 = function(m){
    return m + this.flavour
}

let xx1 = cb1.call (butter, "this is flavour"+ "   ")
let xx2 = cb1.call (cup, "this is flavour"+ "   ")
console.log(xx1)
console.log(xx2)



let xx5= cb1.apply(butter, ["this is flavour", "this is another one flavour"])
console.log(xx5)

let xx6 = cb1.apply(cup, ["this a flavour", "this is another one flavour "])
console.log(xx6)



console.log('|<----------------------------------------------------------------------->|')



var name1 =  "anshu"

let j1 = 
{
name1:  "ananya",
age : 89,
view1:function()
{
    console.log("welcome"+ this.name1)

    function show2()
    {
        console.log("welcome"+this.name1 )
    }
    show2()
}
} 

j1.view1()


console.log('|<----------------------------------------------------------------------->|')


var name12 =  "anshu"

let jj1 = 
{
name12:  "ananya",
age2 : 89,
view12:function()
{
    console.log("welcome  "+ this.name12)

   let showF2 = ()=> {
       console.log("welcome   "+ this.name12)
   }
    showF2()
}
} 

jj1.view12()

console.log('|<----------------------------------------------------------------------->|')



var dname =  "anshu"

let l1 = 
{
dname:  "ananya",
dage : 89,
text1:()=>
{
    console.log("welcome"+ this.name1)

     let port2= ()=>
    {
        console.log("welcome"+this.name1 )
    }
    port2()
}
} 

l1.text1()


// arrowfunction and function expression/functionExpression