const btAdd = document.querySelector('.adicionar')
const tasks = []

function el(pai,container){
    const input = document.createElement('input')
    input.classList.add('input-add')
    input.setAttribute('type', 'text')

    const btAddTask = document.createElement('button')
    btAddTask.classList.add('btAddTask')
    btAddTask.innerHTML='Adiconar Tarefa'

    pai.append(input, btAddTask)
    container.append(pai)
}
function add(){
    btAdd.classList.add('adicionar-clicado')
    const terminar = document.querySelector('.terminar')
    const finalizadas = document.querySelector('.finalizadas')
    terminar.style.display='none'
    finalizadas.style.display='none'
    const divAdd = document.createElement('div')
    divAdd.classList.add('div-add')
    const paiTitulos = document.querySelector('.pai-titulos')
    paiTitulos.classList.add('pai-titulos-add')
    el(divAdd,paiTitulos)
}
btAdd.addEventListener('click', add)