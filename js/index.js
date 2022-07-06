window.onload = function() {

    // header 상세메뉴의 스크립트 동작 이벤트
    const button = ()=> {
        const burger = document.getElementById("burger");
        const sMenu = document.getElementById("sub-menu");

        const sMenuBtn1 = document.querySelector(".s-menu-btn1");
        const sMenuBtn2 = document.querySelector(".s-menu-btn2");
        const sMenuBtn3 = document.querySelector(".s-menu-btn3");
        const sMenuBtn4 = document.querySelector(".s-menu-btn4");
        const sMenuBtn5 = document.querySelector(".s-menu-btn5");

        burger.addEventListener('click', ()=> {
            burger.classList.toggle('toggle');
            sMenu.classList.toggle('title-none');
        });

        sMenuBtn1.addEventListener('click', ()=> {
            sMenu.classList.toggle('title-none');
            burger.className = "burger";
        });

        sMenuBtn2.addEventListener('click', ()=> {
            sMenu.classList.toggle('title-none');
            burger.className = "burger";
        });

        sMenuBtn3.addEventListener('click', ()=> {
            sMenu.classList.toggle('title-none');
            burger.className = "burger";
        });

        sMenuBtn4.addEventListener('click', ()=> {
            sMenu.classList.toggle('title-none');
            burger.className = "burger";
        });

        sMenuBtn5.addEventListener('click', ()=> {
            sMenu.classList.toggle('title-none');
            burger.className = "burger";
        });
    }
    button();
};
