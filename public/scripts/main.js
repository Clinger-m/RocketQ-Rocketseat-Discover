import  Modal  from './modal.js';

const modal = Modal()

//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

//Pegar quando o marcar como lido for clicado
checkButtons.forEach(button => {
    //adicionar a escuta
    button.addEventListener('click', event => {
        //Abrir modal
        modal.open()
    })
})

//Quando o botão delete for clicado ele abre a modal
const deleteButtons = document.querySelectorAll('.actions a.delete')
//Pegar quando o delete for clicado
deleteButtons.forEach(button =>{
    //adicionar a escuta
    button.addEventListener('click', event =>{
        //Abrir a modal
        modal.open()
    })
})
