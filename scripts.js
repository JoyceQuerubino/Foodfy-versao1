
//Declarando variáveis
const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const closeModal = document.querySelector('.fechar-modal')

for(let card of cards){
    card.addEventListener( "click", function(){
    
        modalOverlay.classList.add('active')
        
        const imagemID = card.getAttribute('id')
        modalOverlay.querySelector('img').src = `/assets/${imagemID}.png`
        
        const cardRecipe = card.querySelector('h2').innerHTML
        modalOverlay.querySelector('h2').innerHTML = cardRecipe

        const cardChef = card.querySelector('h3').innerHTML
        modalOverlay.querySelector('h3').innerHTML = cardChef

        
    })
}

//Ação de fechar
if(closeModal){
    closeModal.addEventListener('click', function () {
        modalOverlay.classList.remove('active');
    })
}

