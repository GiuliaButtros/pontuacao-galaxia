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

let bodies = document.querySelectorAll('.bodies'); 

let display = document.querySelector('.display');

let cloneBodies = [ ];

//evento padrão em vários elementos:

[openModalButton, closeModalButton /*, fade*/].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
})

//Drag & Drop 

//loop
for(const body of bodies){ // Object.keys(bodies)?
    body.addEventListener('dragstart', dragStart);
    body.addEventListener('dragend', dragEnd);
    cloneBodies.push(body.cloneNode(true));
    
}

//display
display.addEventListener('dragover', dragOver);
display.addEventListener('dragenter', dragEnter);
display.addEventListener('dragleave', dragLeave);
display.addEventListener('drop', dragDrop);

display.appendChild(cloneBodies);

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
