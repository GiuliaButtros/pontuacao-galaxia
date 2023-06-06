const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const celestialBody = document.querySelectorAll(".modal-body button");

const toggleModal = () => {
    modal.classList.toggle("hide"); // toggle: A classe está, ela removida / a classe não está, ela é adicionada
    fade.classList.toggle("hide");
}

/*
resumo do array:
const toggleModal = () => {
    [modal,fade].forEach((el) => el.classList.toggle("hide"));  

}
*/

//evento padrão em vários elementos:


[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
})


for (let index = 0; index < celestialBody.length; index++) {
    celestialBody[index].onclick = ({ target }) => {
        const body = target.getAttribute("id");

        console.log(body);
    };
    
}

function updateDisplay(body){

}