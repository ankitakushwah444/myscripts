// includes 

let fruit1 = "Apple".toLowerCase()
let fruit2 = "banana mango chiku grapes orange"
let fruit3 = "banana mango chiku grapes orange apple"


if(fruit3.includes(fruit1))
{
    console.log('fruit avail')
}
else
{
    console.log('fruit not available')

}


console.log("------------------------------------------------------------------")


let flower = "rose"
console.log(flower.length)
console.log(flower.trim().length)


console.log("------------------------------------------------------------------")


let flower1 = " rose lily "
console.log(flower1.length)
console.log(flower1.trimRight().length)


console.log("------------------------------------------------------------------")

let flower2 = " rose lily "
console.log(flower2.length)
console.log(flower2.trimLeft().length)


console.log("------------------------------------------------------------------")


let p = "ankita kushwah"
console.log(p.trim())  
console.log(p.trim().split(' '))
console.log(p.trim().split('  ').join(""))


console.log("------------------------------------------------------------------")



//indexOf  , includes , trim  , replace


let lan3 = "i am learning javascript and i will search job in javascript"
let lan4 = lan3.replace('javascript', 'python')
console.log(lan4)

lan3 = lan3.split(' ')
console.log(lan3)

for(let i = 0; i < lan3.length; i++ )
{
    if(lan3[i] === "javascript")
    {
        lan3[i] = "python"
    }
}
console.log(lan3)
