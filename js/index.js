window.onload = function() {

    // header 상세메뉴의 스크립트 동작 이벤트
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
        
        var location = document.querySelector("#main-section").offsetTop;
        window.scroll({
            behavior: 'smooth',
            sleft: 0,
            top: location
        });
    });
    sMenuBtn2.addEventListener('click', ()=> {
        sMenu.classList.toggle('title-none');
        burger.className = "burger";

        var location2 = document.querySelector("#about").offsetTop;
        window.scroll({
            behavior: 'smooth',
            sleft: 0,
            top: location2
        });
    });
    sMenuBtn3.addEventListener('click', ()=> {
        sMenu.classList.toggle('title-none');
        burger.className = "burger";

        var location3 = document.querySelector("#skills").offsetTop;
        window.scroll({
            behavior: 'smooth',
            sleft: 0,
            top: location3
        });
    });
    sMenuBtn4.addEventListener('click', ()=> {
        sMenu.classList.toggle('title-none');
        burger.className = "burger";

        var location4 = document.querySelector("#portfolio").offsetTop;
        window.scroll({
            behavior: 'smooth',
            sleft: 0,
            top: location4
        });
    });
    sMenuBtn5.addEventListener('click', ()=> {
        sMenu.classList.toggle('title-none');
        burger.className = "burger";

        var location5 = document.querySelector("#contact").offsetTop;
        window.scroll({
            behavior: 'smooth',
            sleft: 0,
            top: location5
        });
    });

    
    // 스크롤 부드럽게 이동하는 스크립트
    document.querySelector(".home-m").addEventListener('click', function(){
        var location = document.querySelector("#main-section").offsetTop;
        window.scroll({
            behavior: 'smooth',
            sleft: 0,
            top: location
        });
    });
    document.querySelector(".about-m").addEventListener('click', function(){
        var location2 = document.querySelector("#about").offsetTop;
        window.scroll({
            behavior: 'smooth',
            sleft: 0,
            top: location2
        });
    });
    document.querySelector(".skills-m").addEventListener('click', function(){
        var location3 = document.querySelector("#skills").offsetTop;
        window.scroll({
            behavior: 'smooth',
            sleft: 0,
            top: location3
        });
    });
    document.querySelector(".portfolio-m").addEventListener('click', function(){
        var location4 = document.querySelector("#portfolio").offsetTop;
        window.scroll({
            behavior: 'smooth',
            sleft: 0,
            top: location4
        });
    });
    document.querySelector(".contact-m").addEventListener('click', function(){
        var location5 = document.querySelector("#contact").offsetTop;
        window.scroll({
            behavior: 'smooth',
            sleft: 0,
            top: location5
        });
    });


    // portfolio
    const detail = document.querySelector(".details");
    const overlay = document.querySelector(".pf-des1");
    const closeBtn = document.querySelector(".closebtn");
    detail.addEventListener("click", () => {
        overlay.style.visibility = 'visible';
        document.body.style.height = '100%';
        document.body.style.overflow = 'hidden';
    })
    closeBtn.addEventListener("click", () => {
        overlay.style.visibility = 'hidden';
        document.body.style.overflow = 'scroll';
    })

    const detail2 = document.querySelector(".details2");
    const overlay2 = document.querySelector(".pf-des2");
    const closeBtn2 = document.querySelector(".pf-des2 .closebtn");
    detail2.addEventListener("click", () => {
        overlay2.style.visibility = 'visible';
        document.body.style.overflow = 'hidden';
    })
    closeBtn2.addEventListener("click", () => {
        overlay2.style.visibility = 'hidden';
        document.body.style.overflow = 'scroll';
    })

    const detail3 = document.querySelector(".details3");
    const overlay3 = document.querySelector(".pf-des3");
    const closeBtn3 = document.querySelector(".pf-des3 .closebtn");
    detail3.addEventListener("click", () => {
        overlay3.style.visibility = 'visible';
        document.body.style.overflow = 'hidden';
    })
    closeBtn3.addEventListener("click", () => {
        overlay3.style.visibility = 'hidden';
        document.body.style.overflow = 'scroll';
    })

    const detail4 = document.querySelector(".details4");
    const overlay4 = document.querySelector(".pf-des4");
    const closeBtn4 = document.querySelector(".pf-des4 .closebtn");
    detail4.addEventListener("click", () => {
        overlay4.style.visibility = 'visible';
        document.body.style.overflow = 'hidden';
    })
    closeBtn4.addEventListener("click", () => {
        overlay4.style.visibility = 'hidden';
        document.body.style.overflow = 'scroll';
    })

};
