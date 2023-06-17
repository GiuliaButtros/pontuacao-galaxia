const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');

const validateInput = ({target}) => { 
    if (target.value.length > 2){
        button.removeAttribute('disabled'); // Para habilitar o botã caso o usuário digite + de 2 caracteres
        return;

        // ou utilizar o else com a ação abaixo
    }
    button.setAttribute('disabled', ''); // Para desabilitar o botão caso o usuário apague os caracteres
}

/*let nomeAluno = document.getElementById ('nome-login').value;

document.getElementById('nome-login').innerHTML = nomeAluno;*/

/*function updateNome(){
    let nomeAluno = document.getElementById ('nome-login').value;
    document.getElementById('nome-aluno').innerHTML = nomeAluno;
}*/

document.getElementById('login-form').addEventListener('submit', function(event){
    event.preventDefault();

    let nomeAluno = document.getElementById('nome-login').value;
    localStorage.setItem('nomeAluno', nomeAluno); //Armazena o nomeAluno no localStorage para acesso na pág principal

    window.location.href='pages/galaxia.html'; // após o submit o usuário será encaminhado para a próxima página
});

/*const handleSubmit = (event) => {
    event.preventDefault(); // prevenir o comportamento padrão de recarregar a página quando faz submit

    localStorage.setItem('aluno', input.value); // salva a chave 'aluno' + o que o usuário digitar no input

    window.location = 'pages/galaxia.html'   // após o submit o usuário será encaminhado para a próxima página

}*/

input.addEventListener('input', validateInput); // Chama a funçao acima de validar o input

form.addEventListener('submit', handleSubmit); // Chama a função acima de fazer o submit

