// LÓGICA DO BOTÃO ADICIONAR
const btAdd = document.querySelector('.adicionar');
const tarefasRegistradas = [];
const tarefasFinalizadas =[]
const finalizadas = document.querySelector('.finalizadas')
const terminar = document.querySelector('.terminar')




function verificaContainer(el){
    if(el)el.remove()
}
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

function add() {
    btAdd.style.display='none'
    const divAdd = document.createElement('div');
    divAdd.classList.add('div-add');
    const paiTitulos = document.querySelector('.pai-titulos');
    paiTitulos.classList.add('pai-titulos-add');
    el(divAdd, paiTitulos);
    hideElement('.terminar');
    hideElement('.finalizadas');
    verificaContainer(document.querySelector('.container'))

    const tasksFazer = document.querySelector('.tasks-terminar')
    tasksFazer.innerHTML= tarefasRegistradas.length + 1

    
    
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


function pegaTarefas(pai){
    tarefasRegistradas.forEach(task =>{

        const el = document.createElement('div')
        el.classList.add('tarefa-lista')
        el.innerHTML= `Tarefa : <span class='span-tarefa'>${task}</span>`

      
        
        const img = document.createElement('img')
        img.classList.add('img-confirm')
        img.src='imagens/icons8-check-mark-50.png'
        el.append(img)
        pai.append(el)
    })
   
    return pai
}

let verificaParaOX = false


function mostrarTarefas(){

      const testeDeContainer =   document.querySelector('.finalizadas-container')
      if(testeDeContainer){
        testeDeContainer.remove()    
    } 
    
        const pai = document.querySelector('.container-geral')
        const teste = document.querySelector('.terminar-container')
        if(teste){
            teste.remove()
        }
        else{
            const terminarContainer = document.createElement('div')
            terminarContainer.classList.add('terminar-container')
            criaFechar(terminarContainer)
            adicinonaTitulo(terminarContainer, 'Tarefas a Finalizar')
            terminarContainer.classList.add('container')
            const ret =  pegaTarefas(terminarContainer)
            pai.append(ret)   
        }

        
        const imgs =  document.querySelectorAll('.img-confirm')
        imgs.forEach(img=>{
            
            img.addEventListener('click', ()=>{
                console.log(tarefasFinalizadas);
                const irmao = img.previousElementSibling
                const valueIrmao = irmao.innerHTML
                console.log(valueIrmao);
                tarefasFinalizadas.push(valueIrmao)
                tarefasRegistradas.pop(valueIrmao)
                img.parentElement.remove()

                const tasksTerminar = document.querySelector('.tasks-finalizadas')
                tasksTerminar.innerHTML = tarefasFinalizadas.length

                const tasksFazer = document.querySelector('.tasks-terminar')
                tasksFazer.innerHTML= tarefasRegistradas.length 
                
            })
        })
   
}


 function criaFechar(pai){
        
            const div = document.createElement('div')
            div.classList.add('x')
            div.innerHTML='fechar'    
            if(el)pai.append(div)               
            else console.log('Div retirada');          
            apagaPai(div,pai)
       
    }

function apagaPai(el,pai){
    el.addEventListener('click',()=>{
        pai.remove()
    })
}
function adicinonaTitulo(pai, text){
    const h2 = document.createElement('h2')
    h2.innerHTML=text
    h2.classList.add('h2')
    pai.append(h2)

}

function pegarTarefasFinalizadas(pai){
    tarefasFinalizadas.forEach(task =>{

        const el = document.createElement('div')
        el.classList.add('tarefa-lista')
        el.innerHTML= `Tarefa Finalizada : <span class='span-tarefa'>${task}</span> <img class='img-lixeira' src="imagens/icons8-lixeira-30.png" alt="">`
        console.log('aqui foi');
        
        console.log(`Pegou a tarefa ${task}`);
        
        pai.append(el)
        
    })
    return pai
}
function exibirTarefasFinalizadas(){

        const testeDeContainer = document.querySelector('.terminar-container')
        if(testeDeContainer) testeDeContainer.remove()

        const pai = document.createElement('div')
        pai.classList.add('container')
        pai.classList.add('finalizadas-container')
        adicinonaTitulo(pai, 'Tarefas Finalizadas')

        const containerGeral = document.querySelector('.container-geral')
        const teste = containerGeral.querySelector('.finalizadas-container')

        if(teste){
            teste.remove()
        }else{
            const retorno = pegarTarefasFinalizadas(pai)
            containerGeral.append(retorno)
            // console.log(tarefasFinalizadas);
        }
        
        
        criaFechar(pai)

        const lixeiras = document.querySelectorAll('.img-lixeira')
        lixeiras.forEach(lixeira=>{
            lixeira.addEventListener('click',()=>{
                lixeira.parentElement.remove()
                const valueIrmao = lixeira.previousElementSibling.value
                tarefasFinalizadas.pop(valueIrmao)

                const tasksTerminar = document.querySelector('.tasks-finalizadas')
                tasksTerminar.innerHTML = tarefasFinalizadas.length

            })
            
        })
       

}


terminar.addEventListener('click', mostrarTarefas)
finalizadas.addEventListener('click', exibirTarefasFinalizadas)

