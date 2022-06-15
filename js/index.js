window.onload = function() {
    const button = ()=> {
        const burger = document.getElementById("burger");
        const sMenu = document.getElementById("sub-menu");
        burger.addEventListener('click', ()=> {
            burger.classList.toggle('toggle');
            sMenu.classList.toggle('title-none');
        });
    }
    
    button();
}