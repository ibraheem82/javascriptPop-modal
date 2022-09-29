'use strict';
const modal         =  document.querySelector('.modal');
const overlay       = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');


// *when the button is pressed the modal should be open. 
const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// * it will add the hidden class to the button
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


//  ! Looping through all the buttons
for(let i  = 0; i < btnsOpenModal.length; i++)
    // console.log(btnsOpenModal[i].textContent);
    // * anytime each button is clicked.
    btnsOpenModal[i].addEventListener('click', openModal);


    btnCloseModal.addEventListener('click', closeModal)


    overlay.addEventListener('click', closeModal)
    // overlay.addEventListener('click', function() {
    //     modal.classList.add('hidden');
    //     overlay.classList.add('hidden');   
    // })


    document.addEventListener('keydown', function (e) {
        console.log(e.key);
            if(e.key === 'Escape' && !modal.classList.contains('hidden')) {

                closeModal();
        }
});