/////////////SPLIT//////////////
{
    const myName = new SplitType('.f-descr h2')
    gsap.to(`.char`,{
    y : 0,
    stagger : 0.05,
    delay : 0.2,
    duration : .1,
})
}
//
///////SCROLL REVEAL//////////
ScrollReveal().reveal('.descr ul', {
    delay: 300, 
    duration: 1800, 
    origin: 'right',
    distance: '60px',
    easing: 'ease-out', 
    reset: false ,
});
ScrollReveal().reveal('.descr p', {
    delay: 300, 
    duration: 1800, 
    origin: 'left',
    distance: '60px',
    easing: 'ease-out', 
    reset: false ,
});




