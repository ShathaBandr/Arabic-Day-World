let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
    header.classList('shadow', window.screenY > 0);
});
