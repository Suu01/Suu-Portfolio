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

    // 추가 -> header 메뉴 클릭 시, 서브메뉴 접히게
}