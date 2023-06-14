const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const toggleModal = () => {
    modal.classList.toggle("hide"); // toggle: A classe está, ela é removida / a classe não está, ela é adicionada

    /*
    resumo do array:
    const toggleModal = () => {
    [modal,fade].forEach((el) => el.classList.toggle("hide"));  
    }
    */
    
    /*fade.classList.toggle("hide");*/ // fade removido por enquanto pois estava entrando na fente do display e atrapalhando o drag&drop

    
}

let bodies = document.querySelectorAll('.bodies'); 
/*let body = document.getElementById('id');*/

let display = document.querySelector('.display');

let cloneBodies = [ ];


//evento padrão em vários elementos:

[openModalButton, closeModalButton /*, fade*/].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
})


//Drag & Drop 

for (let index = 0; index < bodies.length; index++) { // para ver se ao clicar em cada item eles são slecionados individualmente - OK
    bodies[index].onclick = ({target}) => {
        const body = target.getAttribute("data-key");
        console.log(body);
    }
}

//loop
bodies.forEach(body => { // Object.keys(bodies)?
    body.addEventListener('dragstart', dragStart);
    body.addEventListener('dragend', dragEnd);
    cloneBodies.push(body.cloneNode(true)); //para clonae

    
});


//display
display.addEventListener('dragover', dragOver);
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
    for (const body of cloneBodies){
        display.appendChild(body); // está colando TODOS os objetos .bodies ao invés de só o que está sendo arrastado
        console.log(body);
    }

    console.log('drop');
}
