import  Modal  from './modal.js';

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescryption = document.querySelector('.modal p')
const modalButton = document. querySelector('.modal button')

//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

//Pegar quando o marcar como lido for clicado
checkButtons.forEach(button => {
    //adicionar a escuta
    button.addEventListener('click', handleClick)
})

//Quando o botão delete for clicado ele abre a modal
const deleteButtons = document.querySelectorAll('.actions a.delete')

//Pegar quando o delete for clicado
deleteButtons.forEach(button =>{
    //adicionar a escuta
    button.addEventListener('click', (event) => handleClick(event, false))
})

function handleClick(event, check = true){
    event.preventDefault() // impede que o botão recarregue a pg
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector('#room-id').dataset.id
    const questionId = event.target.dataset.id

    //seleciona o formulario
    const form = document.querySelector('.modal form')
    //mudando o atributo
    form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta?`
    modalDescryption.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`
    check ? modalButton.classList.remove('red') : modalButton.classList.add('red')
    //Abrir a modal
    modal.open()
}
