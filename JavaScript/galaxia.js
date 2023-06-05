const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

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