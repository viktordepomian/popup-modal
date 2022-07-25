const modalCont = document.querySelector('#modal-container');
const btn = document.querySelector('#btn');
const closeBtn = document.querySelector('.closeBtn');

btn.addEventListener('click', function(){
    modalCont.classList.add('shown');
});

closeBtn.addEventListener('click', function(){
    modalCont.classList.remove('shown');
});