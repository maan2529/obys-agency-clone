//loder animation

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
    delay: 3.5,
})

tl.to("#loder", {
    y: "-100%",
    duration: 1,
    delay: 0.5,
})
tl.to("#loder", {
    display: "none",
})


/*loder Animation end*/
