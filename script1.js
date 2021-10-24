

let ulList = document.querySelector('ul')
console.log(ulList)
let button = document.querySelector('#clickButton')
console.log(button)
let inputText = document.querySelector('input')

//[<li>Grapes</li>,<li>Mango</li>,"grapes"]



button.addEventListener('click', function()
{
    let li = document.createElement('li')       // <li></li> 
    li.textContent = inputText.value            // <li>grapes</li>
    createButton(li)                            // <li>grapes</li>    

    //<li>
    // <button class="remove">Remove</button>
    // <button class="up">Up</button>
    //<button class="down">Down</button>
    // </li>
    
    
    ulList.appendChild(li)

})


for(let i=0; i<ulList.length;i++)
{
    createButton(li)
}


function createButton(li){


    let remove = document.createElement('button')  // <button></button>
    remove.textContent = "Remove" //<button>Up</button>
    remove.className = "remove"  // <button class = "remove">Remove<button>
    li.appendChild(remove)

    let up = document.createElement('button')  // <button></button>
    up.textContent = "Up" //<button>Up</button>
    up.className = "up"  // <button class = "up">Up<button>
    li.appendChild(up)

    
    let down = document.createElement('button')  // <button></button>
    down.textContent = "Down" //<button>Down</button>
    down.className = "down"  // <button class = "down">Down<button>
    li.appendChild(down)

}
