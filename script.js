let fruit = document.querySelectorAll('li')
console.log(fruit)


let button = document.querySelector("button")
button.addEventListener('mouseover', function () {
    for (let i = 0; i <= fruit.length; i++) {


        fruit[i].style.color= 'red';
        
    }
})
