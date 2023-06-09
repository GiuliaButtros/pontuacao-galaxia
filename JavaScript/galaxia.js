const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const toggleModal = () => {
    modal.classList.toggle("hide"); // toggle: A classe está, ela é removida / a classe não está, ela é adicionada
    /*fade.classList.toggle("hide");*/

    /*
    resumo do array:
    const toggleModal = () => {
    [modal,fade].forEach((el) => el.classList.toggle("hide"));  

    }
    */
}

const bodies = document.querySelector('.bodies').cloneNode(true); 
// assim só seleciona o primeiro filho, mas quando usa 
// tentar querySelectorAll

const display = document.querySelector('.display');

//evento padrão em vários elementos:

[openModalButton, closeModalButton /*, fade*/].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
})

//Drag & Drop 

bodies.addEventListener('dragstart', dragStart);
bodies.addEventListener('dragend', dragEnd);

display.addEventListener('dragover', dragOver); // MUDAR FADE PARA DISPLAY
display.addEventListener('dragenter', dragEnter);
display.addEventListener('dragleave', dragLeave);
display.addEventListener('drop', dragDrop);

// Drag & Drop functions

function dragStart(){
    console.log('start');
}

function dragEnd() {
    this.className = 'bodies';
    console.log('end');
}

function dragOver(e) {
    e.preventDefault();
    console.log('over');
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered'
    console.log('enter')  ;  
}

function dragLeave() {
    this.className = 'display'
    console.log('leave');
}

function dragDrop() {
    this.className = 'display'
    this.append(bodies);
    console.log('drop');
}
