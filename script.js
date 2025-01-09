function loadingAnimation() {
    let tl = gsap.timeline();


    tl.from("#loder .line h1", {
        y: "12vw",
        duration: 0.6,
        stagger: 0.25,
        delay: 0.5,

    })
    tl.from("#line-one-part1 h5,h6 , .line h2", {
        opacity: 0,
        onStart: function () {
            let loderCounter = document.querySelector(".line #line-one-part1 h6");
            let count = 0;
            let clearInter = setInterval(() => {
                if (count < 100) {
                    loderCounter.textContent = count;
                    count++;
                } else {
                    count = 100;
                    loderCounter.textContent = count;
                    clearInterval(clearInter);
                }
            }, 35)
        }
    })
    tl.from("#waitMsg", {
        scale: 0,
        duration: 0.8,
    })

    tl.to("#loder .line ,#waitMsg ", {
        opacity: 0,
        duration: 1,
        // delay: 3.5,
        delay: 0,
    })

    tl.to("#loder", {
        y: "-100%",
        duration: 1,
        delay: 0.5,
    })
    tl.to("#loder", {
        display: "none",
    })
    tl.from("#nav",{
        opacity:0,
    })
    tl.from("#page1-body h1",{
        y:100,
        stagger:0.2,
    })

}
function cursorAnime() {
    let crsr = document.querySelector('#crsr');
    document.addEventListener("mousemove", function (cordinate) {
        gsap.to(crsr, {
            x: cordinate.x,
            y: cordinate.y,
            transform: "translate(-50% , -50%)",
        })

    })


    // on hover scroller bada hoga thoda sa , svg pe apply nahi hora , krna hai.
    let nav = document.querySelector('#nav');
    nav.addEventListener('mouseover', function (e) {

        if (e.target.class === "brand__svg" || e.target.id === "nav-a") {
            gsap.to(crsr, {
                scale: 2,
                duration: 0.3,

            })
        }

    })

    //magnet affect
    Shery.makeMagnet("#nav-right p ,#obys-logo", {});

}

loadingAnimation();
cursorAnime();





