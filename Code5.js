
let obj1 = {
    'age' : 10,
    'rollNumber' : 30 
}


// Bracket notation
console.log(obj1['age'])
console.log(obj1['rollNumber'])


// Dot notation

console.log(obj1.age)
console.log(obj1.rollNumber)



console.log('|<----------------------------------------------------------------------->|')



 // properties and method
// // // human - name , age , color 
// // // methods - eat() , walk()
// // // function inside object method

function add()
{
    
    {
        console.log(2+4)            //6
    }
}
add()


// function expression

let add1 = function ()
{
    console.log(2+5)            // 6
}
add()


// Arrow function

let sub  = () => {
    console.log(9-4)            //5
}
sub()


console.log('|<----------------------------------------------------------------------->|')



let obj2 = {
    'name' : "Ankita kushwah",
    'age' : 40, 
    'walk': function()
    {
        console.log('hello'+ this.name)
    }
}


    let fruit = {
        'fruitName' : "watermelon",
        'color' : 'red',

        'eat':function()
        {
           console.log('this is '+ this. fruitName  )
        }
    }

    // //console.log(obj2.age)
    // obj2. walk()
    // obj2. walk()
    // fruit.eat()


    console.log('|<----------------------------------------------------------------------->|')


    // difference between let , const ,var


    var x =10
    console.log(x)
    {
        console.log(x)                 //10
    }


// program 2


{
    var x = 20
    console.log(x)          // 10
}

console.log(x)              // 10 



// program 3

// variable defined with let keyword is blocked scope


{
    let x = 30
    console.log(x)
}
console.log(x)



// program 4


{
    const x = 10
    console.log(x)
}

console.log(x)



// let and const are blocked scope and var is function scoped


let we = 10
{
    we = 50
    console.log(we)
}
console.log(we)



//  program 5

let d1 = 10
{
    let d1 = 70
    console.log(d1)
}

console.log(d1)


// program  6


const y5 = 7
{
    const y5 = 10
    console.log(y5)
}
console.log(y5)


// program 7 

var g9 = 55
function mul(){

var g9 = 66
console.log(g9)
}

console.log(g9)
mul()


console.log('|<----------------------------------------------------------------------->|')


// program 7

let d = 500
var f = 80
function mul2() 
{
    let d = 40,
    f = 60
    console.log(f)
}


{
    let d = 90
    console.log(d)              // excutes first
}

d = 54

{
    console.log(d)              // executes second 
}

console.log(f)                  // executes 3rd time 
mul2()                          // exe 4th time
console.log(d)                  // exe 5th time



console.log('|<----------------------------------------------------------------------->|')


    let haa = {
        acc7 :0 ,
        next1:function()
        {
            console.log(this)
            let y4 = this.acc7 = this.count+1
            return y4
        }
    }



// let y4 = haa.next1()
// console.log(y4)


// console.log(this)

// alert('hello')
// window.alert()

// var dg1 = 20
// console.log(window.dg1)
// console.log(window === this )


// function movie(){
// //     console.log(this === window);
// // }

// // movie()
// // window.movie()


function movie1()
{
    console.log(this === window)
}

movie1()
window.movie1()