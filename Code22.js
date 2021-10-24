let ss = [3000,4000,5000]

//[2100,2800,3500]       

let hh = ss.map(function(el,index,arr){
    return el-(el*0.30)
})
console.log(hh)


let names = ["sarika","pratik","sarthak"]
let dd = names.filter(function(el,index,arr){
    return el.length==6
})
console.log(dd)

let ww = ["welcome","chinmay"]
let vv = ww.join(' ')
console.log(vv)


let num = [50,48,56,54,21,42]

let yyy = num.reduce(function(acc,el){
    return el*0.10 + acc                  

},0)
console.log(yyy)




let ages = [30,31,32,54,26,35,42,11]      

//[true,true ,true ,false,false ,true ,false, false] // 30 - 35               

let ggg = ages.map(function(el,index,arr){
    return el>=30 && el<=35
})
console.log(ggg)