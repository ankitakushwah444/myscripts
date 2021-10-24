
let haa = {
    acc7 :0 ,
    next1:function()
    {
        console.log(this)
        let y4 = this.acc7 = this.count+1
        return y4
    }
}


let y4 = haa.next1()
console.log(y4)


console.log(this)

alert('hello')
window.alert()

var dg1 = 20
console.log(window.dg1)
console.log(window === this )


