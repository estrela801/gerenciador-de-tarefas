// LÓGICA DO BOTÃO ADICIONAR
const btAdd = document.querySelector('.adicionar')
const tasks = []

function createInputElement() {
    const input = document.createElement('input')
    input.classList.add('input-add')
    input.setAttribute('type', 'text')
    return input
}

function createAddTaskButton() {
    const btAddTask = document.createElement('button')
    btAddTask.classList.add('btAddTask')
    btAddTask.innerHTML = 'Adicionar Tarefa'
    return btAddTask
}

function appendElementsToContainer(container, elements) {
    elements.forEach(element => container.appendChild(element))
}

function el(pai, container) {
    const input = createInputElement()
    const btAddTask = createAddTaskButton()
    
    appendElementsToContainer(pai, [input, btAddTask])
    container.appendChild(pai)

    // Adiciona o evento de clique ao botão de adicionar tarefa
    btAddTask.addEventListener('click', () => {
        enviarTask(input.value)  // Passa o valor do input para a função enviarTask
        show()
    })
}

function add() {
    btAdd.classList.add('deslizarUp')
    const divAdd = document.createElement('div')
    divAdd.classList.add('div-add')
    const paiTitulos = document.querySelector('.pai-titulos')
    paiTitulos.classList.add('pai-titulos-add')
    el(divAdd, paiTitulos)
    hideElement('.terminar')
    hideElement('.finalizadas')
}

function hideElement(selector) {
    const element = document.querySelector(selector)
    element.classList.add('deslizarUp')
    element.style.display = 'none'
}

function showElement(selector) {
    const element = document.querySelector(selector)
    element.style.display = 'block'
    element.classList.remove('deslizarUp')
    element.classList.add('deslizarDown')
    setTimeout(() => {
        element.classList.remove('deslizarDown')
    }, 850)
}

function enviarTask(task) {
    console.log('Tarefa adicionada:', task)
    // Função para enviar a tarefa
}

function show() {
    const pai = document.querySelector('.pai-titulos')
    pai.classList.remove('pai-titulos-add')

    document.querySelectorAll('.input-add').forEach(input => {
        input.style.display = 'none'
    })

    document.querySelectorAll('.btAddTask').forEach(button => {
        button.style.display = 'none'
    })

    // document.body.style.backgroundColor = 'red'

    setTimeout(() => {
        ['.finalizadas', '.terminar', '.adicionar'].forEach(selector => {
            showElement(selector)
        })
    }, 800)
}

btAdd.addEventListener('click', add)
