const offcanvasElement = document.getElementById('offcanvasScrolling');
const navbarElement = document.querySelector('.box-center');

offcanvasElement.addEventListener('show.bs.offcanvas', () => {
    navbarElement.classList.add('nav-expanded');
});

offcanvasElement.addEventListener('hide.bs.offcanvas', () => {
    navbarElement.classList.remove('nav-expanded');
});