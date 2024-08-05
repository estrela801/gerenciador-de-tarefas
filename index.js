// LÓGICA DO BOTÃO ADICIONAR
const btAdd = document.querySelector('.adicionar');
const tarefasRegistradas = [];

function createInputElement() {
    const input = document.createElement('input');
    input.classList.add('input-add');
    input.setAttribute('type', 'text');
    input.setAttribute('required', 'required')
    return input;
}

function createAddTaskButton() {
    const btAddTask = document.createElement('button');
    btAddTask.classList.add('btAddTask');
    btAddTask.innerHTML = 'Adicionar Tarefa';
    return btAddTask;
}

function appendElementsToContainer(container, elements) {
    elements.forEach(element => container.appendChild(element));
}

function el(pai, container) {
    const input = createInputElement();
    const btAddTask = createAddTaskButton();
    
    appendElementsToContainer(pai, [input, btAddTask]);
    container.appendChild(pai);

    // Adiciona o evento de clique ao botão de adicionar tarefa
    btAddTask.addEventListener('click', () => {
        enviarTask(input.value);  // Passa o valor do input para a função enviarTask
        input.value = ''; // Limpa o valor do input após adicionar a tarefa
        btAddTask.style.display = 'none'; // Oculta o botão após o clique
        input.style.display = 'none'; // Oculta o input após o clique
        show();
    });
}
function verificaContainer(){
    const teste = document.querySelector('.terminar-container')
    if(teste){
        teste.remove()
    }
}
function add() {
    btAdd.style.display='none'
    const divAdd = document.createElement('div');
    divAdd.classList.add('div-add');
    const paiTitulos = document.querySelector('.pai-titulos');
    paiTitulos.classList.add('pai-titulos-add');
    el(divAdd, paiTitulos);
    hideElement('.terminar');
    hideElement('.finalizadas');
    verificaContainer()
    const num = document.querySelector('.tasks-terminar')
    num.innerHTML= tarefasRegistradas.length + 1
}

function hideElement(selector) {
    const element = document.querySelector(selector);
    element.classList.add('deslizarUp');
    element.style.display = 'none';
}

function showElement(selector) {
    const element = document.querySelector(selector);
    element.style.display = 'flex';
    element.classList.remove('deslizarUp');
    element.classList.add('deslizarDown');
    setTimeout(() => {
        element.classList.remove('deslizarDown');
    }, 850);
}

function enviarTask(task) {
    tarefasRegistradas.push(task)
    // window.alert(`A Tarefa: ${task} foi enviada`)
    console.log('Tarefa adicionada:', task);
}

function show() {
    const pai = document.querySelector('.pai-titulos');
    pai.classList.remove('pai-titulos-add');

    document.querySelectorAll('.input-add').forEach(input => {
        input.style.display = 'none';
    });

    document.querySelectorAll('.btAddTask').forEach(button => {
        button.style.display = 'none';
    });

    setTimeout(() => {
        ['.finalizadas', '.terminar', '.adicionar'].forEach(selector => {
            showElement(selector);
        });
    }, 800);
}

btAdd.addEventListener('click', add);



// Lógica de pegar a tarefa digitada e adicionar em um elemento nas tarefas




const terminar = document.querySelector('.terminar')


function pegaTarefas(pai){
    tarefasRegistradas.forEach(task =>{

        const el = document.createElement('div')
        el.classList.add('tarefa-lista')
        el.innerHTML= `Tarefa : <span class='span-tarefa'>${task}</span>`

        pai.append(el)
    })
    return pai
}

let verificaParaOX = false
function mostrarTarefas(){
    
    
        const pai = document.querySelector('.container-geral')
        const teste = document.querySelector('.terminar-container')
        if(teste){
           teste.remove()
        }
         else{
            const terminarContainer = document.createElement('div')
            terminarContainer.classList.add('terminar-container')
            const ret =  pegaTarefas(terminarContainer)
            pai.append(ret)   
        }
        criaFechar()
}


 function criaFechar(){
            const pai = document.querySelector('.terminar-container')
            const div = document.createElement('div')
            div.classList.add('x')
            div.innerHTML='fechar'
            
            if(div){
               pai.append(div)
            }else{
                console.log('Div retirada');
            }
            apagaPai(div,pai)
       
    }

function apagaPai(el,pai){
    el.addEventListener('click',()=>{
        pai.remove()
    })
}
terminar.addEventListener('click', mostrarTarefas)


