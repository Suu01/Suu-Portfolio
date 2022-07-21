window.onload = function() {

    // header
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

    
    // 메뉴 클릭 시, 스크롤 부드럽게 이동
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


    // main

    // skills
    // skills 원 클릭 시 상세 내용 출력
    if(matchMedia("screen and (max-width: 320px)").matches){
    }else if(matchMedia("screen and (max-width: 768px)").matches){
    }else if(matchMedia("screen and (min-width: 1440px)").matches){
        const circle1 = document.querySelector(".circle1");
        const circle2 = document.querySelector(".circle2");
        const circle3 = document.querySelector(".circle3");
        const circle4 = document.querySelector(".circle4");
        const circle5 = document.querySelector(".circle5");
        const circle6 = document.querySelector(".circle6");
        const circle7 = document.querySelector(".circle7");
        const circle8 = document.querySelector(".circle8");
        const skills = document.querySelector(".skills-ci-wrap");
        const skillsDes = document.querySelector(".skills-ci-wrap p");

        circle1.addEventListener("mouseover", () => {
            skills.style.visibility = "visible";
            skills.style.opacity = "1";
            skills.style.transition = "0.5s";
            const output = `기본적인 툴에 대한 이해도가 높으며, 와이어프레임을 구성하여 웹페이지 시안 작업이 가능합니다.`;
            skillsDes.innerHTML = output;
        })
        circle1.addEventListener("mouseout", () => {
            skills.style.visibility = "hidden";
            skills.style.opacity = "0";
            skills.style.transition = "0.5s";
        })

        circle2.addEventListener("mouseover", () => {
            skills.style.visibility = "visible";
            skills.style.opacity = "1";
            skills.style.transition = "0.5s";
            const output = `로고제작을 할 수 있으며, 펜툴을 사용하여 기본적인 드로잉 작업이 가능합니다.`;
            skillsDes.innerHTML = output;
        })
        circle2.addEventListener("mouseout", () => {
            skills.style.visibility = "hidden";
            skills.style.opacity = "0";
            skills.style.transition = "0.5s";
        })

        circle3.addEventListener("mouseover", () => {
            skills.style.visibility = "visible";
            skills.style.opacity = "1";
            skills.style.transition = "0.5s";
            const output = `웹표준에 알맞게 적절한 태그를 사용할 수 있으며, 시멘틱 태그를 통하여 웹표준과 웹접근성에 어긋나지 않는 구조를 짤 수 있습니다.`;
            skillsDes.innerHTML = output;
        })
        circle3.addEventListener("mouseout", () => {
            skills.style.visibility = "hidden";
            skills.style.opacity = "0";
            skills.style.transition = "0.5s";
        })

        circle4.addEventListener("mouseover", () => {
            skills.style.visibility = "visible";
            skills.style.opacity = "1";
            skills.style.transition = "0.5s";
            const output = `flex, animation 등을 사용해 다양한 디자인 효과를 나타낼 수 있으며, 미디어 쿼리를 통해 반응형 웹을 구현할 수 있습니다.`;
            skillsDes.innerHTML = output;
        })
        circle4.addEventListener("mouseout", () => {
            skills.style.visibility = "hidden";
            skills.style.opacity = "0";
            skills.style.transition = "0.5s";
        })

        circle5.addEventListener("mouseover", () => {
            skills.style.visibility = "visible";
            skills.style.opacity = "1";
            skills.style.transition = "0.5s";
            const output = `자바스크립트의 코드들을 잘 파악하고 분석할 수 있으며, 함수, 제어문, 객체, 이벤트 등 자바스크립트에 대한 기본적인 코딩이 가능합니다.`;
            skillsDes.innerHTML = output;
        })
        circle5.addEventListener("mouseout", () => {
            skills.style.visibility = "hidden";
            skills.style.opacity = "0";
            skills.style.transition = "0.5s";
        })

        circle6.addEventListener("mouseover", () => {
            skills.style.visibility = "visible";
            skills.style.opacity = "1";
            skills.style.transition = "0.5s";
            const output = `코드들을 잘 파악하고 분석할 수 있으며, 함수, 제어문, 객체, 이벤트 등 기본적인 코딩이 가능합니다. 또한 플러그인 사용이 가능합니다.`;
            skillsDes.innerHTML = output;
        })
        circle6.addEventListener("mouseout", () => {
            skills.style.visibility = "hidden";
            skills.style.opacity = "0";
            skills.style.transition = "0.5s";
        })

        circle7.addEventListener("mouseover", () => {
            skills.style.visibility = "visible";
            skills.style.opacity = "1";
            skills.style.transition = "0.5s";
            const output = `팀프로젝트를 진행하며 깃허브를 사용한 협업의 경험이 있어 Git에 능숙합니다.`;
            skillsDes.innerHTML = output;
        })
        circle7.addEventListener("mouseout", () => {
            skills.style.visibility = "hidden";
            skills.style.opacity = "0";
            skills.style.transition = "0.5s";
        })

        circle8.addEventListener("mouseover", () => {
            skills.style.visibility = "visible";
            skills.style.opacity = "1";
            skills.style.transition = "0.5s";
            const output = `리액트의 기초적인 지식을 가지고 있어 어느정도의 코딩이 가능합니다.`;
            skillsDes.innerHTML = output;
        })
        circle8.addEventListener("mouseout", () => {
            skills.style.visibility = "hidden";
            skills.style.opacity = "0";
            skills.style.transition = "0.5s";
        })
    }

    // portfolio details 상세창
    const detail = document.querySelector(".de");
    const overlay = document.querySelector(".pf-des1");
    const closeBtn = document.querySelector(".closebtn");
    detail.addEventListener("click", () => {
        overlay.style.visibility = 'visible';
        document.body.style.height = '100%';
        document.body.style.overflow = 'hidden';
    })
    closeBtn.addEventListener("click", () => {
        overlay.style.visibility = 'hidden';
        document.body.style.overflowY = 'scroll';
    })

    const detail2 = document.querySelector(".de2");
    const overlay2 = document.querySelector(".pf-des2");
    const closeBtn2 = document.querySelector(".pf-des2 .closebtn");
    detail2.addEventListener("click", () => {
        overlay2.style.visibility = 'visible';
        document.body.style.overflow = 'hidden';
    })
    closeBtn2.addEventListener("click", () => {
        overlay2.style.visibility = 'hidden';
        document.body.style.overflowY = 'scroll';
    })

    const detail3 = document.querySelector(".de3");
    const overlay3 = document.querySelector(".pf-des3");
    const closeBtn3 = document.querySelector(".pf-des3 .closebtn");
    detail3.addEventListener("click", () => {
        overlay3.style.visibility = 'visible';
        document.body.style.overflow = 'hidden';
    })
    closeBtn3.addEventListener("click", () => {
        overlay3.style.visibility = 'hidden';
        document.body.style.overflowY = 'scroll';
    })

    const detail4 = document.querySelector(".de4");
    const overlay4 = document.querySelector(".pf-des4");
    const closeBtn4 = document.querySelector(".pf-des4 .closebtn");
    detail4.addEventListener("click", () => {
        overlay4.style.visibility = 'visible';
        document.body.style.overflow = 'hidden';
    })
    closeBtn4.addEventListener("click", () => {
        overlay4.style.visibility = 'hidden';
        document.body.style.overflowY = 'scroll';
    })
};