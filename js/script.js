

let menu = document.getElementById('menu');
let toggleOpen = document.getElementById('toggleOpen');
let toggleClose = document.getElementById('toggleClose');

toggleOpen.addEventListener('click', toggleMenu);
toggleClose.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('mostrarMenu');

    if(menu.classList.contains('mostrarMenu')){
        toggleOpen.style.display = 'none';
        toggleClose.style.display = 'block';
    }
    else{
        toggleOpen.style.display = 'block';
        toggleClose.style.display = 'none';
    }
}
