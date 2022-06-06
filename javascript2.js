/* const para = document.querySelector('buttom')
para.addEventListener('click, inserirElemento')
let cont = 6
 
function inserirElemento() {
    const body = document.querySelector('body')
    const ul = document.querySelector('ul')

    let p = document.createElement('p')
    p.textContent = 'P'+cont

    //body.appendChild(p)
    body.insertBefore(p, ul)

    cont++
} */


//let p = document.querySelector('p')

//p.innerHtml = 'Alterando o conteúdo pelo JS'
//p.style.backgroundColor = '#254523'

const para = document.querySelector('button')
para.addEventListener('click', () => {
let input = document.querySelector('#password')
console.log(input)
input.setAttribute('type', 'text')
} , false)




